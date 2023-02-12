import React, { createContext, ReactNode, useEffect, useState } from "react";
import { calculatorApi } from "../services/api";
import toast from "react-hot-toast";

interface ProviderProps {
  children: ReactNode;
}

interface IResult {
  value1: number;
  value2: number;
  value3: number;
  value4: number;
}

interface ListProvider {
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  setInstallments: React.Dispatch<React.SetStateAction<string>>;
  setMdr: React.Dispatch<React.SetStateAction<string>>;
  result: IResult;
  days: IResult;
  setDays: React.Dispatch<React.SetStateAction<IResult>>;
  formatValue: (value: number) => string;
  amount: string | number;
}

export const CalculatorContext = createContext<ListProvider>(
  {} as ListProvider
);

const CalculatorProvider = ({ children }: ProviderProps) => {
  const [amount, setAmount] = useState("");
  const [installments, setInstallments] = useState("");
  const [mdr, setMdr] = useState("");
  const [result, setResult] = useState<IResult>({} as IResult);
  const [days, setDays] = useState<IResult>({
    value1: 1,
    value2: 15,
    value3: 30,
    value4: 90,
  } as IResult);

  useEffect(() => {
    setResult({} as IResult);
    if (amount != "" && installments != "" && mdr != "") {
      const newDays = manipulateDays(days);

      const replaceAmount = amount.replace(".", "").replace(",", ".");
      let newAmount: number = parseFloat(replaceAmount);
      newAmount = Math.round(newAmount * 100);

      if (validatedData(newAmount)) {
        calculatorApi
          .post("", {
            amount: newAmount,
            installments,
            mdr,
            days: newDays,
          })
          .then((res) => {
            setResult({
              value1: res.data[days.value1],
              value2: res.data[days.value2],
              value3: res.data[days.value3],
              value4: res.data[days.value4],
            });
          })
          .catch((err) => {
            setResult({} as IResult);
            toast.error(err.message)
          });
      }
    }
  }, [amount, installments, mdr, days]);

  const formatValue = (value: number) =>
    Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  const manipulateDays = (days: IResult) => {
    const newDays: number[] = [];
    Object.values(days).forEach((day) => {
      if (day > 0) {
        newDays.push(day);
      }
    });

    return newDays;
  };

  const validatedData = (amount: number) => {
    if (Number.isNaN(parseInt(installments))) {
      toast.error("O campo parcelas deve ser um número!");
      return false;
    }
    if (Number.isNaN(parseInt(mdr))) {
      toast.error("O campo de MDR deve ser um número!");
      return false;
    }
    if (amount < 1000) {
      toast.error("O valor de venda deve ser maior ou igual a 10!");
      return false;
    }
    if (parseInt(installments) > 12 || parseInt(installments) < 1) {
      toast.error("O valor de parcelas deve ser entre 1 e 12!");
      return false;
    }
    if (parseInt(mdr) > 100) {
      toast.error("O valor de MDR deve ser menor que 100!");
      return false;
    }

    return true;
  };

  return (
    <CalculatorContext.Provider
      value={{
        setAmount,
        setInstallments,
        setMdr,
        result,
        days,
        setDays,
        formatValue,
        amount,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;

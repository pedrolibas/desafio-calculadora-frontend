import React, { createContext, ReactNode, useEffect, useState } from "react";
import { calculatorApi } from "../services/api";

interface ProviderProps {
  children: ReactNode;
}

interface IResult {
  1: number | undefined;
  15: number | undefined;
  30: number | undefined;
  45: number | undefined;
  60: number | undefined;
  75: number | undefined;
  90: number | undefined;
}

interface ListProvider {
  setAmount: React.Dispatch<React.SetStateAction<string>>;
  setInstallments: React.Dispatch<React.SetStateAction<string>>;
  setMdr: React.Dispatch<React.SetStateAction<string>>;
  result: IResult;
  manipulateDays: (num: number) => void;
  days: number[];
  formatValue: (value: number) => string;
  error: string;
}

export const CalculatorContext = createContext<ListProvider>(
  {} as ListProvider
);

const CalculatorProvider = ({ children }: ProviderProps) => {
  const [amount, setAmount] = useState("");
  const [installments, setInstallments] = useState("");
  const [mdr, setMdr] = useState("");
  const [result, setResult] = useState<IResult>({} as IResult);
  const [days, setDays] = useState<number[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    setResult({} as IResult);
    if (amount != "" && installments != "" && mdr != "" && days.length != 0) {
      calculatorApi
        .post("", { amount: parseInt(amount) * 100, installments, mdr, days })
        .then((res) => {
          setResult(res.data);
          setError("");
        })
        .catch((err) => {
          setResult({} as IResult);
          setError("Verique se os valores informados estão corretos!");
        });
    }
  }, [amount, installments, mdr, days]);

  const formatValue = (value: number) =>
    Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  const manipulateDays = (num: number) => {
    if (days.find((number) => number === num)) {
      setDays(days.filter((number) => number != num));
      return;
    }

    setDays([...days, num]);
  };

  return (
    <CalculatorContext.Provider
      value={{
        setAmount,
        setInstallments,
        setMdr,
        result,
        manipulateDays,
        days,
        formatValue,
        error,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;

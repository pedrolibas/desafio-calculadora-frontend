import React, { createContext, ReactNode, useEffect, useState } from "react";
import { calculatorApi } from "../services/api";

interface ProviderProps {
  children: ReactNode;
}

interface ListProvider {
  setAmount: React.Dispatch<React.SetStateAction<number>>;
  setInstallments: React.Dispatch<React.SetStateAction<string>>;
  setMdr: React.Dispatch<React.SetStateAction<string>>;
  result: string[];
}

export const CalculatorContext = createContext<ListProvider>(
  {} as ListProvider
);

const CalculatorProvider = ({ children }: ProviderProps) => {
  const [amount, setAmount] = useState(0);
  const [installments, setInstallments] = useState("");
  const [mdr, setMdr] = useState("");
  const [result, setResult] = useState<string[]>([]);

  useEffect(() => {
    if (amount != 0 && installments != "" && mdr != "") {
      setResult([])
      calculatorApi
        .post("", { amount, installments, mdr })
        .then((res) =>
          setResult([
            formatValue(res.data["1"]/100),
            formatValue(res.data["15"]/100),
            formatValue(res.data["30"]/100),
            formatValue(res.data["90"]/100),
          ])
        )
        .catch(err => setResult([]))
    }
  }, [amount, installments, mdr]);

  const formatValue = (value: number) =>
    Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);

  return (
    <CalculatorContext.Provider
      value={{ setAmount, setInstallments, setMdr, result }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;

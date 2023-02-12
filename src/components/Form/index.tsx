import { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";
import "./styles.css";

const Form = () => {
  const { amount, setAmount, setInstallments, setMdr } =
    useContext(CalculatorContext);

  const formatValue = (value: string | number) => {
    value = value + "";
    value = parseInt(value.replace(/[\D]+/g, ""));
    value = value + "";
    value = value.replace(/([0-9]{2})$/g, ",$1");

    if (value.length > 6) {
      value = value.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");
    }

    setAmount(value);

    if (value == "NaN") setAmount("");
  };

  return (
    <form action="" className="form-calculator">
      <label htmlFor="amount">Informe o valor da venda em reais *</label>
      <input
        type="text"
        id="amount"
        placeholder="Ex.: 1200,00"
        value={amount}
        onChange={(e) => {
          formatValue(e.target.value);
        }}
      />

      <label htmlFor="installments">Em quantas parcelas *</label>
      <input
        type="text"
        id="installments"
        placeholder="Ex.: 3"
        onChange={(e) => {
          setInstallments(e.target.value);
        }}
      />
      <span>Máximo de 12 parcelas</span>

      <label htmlFor="mdr">Informe o percentual de MDR *</label>
      <input
        type="text"
        id="mdr"
        placeholder="Ex.: 4"
        onChange={(e) => {
          setMdr(e.target.value);
        }}
      />
    </form>
  );
};

export default Form;

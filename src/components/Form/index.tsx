import { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";
import "./styles.css";

const Form = () => {
  const { setAmount, setInstallments, setMdr } = useContext(CalculatorContext);

  return (
    <form action="" className="form-calculator">
      <label htmlFor="amount">Informe o valor da venda em reais *</label>
      <input
        type="text"
        id="amount"
        placeholder="Ex.: 1200,00"
        onChange={(e) => {
          setAmount(e.target.value);
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

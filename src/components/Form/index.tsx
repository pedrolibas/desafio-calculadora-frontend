import { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";
import "./styles.css";

const Form = () => {
  const { setAmount, setInstallments, setMdr } = useContext(CalculatorContext);

  return (
    <form action="" className="form-calculator">
      <label htmlFor="amount">Informe o valor da venda *</label>
      <input
        type="text"
        id="amount"
        onChange={(e) => {
          setAmount(parseInt(e.target.value.split("R$ ")[1].replace(/[\D]+/g, "")));
        }}
      />

      <label htmlFor="installments">Em quantas parcelas *</label>
      <input
        type="text"
        id="installments"
        onChange={(e) => {
          setInstallments(e.target.value);
        }}
      />
      <span>Máximo de 12 parcelas</span>

      <label htmlFor="mdr">Informe o percentual de MDR *</label>
      <input
        type="text"
        id="mdr"
        onChange={(e) => {
          setMdr(e.target.value);
        }}
      />
    </form>
  );
};

export default Form;

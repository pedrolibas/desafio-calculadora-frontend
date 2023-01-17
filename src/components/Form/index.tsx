import "./styles.css";

const Form = () => {
  return (
    <form action="" className="form-calculator">
      <label htmlFor="value">Informe o valor da venda *</label>
      <input type="text" id="value" />

      <label htmlFor="installments">Em quantas parcelas *</label>
      <input type="text" id="installments" />
      <span>Máximo de 12 parcelas</span>

      <label htmlFor="percentage">Informe o percentual de MDR *</label>
      <input type="text" id="percentage" />
    </form>
  );
};

export default Form;

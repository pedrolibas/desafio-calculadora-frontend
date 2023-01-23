import { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";
import "./styles.css";

const ResultBox = () => {
  const { result } = useContext(CalculatorContext);
  return (
    <section>
      <h2>VOCÊ RECEBERÁ:</h2>
      <div id="line"></div>
      <ul>
        <li>
          Amanhã: <strong>{result[0] ? result[0] : "R$0,00"}</strong>
        </li>
        <li>
          Em 15 dias: <strong>{result[1] ? result[1] : "R$0,00"}</strong>
        </li>
        <li>
          Em 30 dias: <strong>{result[2] ? result[2] : "R$0,00"}</strong>
        </li>
        <li>
          Em 90 dias: <strong>{result[3] ? result[3] : "R$0,00"}</strong>
        </li>
      </ul>
    </section>
  );
};

export default ResultBox;

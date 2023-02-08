import { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";
import "./styles.css";

const ResultBox = () => {
  const { result, manipulateDays, days, formatValue } =
    useContext(CalculatorContext);

  const validateDay = (day: number) => {
    return days.find((num) => num === day);
  };

  return (
    <section>
      <h2>VOCÊ RECEBERÁ:</h2>
      <div id="line"></div>
      <span>Selecione abaixo as datas que deseja exibir:</span>
      <ul>
        <li>
          <button
            onClick={() => manipulateDays(1)}
            style={{
              color: validateDay(1)
                ? "var(--color-blue)"
                : "var(--color-light-blue)",
              textDecoration: validateDay(1) && "underline",
            }}
          >
            Amanhã:
          </button>
          <strong>
            {result["1"] ? formatValue(result["1"] / 100) : "R$0,00"}
          </strong>
        </li>
        <li>
          <button
            onClick={() => manipulateDays(15)}
            style={{
              color: validateDay(15)
                ? "var(--color-blue)"
                : "var(--color-light-blue)",
              textDecoration: validateDay(15) && "underline",
            }}
          >
            Em 15 dias:
          </button>
          <strong>
            {result["15"] ? formatValue(result["15"] / 100) : "R$0,00"}
          </strong>
        </li>
        <li>
          <button
            onClick={() => manipulateDays(30)}
            style={{
              color: validateDay(30)
                ? "var(--color-blue)"
                : "var(--color-light-blue)",
              textDecoration: validateDay(30) && "underline",
            }}
          >
            Em 30 dias:
          </button>
          <strong>
            {result["30"] ? formatValue(result["30"] / 100) : "R$0,00"}
          </strong>
        </li>
        <li>
          <button
            onClick={() => manipulateDays(45)}
            style={{
              color: validateDay(45)
                ? "var(--color-blue)"
                : "var(--color-light-blue)",
              textDecoration: validateDay(45) && "underline",
            }}
          >
            Em 45 dias:
          </button>
          <strong>
            {result["45"] ? formatValue(result["45"] / 100) : "R$0,00"}
          </strong>
        </li>

        <li>
          <button
            onClick={() => manipulateDays(60)}
            style={{
              color: validateDay(60)
                ? "var(--color-blue)"
                : "var(--color-light-blue)",
              textDecoration: validateDay(60) && "underline",
            }}
          >
            Em 60 dias:
          </button>
          <strong>
            {result["60"] ? formatValue(result["60"] / 100) : "R$0,00"}
          </strong>
        </li>
        <li>
          <button
            onClick={() => manipulateDays(75)}
            style={{
              color: validateDay(75)
                ? "var(--color-blue)"
                : "var(--color-light-blue)",
              textDecoration: validateDay(75) && "underline",
            }}
          >
            Em 75 dias:
          </button>
          <strong>
            {result["75"] ? formatValue(result["75"] / 100) : "R$0,00"}
          </strong>
        </li>
        <li>
          <button
            onClick={() => manipulateDays(90)}
            style={{
              color: validateDay(90)
                ? "var(--color-blue)"
                : "var(--color-light-blue)",
              textDecoration: validateDay(90) && "underline",
            }}
          >
            Em 90 dias:
          </button>
          <strong>
            {result["90"] ? formatValue(result["90"] / 100) : "R$0,00"}
          </strong>
        </li>
      </ul>
    </section>
  );
};

export default ResultBox;

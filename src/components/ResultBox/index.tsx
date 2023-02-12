import { useContext } from "react";
import { CalculatorContext } from "../../contexts/CalculatorContext";
import "./styles.css";

const ResultBox = () => {
  const { result, days, setDays, formatValue } = useContext(CalculatorContext);
  return (
    <section className="container-result">
      <h2>VOCÊ RECEBERÁ:</h2>
      <div id="line"></div>
      <span>Selecione abaixo as datas que deseja exibir:</span>
      <ul className="list-result">
        <li>
          Em
          <input
            type="number"
            value={days.value1}
            onChange={(e) => {
              setDays({ ...days, value1: parseInt(e.target.value) });
            }}
          />
          dia(s):
          <strong>
            {result.value1 ? formatValue(result.value1 / 100) : "R$ 00,00"}
          </strong>
        </li>
        <li>
          Em
          <input
            type="number"
            value={days.value2}
            onChange={(e) =>
              setDays({ ...days, value2: parseInt(e.target.value) })
            }
          />
          dia(s):
          <strong>
            {result.value2 ? formatValue(result.value2 / 100) : "R$ 00,00"}
          </strong>
        </li>
        <li>
          Em
          <input
            type="number"
            value={days.value3}
            onChange={(e) =>
              setDays({ ...days, value3: parseInt(e.target.value) })
            }
          />
          dia(s):
          <strong>
            {result.value3 ? formatValue(result.value3 / 100) : "R$ 00,00"}
          </strong>
        </li>
        <li>
          Em
          <input
            type="number"
            value={days.value4}
            onChange={(e) =>
              setDays({ ...days, value4: parseInt(e.target.value) })
            }
          />
          dia(s):
          <strong>
            {result.value4 ? formatValue(result.value4 / 100) : "R$ 00,00"}
          </strong>
        </li>
      </ul>
    </section>
  );
};

export default ResultBox;

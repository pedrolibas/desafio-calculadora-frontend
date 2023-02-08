import { useContext } from "react";
import Form from "../../components/Form";
import ResultBox from "../../components/ResultBox";
import { CalculatorContext } from "../../contexts/CalculatorContext";
import "./styles.css";

const Home = () => {
  const { error } = useContext(CalculatorContext);

  return (
    <main>
      <div className="container-main">
        <div className="container-calculator">
          <h1>Simule sua Antecipação</h1>
          <h2>{error}</h2>
          <Form />
        </div>
        <div className="calculator-result">
          <ResultBox />
        </div>
      </div>
    </main>
  );
};

export default Home;

import Form from "../../components/Form";
import ResultBox from "../../components/ResultBox";
import "./styles.css";

const Home = () => {
  return (
    <main>
      <div className="container-main">
        <div className="container-calculator">
          <h1>Simule sua Antecipação</h1>
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

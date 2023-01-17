import "./styles.css";

const ResultBox = () => {
  return (
    <section>
      <h2>VOCÊ RECEBERÁ:</h2>
      <div id="line"></div>
      <ul>
        <li>
          Amanhã: <strong>R$ 0,00</strong>
        </li>
        <li>
          Em 15 dias: <strong>R$ 0,00</strong>
        </li>
        <li>
          Em 30 dias: <strong>R$ 0,00</strong>
        </li>
        <li>
          Em 90 dias: <strong>R$ 0,00</strong>
        </li>
      </ul>
    </section>
  );
};

export default ResultBox;

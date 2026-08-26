import { useEffect, useState } from "react";
import EquationCard from "./components/EquationCard";
import WindowCardControl from "./components/WindowCardControl";

import "./PrintWindowCards.css";

type Equation = {
  numerator: number;
  denominator: number;
};

const MathWindowCardPage = () => {
  const [col, setCol] = useState<number>(5);
  const [row, setRow] = useState<number>(5);
  const [operator, setOperator] = useState<string>("+");
  const [equations, setEquations] = useState<Equation[]>([]);

  const generateEquations = () => {
    const getRandomNum = () => Math.floor(Math.random() * 9 + 1);

    const eqs = Array.from({ length: row * col }, (_, __) => ({
      numerator: getRandomNum(),
      denominator: getRandomNum(),
    }));

    setEquations(eqs);
  };

  useEffect(() => {
    generateEquations();
  }, [col, row]);

  console.log(row);
  return (
    <main className="container">
      <div className="info">
        I built this section to generate math window cards for my son since he
        just started 1st grade, to help him build his mathematical skills.
      </div>
      <WindowCardControl
        setCol={setCol}
        setRow={setRow}
        generateEquations={generateEquations}
      />
      <div
        className="content"
        style={{
          gridTemplateRows: `repeat(${row}, 1fr)`,
          gridTemplateColumns: `repeat(${col},1fr)`,
        }}
      >
        {equations.map((eq) => (
          <EquationCard
            numerator={eq.numerator}
            denominator={eq.denominator}
            operator={operator}
          />
        ))}
      </div>
    </main>
  );
};

export default MathWindowCardPage;

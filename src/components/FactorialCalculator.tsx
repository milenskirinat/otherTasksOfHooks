import { useState, useMemo } from "react";

export default function FactorialCalculator() {
  const [number, setNumber] = useState(0);
  const [count, setCount] = useState(0);

  const ourCalculation = () => {};

  const fuctorialCalc = useMemo(ourCalculation, [number]);
  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
      />
      <p>Факториал: {}</p>
      <button onClick={() => setCount(count + 1)}>
        Перерендерить ({count})
      </button>
    </div>
  );
}

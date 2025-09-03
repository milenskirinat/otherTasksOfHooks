import { useState, useEffect } from "react";
import "./FizzBox.css";
import "./BuzzBox.css";
import "./FizzBuzzBox.css";
import Box from "./Box.tsx";
import Title from "./Title.tsx";

export default function FizzBuzz() {
  const [num, setNum] = useState(0);
  const [visibleArray, setVisibleArray] = useState<(string | number)[]>([]);

  useEffect(() => {
    const resArray = [];

    for (let i = 0; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        resArray.push("FizzBuzz");
      } else if (i % 3 === 0) {
        resArray.push("Fizz");
      } else if (i % 5 === 0) {
        resArray.push("Buzz");
      } else {
        resArray.push(i);
      }
    }

    setVisibleArray(resArray);
  }, [num]);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setNum(Number(e.target.value));
        }}
      />
      <Title>{num}</Title>
      <div>
        {visibleArray.map((element: any, index) => {
          return <Box key={index} element={element} />;
        })}
      </div>
    </div>
  );
}

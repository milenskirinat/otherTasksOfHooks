import { useState, useEffect } from "react";
import "./FizzBox.css";
import "./BuzzBox.css";
import "./FizzBuzzBox.css";

export default function FizzBuzz() {
  const [num, setNum] = useState(0);
  const [visibleArray, setVisibleArray] = useState<(string | number)[]>([]);

  useEffect(() => {
    const resArray = [];

    for (let i = 0; i <= num; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        resArray.push({ type: "FizzBuzz", value: "FizzBuzz" });
      } else if (i % 3 === 0) {
        resArray.push({ type: "Fizz", value: "Fizz" });
      } else if (i % 5 === 0) {
        resArray.push({ type: "Buzz", value: "Buzz" });
      } else {
        resArray.push({ type: "number", value: i });
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
      <p>Entered number: {num}</p>
      <div>
        {visibleArray.map((element: any, index) => {
          if (element.type === "Fizz") {
            return (
              <p key={index} className="FizzBox">
                {element.value}
              </p>
            );
          } else if (element.type === "Buzz") {
            return (
              <p key={index} className="BuzzBox">
                {element.value}
              </p>
            );
          } else if (element.type === "FizzBuzz") {
            return (
              <p key={index} className="FizzBuzzBox">
                {element.value}
              </p>
            );
          } else {
            return <p key={index}>{element.value}</p>;
          }
        })}
      </div>
    </div>
  );
}

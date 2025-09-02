import { useState, useEffect } from "react";

export default function FizzBuzz() {
  const [num, setNum] = useState(0);
  const [visibleArray, setVisibleArray] = useState<(string | number)[]>([]);
  useEffect(() => {
    const resArray = [];

    for (let i = 0; i <= num; i++) {
      if (i % 3 == 0 && i % 5 == 0) {
        resArray.push("FizzBuzz");
      } else if (i % 3 == 0) {
        resArray.push("Fizz");
      } else if (i % 5 == 0) {
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
          const valueNumber = Number(e.target.value);
          setNum(valueNumber);
        }}
      />
      <p>Entered number: {num}</p>
      <div>
        {visibleArray.map((element) => (
          <p>{element}</p>
        ))}
      </div>
    </div>
  );
}

import { useState, useCallback, memo } from "react";

const Child = memo(({ onClick }) => {
  console.log("Child render");
  return <button onClick={onClick}>Кликни меня</button>;
});

export default function Parent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <p>Счётчик: {count}</p>
      <Child onClick={handleClick} />
    </div>
  );
}

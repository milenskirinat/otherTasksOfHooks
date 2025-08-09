import { useEffect, useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div className="flex justify-center flex-col">
      <input ref={inputRef} placeholder="Enter text" />
      <button onClick={handleClick}>Clear and focus</button>
    </div>
  );
}

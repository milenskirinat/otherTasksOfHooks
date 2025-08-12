// import { useState, useRef, useEffect } from "react";

// export default function Timer() {
//   const [seconds, setSeconds] = useState(0);

//   const intervalRef = useRef(null);

//   useEffect(() => {
//     intervalRef.current = setInterval(() => setSeconds((prev) => prev + 1));

//     if (intervalRef.current != null) {
//       clearInterval(intervalRef.current);
//       intervalRef.current = null;
//     }
//   }, []);

//   return (
//     <div className="flex justify-center flex-col">
//       <p>Seconds: {seconds}</p>
//       <button onClick={handleClick}>Start/Stop</button>
//     </div>
//   );
// }

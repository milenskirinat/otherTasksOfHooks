import FocusInput from "./components/FocusInput";
// import Timer from "./components/Timer.tsx";
import FilteredList from "./components/FilteredList.tsx";
import FactorialCalculator from "./components/FactorialCalculator.tsx";
import Parent from "./components/Parent.tsx";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col gap-3 items-center">
        <FocusInput />
        {/* <Timer /> */}
        <FilteredList />
        <FactorialCalculator />
        <Parent />
      </div>
    </>
  );
}

export default App;

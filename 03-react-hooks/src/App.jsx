import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useEffect } from "react";

function App() {
  //useState
  const [num, setNum] = useState(20);

  // useState
  function increaseNum() {
    setNum(num + 1);
  }

  function decreaseNum() {
    setNum(num - 1);
  }

  function jumpBy5() {
    setNum(num + 5);
  }

  // useEffect
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(100);
  useEffect(
    function () {
      console.log("use effect is running..");
    },
    [number],
  );

  return (
    <div className="w-screen h-screen flex items-center justify-around">
      {/* useState */}
      <div>
        <h1>{num}</h1>
        <button onClick={increaseNum}>Increase</button>
        <button onClick={decreaseNum}>Decrease</button>
        <button onClick={jumpBy5}>Jump by 5</button>
      </div>

      {/* useEffect */}
      <div>
        <h1> Number - {number}</h1>
        <h1>Numer2 - {number2}</h1>
        <button
          onMouseEnter={() => {
            setNumber(number + 1);
          }}
          onMouseLeave={() => {
            setNumber2(number2 + 1);
          }}
        >
          Click
        </button>
      </div>
    </div>
  );
}

export default App;

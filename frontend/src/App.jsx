import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("");
  const appendToDisplay = (value) => {
    setDisplay((prevDisplay) => prevDisplay + value);
  };
  const clearDisplay = () => {
    setDisplay("");
  };

  const calculate = async () => {
    try {
      const response = await fetch("http://localhost:3000/calculate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ expression: display }),
      });

      if (!response.ok) {
        throw new Error("Error communicating with the server");
      }

      const result = await response.text();
      setDisplay(result);
    } catch (error) {
      console.error("Error:", error);
      setDisplay("Error");
    }
  };

  return (
    <div>
      <input type="text" value={display} readOnly />
      <br />
      <button onClick={() => appendToDisplay("1")}>1</button>
      <button onClick={() => appendToDisplay("2")}>2</button>
      <button onClick={() => appendToDisplay("3")}>3</button>
      <button onClick={() => appendToDisplay("+")}>+</button>
      <br />
      <button onClick={() => appendToDisplay("4")}>4</button>
      <button onClick={() => appendToDisplay("5")}>5</button>
      <button onClick={() => appendToDisplay("6")}>6</button>
      <button onClick={() => appendToDisplay("-")}>-</button>
      <br />
      <button onClick={() => appendToDisplay("7")}>7</button>
      <button onClick={() => appendToDisplay("8")}>8</button>
      <button onClick={() => appendToDisplay("9")}>9</button>
      <button onClick={() => appendToDisplay("*")}>*</button>
      <br />
      <button onClick={() => appendToDisplay("0")}>0</button>
      <button onClick={clearDisplay}>C</button>
      <button onClick={calculate}>=</button>
      <button onClick={() => appendToDisplay("/")}>/</button>
    </div>
  );
}

export default App;

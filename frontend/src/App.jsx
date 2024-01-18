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

  const handleButtonClick = (value) => {
    switch (value) {
      case "=":
        calculate();
        break;
      case "AC":
        clearDisplay();
        break;
      default:
        appendToDisplay(value);
        break;
    }
  };

  const renderButtons = () => {
    const buttons = [
      "1",
      "2",
      "3",
      "+",
      "4",
      "5",
      "6",
      "-",
      "7",
      "8",
      "9",
      "/",
      "0",
      "AC",
      "=",
      "*",
    ];

    return buttons.map((button, index) => (
      <p
        key={index}
        className={`border border-gray-500 p-2 px-[${
          button === "AC" ? 10 : 3
        }px] rounded-lg hover:scale-105 hover:bg-green-400 cursor-pointer bg-slate-400 text-white`}
        onClick={() => handleButtonClick(button)}
      >
        {button}
      </p>
    ));
  };

  return (
    <div>
      <h1 className="text-center mt-10 text-3xl">Easy Calculator</h1>
      <section className="bg-slate-200 h-[65dvh] w-[35dvh] align-middle justify-center m-auto mt-[7dvh] pt-[10dvh] rounded-3xl shadow-xl sm:h-[55dvh] sm:w-[30dvh] lg:h-[55dvh] lg:w-[32dvh] md:h-[60dvh] md:w-[33dvh]">
        <input
          readOnly
          value={display}
          className="border flex border-black py-2 px-5 rounded-lg m-auto outline-none w-[30dvh] sm:w-[20dvh] lg:w-[15dvh] lg:h-[7dvh]"
        ></input>
        <div className="grid grid-cols-4 gap-5 justify-center mt-[7dvh] ml-5 mr-5 text-center">
          {renderButtons()}
        </div>
      </section>
    </div>
  );
}

export default App;

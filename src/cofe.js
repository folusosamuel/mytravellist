import React, { useState } from "react";

const Calculator = () => {
  const [result, setResult] = useState("0");
  const [currentValue, setCurrentValue] = useState("0");
  const [operator, setOperator] = useState(null);

  const handleButtonClick = (buttonValue) => {
    if (!isNaN(buttonValue)) {
      // If the button clicked is a number
      if (currentValue === "0") {
        setCurrentValue(buttonValue);
      } else {
        setCurrentValue(currentValue + buttonValue);
      }
    } else if (buttonValue === "C") {
      // Clear the calculator
      setResult("0");
      setCurrentValue("0");
      setOperator(null);
    } else if (buttonValue === "=") {
      // Perform the operation and display the result
      if (operator) {
        const num1 = parseFloat(result);
        const num2 = parseFloat(currentValue);
        switch (operator) {
          case "+":
            setResult((num1 + num2).toString());
            break;
          case "-":
            setResult((num1 - num2).toString());
            break;
          case "*":
            setResult((num1 * num2).toString());
            break;
          case "/":
            setResult((num1 / num2).toString());
            break;
          default:
            break;
        }
        setCurrentValue("0");
        setOperator(null);
      }
    } else {
      // If the button clicked is an operator (+, -, *, /)
      setOperator(buttonValue);
      setResult(currentValue);
      setCurrentValue("0");
    }
  };

  return (
    <div className="calculator">
      <div className="result">{result}</div>
      <div className="buttons">
        <button onClick={() => handleButtonClick("7")}>7</button>
        <button onClick={() => handleButtonClick("8")}>8</button>
        <button onClick={() => handleButtonClick("9")}>9</button>
        <button onClick={() => handleButtonClick("+")}>+</button>
        <button onClick={() => handleButtonClick("4")}>4</button>
        <button onClick={() => handleButtonClick("5")}>5</button>
        <button onClick={() => handleButtonClick("6")}>6</button>
        <button onClick={() => handleButtonClick("-")}>-</button>
        <button onClick={() => handleButtonClick("1")}>1</button>
        <button onClick={() => handleButtonClick("2")}>2</button>
        <button onClick={() => handleButtonClick("3")}>3</button>
        <button onClick={() => handleButtonClick("*")}>*</button>
        <button onClick={() => handleButtonClick("0")}>0</button>
        <button onClick={() => handleButtonClick("C")}>C</button>
        <button onClick={() => handleButtonClick("=")}>=</button>
        <button onClick={() => handleButtonClick("/")}>/</button>
      </div>
    </div>
  );
};

export default Calculator;

import React, { useState } from 'react';
import calculate from './logic/calculate';

export default function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  const createDigits = () => {
    const digits = [];
    for (let i = 9; i > 0; i -= 1) {
      digits.push(
        <button key={i} type="button" onClick={() => handleButtonClick(String(i))}>
          {i}
        </button>,
      );
    }
    return digits;
  };

  return (
    <div className="bg-container">
      <h1 className="calculator-text">Let s do math</h1>
      <div className="container">
        <div className="main-screen">
          <span className="table">{calculatorData.next || calculatorData.total || '0'}</span>
        </div>
        <div className="middle">
          <button type="button" onClick={() => handleButtonClick('AC')}>AC</button>
          <button type="button" onClick={() => handleButtonClick('+/-')}>+/-</button>
          <button type="button" onClick={() => handleButtonClick('%')}>%</button>
          {createDigits()}
          <button className="double" type="button" onClick={() => handleButtonClick('0')}>0</button>
          <button type="button" onClick={() => handleButtonClick('.')}>.</button>
        </div>
        <div className="operators">
          <button className="operator" type="button" onClick={() => handleButtonClick('÷')}>÷</button>
          <button className="operator" type="button" onClick={() => handleButtonClick('x')}>x</button>
          <button className="operator" type="button" onClick={() => handleButtonClick('-')}>-</button>
          <button className="operator" type="button" onClick={() => handleButtonClick('+')}>+</button>
          <button className="operator" type="button" onClick={() => handleButtonClick('=')}>=</button>
        </div>
      </div>
    </div>
  );
}

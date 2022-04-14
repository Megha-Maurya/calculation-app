import "./styles.css";
import React, { useState } from "react";

export default function App() {
  var [number1, setNumber1] = useState("");
  var [number2, setNumber2] = useState("");
  var [total, setTotal] = useState("");

  function addThem() {
    setTotal(number1 + number2);
  }

  function subtractThem() {
    setTotal(number1 - number2);
  }

  function multiplyThem() {
    setTotal(number1 * number2);
  }

  function divideThem() {
    setTotal(number1 / number2);
  }

  return (
    <div className="App">
      <h1>Calculation App</h1>
      <div>
        <input
          type="number"
          value={number1}
          onChange={(e) => setNumber1(Number(e.target.value))}
        />
        <input
          type="number"
          value={number2}
          onChange={(e) => setNumber2(Number(e.target.value))}
        />
      </div>
      <button onClick={addThem}>add</button>
      <button onClick={subtractThem}>subtract</button>
      <button onClick={multiplyThem}>multiply</button>
      <button onClick={divideThem}>divide</button>
      <h2>{total}</h2>
    </div>
  );
}

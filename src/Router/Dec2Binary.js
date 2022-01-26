import React, { useState, useRef, useEffect } from "react";
import "./CSS/Fibonacci.css";

const Dec2Binary = () => {
  // Take user Input
  const inputRef = useRef(null);

  // Recursive is: True, Dynamic is: False
  const [type, setType] = useState(true);

  // Answer of Problem(Dec2Binary)
  var [answer, setAnswer] = useState(0);

  // User Input
  const [inputN, setInputN] = useState(0);

  // Time for solution
  var [time, setTime] = useState(0);

  const onClick = () => {
    inputRef.current.focus();
    console.log(inputRef.current.value);
    setInputN(inputRef.current.value);
    // inputRef.current.value = "";
    // calculateRecFib(inputN);
  };

  const calculateRecBin = (n) => {
    // Actual Recursive Fibonacci code
    const find_binary_recursive = (n) => {
      if (n === 0) return 0;
      else return (n % 2) + 10 * find_binary_recursive(parseInt(n / 2));
    };
    // Start secundomer
    var startTimeOfRecursive = performance.now();
    let result = find_binary_recursive(n);
    var endTimeOfRecursive = performance.now();
    setTime(endTimeOfRecursive - startTimeOfRecursive);
    setAnswer(result);
    console.log(`The answer of dec2binary is: ${result}`);
    console.log(`The inside of state is: ${answer}`);
  };

  const calculateIterBin = (n) => {
    const find_binary_iterative = (n) => {
      var bin = "";

      while (n > 0) {
        bin = (n % 2) + bin;
        n = Math.floor(n / 2);
      }

      return bin;
    };
    // Start secundomer
    var startTimeOfIterative = performance.now();
    let result2 = find_binary_iterative(n);
    var endTimeOfIterative = performance.now();
    setTime(endTimeOfIterative - startTimeOfIterative);
    setAnswer(result2);
    console.log(`The answer of fibonacci is: ${result2}`);
    console.log(`The inside of state is: ${answer}`);
  };

  const calculateAllBin = (n) => {
    if (type === true) {
      calculateRecBin(n);
    }
    if (type === false) {
      calculateIterBin(n);
    }
  };

  return (
    <>
      <h1>Dec2Binary</h1>
      <div className="container">
        <div className="select">
          <h3>Choose Solution</h3>
          <div className="btns">
            <button
              className="button-6"
              className="button-6"
              onClick={() => {
                setType(true);
              }}
            >
              Recursive
            </button>
            <button
              className="button-6"
              className="button-6"
              onClick={() => {
                setType(false);
              }}
            >
              Iterative
            </button>
          </div>
          <h1>Answer is: {answer}</h1>
          <h2>Time: {time} in ms</h2>
          <div className="enter">
            <div className="form">
              <p>Choose (n)</p>
              <input
                className="inp"
                type="text"
                placeholder="     Example   [5,3,7,9]"
                ref={inputRef}
              />
            </div>
            <button
              className="button-cal"
              onClick={() => {
                onClick();
                const doIt = () =>
                  console.log(`value is: ${inputRef.current.value}`);
                doIt();
                calculateAllBin(inputRef.current.value);
              }}
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dec2Binary;

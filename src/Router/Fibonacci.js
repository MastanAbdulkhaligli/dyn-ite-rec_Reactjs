import React, { useState, useRef, useEffect } from "react";
import "./CSS/Fibonacci.css";

const Fibonacci = () => {
  // Take user Input
  const inputRef = useRef(null);

  // Recursive is: True, Dynamic is: False
  const [type, setType] = useState(true);

  // Answer of Problem(Fibonacci)
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

  const calculateRecFib = (n) => {
    // Actual Recursive Fibonacci code
    const r_fibonacci = (n) => {
      if (n <= 1) {
        return n;
      } else {
        return r_fibonacci(n - 1) + r_fibonacci(n - 2);
      }
    };
    // Start secundomer
    var startTimeOfRecursive = performance.now();
    let result = r_fibonacci(n);
    var endTimeOfRecursive = performance.now();
    setTime(endTimeOfRecursive - startTimeOfRecursive);
    setAnswer(result);
    console.log(`The answer of fibonacci is: ${result}`);
    console.log(`The inside of state is: ${answer}`);
  };

  const calculateIterFib = (n) => {
    const iterFibonacci = (n) => {
      var num1 = 0;
      var num2 = 1;
      var sum;
      var i = 0;
      for (i = 0; i < n - 1; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
      }
      return num2;
    };
    // Start secundomer
    var startTimeOfIterative = performance.now();
    let result2 = iterFibonacci(n);
    var endTimeOfIterative = performance.now();
    setTime(endTimeOfIterative - startTimeOfIterative);
    setAnswer(result2);
    console.log(`The answer of fibonacci is: ${result2}`);
    console.log(`The inside of state is: ${answer}`);
  };

  const calculateAllFib = (n) => {
    if (type === true) {
      calculateRecFib(n);
    }
    if (type === false) {
      calculateIterFib(n);
    }
  };

  return (
    <>
      <h1>Fibonacci</h1>
      <div className="container">
        <div className="select">
          <h3>Choose Solution</h3>
          <div className="btns">
            <button
              className="button-6"
              onClick={() => {
                setType(true);
              }}
            >
              Recursive
            </button>
            <button
              className="button-6"
              onClick={() => {
                setType(false);
              }}
            >
              Dynamic
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
                calculateAllFib(inputRef.current.value);
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

export default Fibonacci;

import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./CSS/Fibonacci.css";
import codes from "./Codes";

const Home = () => {
  const codeString = `const fibonacci = (num) => {
  var num1 = 0;
  var num2 = 1;
  var sum;
  var i = 0;
  for (i = 0; i < num - 1; i++) {
    sum = num1 + num2;
    num1 = num2;
    num2 = sum;
  }
  return num2;
};`;
  return (
    <>
      <div className="back">
        <h1>Source Code of Decimal2Binary</h1>
      </div>
      <div className="fibonacci">
        <div className="rec_fib">
          <h2>Recursive Dec2Binary</h2>
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            wrapLines={true}
            lineProps={{
              style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
            }}
          >
            {codes.recursive_binary}
          </SyntaxHighlighter>
        </div>

        <div className="iter_fib">
          <h2>Iterative Dec2Binary</h2>
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            wrapLines={true}
            lineProps={{
              style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
            }}
          >
            {codes.iterative_binary}
          </SyntaxHighlighter>
        </div>
      </div>

      <h1 className="back">Source Code of Fibonacci</h1>
      <div className="fibonacci">
        <div className="rec_fib">
          <h2>Recursive Fibonacci</h2>
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            wrapLines={true}
            lineProps={{
              style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
            }}
          >
            {codes.recursive_fib}
          </SyntaxHighlighter>
        </div>

        <div className="iter_fib">
          <h2>Dynamic Fibonacci</h2>
          <SyntaxHighlighter
            language="javascript"
            style={atomDark}
            wrapLines={true}
            lineProps={{
              style: { wordBreak: "break-all", whiteSpace: "pre-wrap" },
            }}
          >
            {codes.iterative_fib}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
};

export default Home;

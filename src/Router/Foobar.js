import React from "react";

const Foobar = () => {
  return (
    <>
      <h1>Foobar Challenge</h1>
      <div className="container">
        <div className="select">
          <h3>Choose Solution</h3>
          <div className="btns">
            <button className="button-6">Recursive</button>
            <button className="button-6">Dynamic</button>
          </div>
          <div className="enter">
            <div className="form">
              <p>Choose (n)</p>
              <input
                className="inp"
                type="text"
                placeholder="     Example   [5,3,7,9]"
              />
            </div>
            <button className="button-cal">Calculate</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Foobar;

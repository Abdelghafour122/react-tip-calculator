import React from "react";

const ResultScreen = ({ total, tipPerP, reset }) => {
  return (
    <div className="result-screen">
      <div className="amount">
        <div className="text">
          <p>Tip</p>
          <p>/ person</p>
        </div>
        <p className="numeric-val"> {`$${Number(tipPerP).toFixed(2)}`} </p>
      </div>
      <div className="amount">
        <div className="text">
          <p>Total</p>
          <p>/ person</p>
        </div>
        <p className="numeric-val"> {`$${Number(total).toFixed(2)}`} </p>
      </div>
      <button className="reset" onClick={reset}>
        Reset
      </button>
    </div>
  );
};

export default ResultScreen;

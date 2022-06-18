import React from "react";

const ResultScreen = () => {
  return (
    <div className="results">
      <div className="amount">
        <div className="text">
          <p>Tip</p>
          <p>/ person</p>
        </div>
        <p className="numeric-val">%0</p>
      </div>
      <div className="amount">
        <div className="text">
          <p>Total</p>
          <p>/ person</p>
        </div>
        <p className="numeric-val">%0</p>
      </div>
      <button className="reset">Reset</button>
    </div>
  );
};

export default ResultScreen;

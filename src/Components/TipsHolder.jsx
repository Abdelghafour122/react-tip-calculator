import React from "react";

const AMOUNTS = [5, 10, 15, 20, 25, 50];

const TipsHolder = ({ setTip, setCustomTip, customTip }) => {
  return (
    <div>
      <h4>Select Tip %</h4>
      <div className="tips">
        {AMOUNTS.map((i) => {
          return <button key={i} onClick={() => setTip(i)}>{`${i}%`}</button>;
        })}
        <input
          type="text"
          placeholder="Custom"
          value={customTip}
          onChange={(e) => setCustomTip(e.target.value)}
        />
      </div>
    </div>
  );
};

export default TipsHolder;

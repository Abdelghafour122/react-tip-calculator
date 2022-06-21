import React from "react";

const AMOUNTS = [5, 10, 15, 20, 25, 50];

const TipsHolder = ({ customTip }) => {
  return (
    <div>
      <h4>Select Tip %</h4>
      <div className="tips">
        {AMOUNTS.map((i) => {
          return <button key={i}>{`${i}%`}</button>;
        })}
        <input type="text" placeholder="Custom" value={customTip} />
      </div>
    </div>
  );
};

export default TipsHolder;

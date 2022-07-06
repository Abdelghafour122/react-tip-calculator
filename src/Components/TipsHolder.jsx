import React, { useEffect, useState } from "react";

const AMOUNTS = [5, 10, 15, 25, 50];

const TipsHolder = ({ setTip, removeSelected }) => {
  const [customTip, setCustomTip] = useState(0);
  useEffect(() => {
    customTip && setTip(customTip);
  }, [customTip, setTip]);

  return (
    <div className="tips-holder">
      <p className="label">Select Tip %</p>
      <div className="tips">
        {AMOUNTS.map((i) => {
          return (
            <button
              key={i}
              onClick={(e) => {
                setTip(i);
                setCustomTip();
                removeSelected();
                e.currentTarget.classList.toggle("selected");
              }}
            >{`${i}%`}</button>
          );
        })}
        <input
          type="text"
          placeholder="Custom"
          value={customTip ? customTip : ""}
          maxLength="2"
          onChange={(e) => {
            !isNaN(e.target.value) && setCustomTip(e.target.value);
            removeSelected();
          }}
        />
      </div>
    </div>
  );
};

export default TipsHolder;

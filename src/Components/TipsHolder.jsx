import React, { useEffect, useState } from "react";

const AMOUNTS = [5, 10, 15, 20, 25, 50];

const TipsHolder = ({ setTip }) => {
  const [customTip, setCustomTip] = useState(0);
  useEffect(() => {
    customTip && setTip(customTip);
  }, [customTip, setTip]);
  return (
    <div>
      <h4>Select Tip %</h4>
      <div className="tips">
        {AMOUNTS.map((i) => {
          return (
            <button
              key={i}
              onClick={() => {
                setTip(i);
                setCustomTip();
              }}
            >{`${i}%`}</button>
          );
        })}
        <input
          type="text"
          placeholder="Custom"
          value={customTip ? customTip : ""}
          onChange={(e) =>
            !isNaN(e.target.value) && setCustomTip(e.target.value)
          }
        />
      </div>
    </div>
  );
};

export default TipsHolder;

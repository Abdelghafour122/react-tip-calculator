import React, { useEffect, useState } from "react";

const AMOUNTS = [5, 10, 15, 25, 50];
const removeSelected = (elements) => {
  // console.log(elements);
  elements.forEach((element) => {
    element.classList.contains("selected") &&
      element.classList.remove("selected");
  });
};
const TipsHolder = ({ setTip }) => {
  const [customTip, setCustomTip] = useState(0);
  useEffect(() => {
    customTip && setTip(customTip);
    // removeSelected(document.querySelectorAll(".tips button"));
    console.log(document.querySelectorAll(".tips > *"));
    removeSelected(document.querySelectorAll(".tips > *"));
  }, [customTip, setTip]);

  // useEffect(() => {
  // }, [customTip]);

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
                removeSelected(
                  Array.of(...e.currentTarget.parentNode.children)
                );
                e.currentTarget.classList.add("selected");
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

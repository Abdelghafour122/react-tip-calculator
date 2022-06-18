import React, { useState } from "react";

// add a verification regex or something for the tip

const CustomAmount = () => {
  const [tip, setTip] = useState(0);
  return (
    <input
      type="text"
      value={tip}
      placeholder="Custom"
      onChange={(e) => {
        setTip(e.target.value);
      }}
    />
  );
};

export default CustomAmount;

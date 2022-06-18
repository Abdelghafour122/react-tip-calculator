import React, { useState } from "react";

const CustomAmount = () => {
  const [tip, setTip] = useState(0);
  return (
    <input
      type="number"
      value={tip}
      placeholder="Custom"
      onChange={(e) => {
        setTip(e.target.value);
      }}
    />
  );
};

export default CustomAmount;

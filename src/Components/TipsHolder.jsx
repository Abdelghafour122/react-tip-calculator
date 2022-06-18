import React from "react";
import FixedAmount from "./Tips/FixedAmount";
import CustomAmount from "./Tips/CustomAmount";

const TipsHolder = () => {
  return (
    <div>
      <h4>Select Tip %</h4>
      <div className="tips">
        <FixedAmount amount={5} />
        <FixedAmount amount={10} />
        <FixedAmount amount={15} />
        <FixedAmount amount={25} />
        <FixedAmount amount={50} />
        <CustomAmount />
      </div>
    </div>
  );
};

export default TipsHolder;

import React, { useState, useEffect } from "react";
import FormScreen from "./FormScreen";
import ResultScreen from "./ResultScreen";

const CoreCalculator = () => {
  const [bill, setBill] = useState();
  const [tip, setTip] = useState();
  const [customTip, setCustomTip] = useState();
  const [numOfPeople, setNumOfPeople] = useState();

  const [zero, setZero] = useState(false);

  useEffect(() => {}, [bill, tip, customTip, numOfPeople]);

  return (
    <div className="calculator">
      <FormScreen
        setBill={setBill}
        setNumOfPeople={setNumOfPeople}
        setTip={setTip}
        setCustomTip={setCustomTip}
        customTip={customTip}
        numOfPeople={numOfPeople}
        bill={bill}
        zero={zero}
      />
      <ResultScreen />
    </div>
  );
};

export default CoreCalculator;

import React, { useState, useEffect } from "react";
import FormScreen from "./FormScreen";
import ResultScreen from "./ResultScreen";

const evaluateTotal = (tip, bill, num) => {
  let total = ((bill * (1 + tip / 100)) / num).toFixed(2);
  return total;
};

const evaluateTipPerP = (tip, bill, num) => {
  let tipPerP = ((bill * (tip / 100)) / num).toFixed(2);
  return tipPerP;
};

const CoreCalculator = () => {
  const [bill, setBill] = useState(Number);
  const [tip, setTip] = useState(Number);
  const [numOfPeople, setNumOfPeople] = useState(Number);

  const [total, setTotal] = useState(Number);
  const [tipPerP, setTipPerP] = useState(Number);

  useEffect(() => {
    if (bill && tip && Number(numOfPeople) !== 0) {
      setTotal(evaluateTotal(tip, bill, numOfPeople));
      setTipPerP(evaluateTipPerP(tip, bill, numOfPeople));
    } else if (Number(numOfPeople) === 0) {
      setTotal(0);
      setTipPerP(0);
    }
  }, [tip, bill, numOfPeople]);

  const reset = () => {
    setBill(0);
    setNumOfPeople(0);
    setTip(0);
    setTotal(0);
    setTipPerP(0);
    return;
  };

  console.log(numOfPeople);
  return (
    <div className="calculator">
      <FormScreen
        bill={bill}
        setBill={setBill}
        setTip={setTip}
        numOfPeople={numOfPeople}
        setNumOfPeople={setNumOfPeople}
      />
      <ResultScreen total={total} tipPerP={tipPerP} reset={reset} />
    </div>
  );
};

export default CoreCalculator;

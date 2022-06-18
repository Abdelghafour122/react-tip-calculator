import React from "react";
import TipsHolder from "./TipsHolder";

const FormScreen = ({
  setBill,
  setTip,
  setNumOfPeople,
  numOfPeople,
  bill,
  customTip,
  setCustomTip,
  zero,
}) => {
  return (
    <div className="form-screen">
      <div className="input-field">
        <h4>Bill</h4>
        <input
          type="text"
          name="bill"
          value={bill}
          placeholder="0"
          onChange={(e) => {
            setBill(e.target.value);
          }}
        />
      </div>
      <TipsHolder
        setCustomTip={setCustomTip}
        customTip={customTip}
        setTip={setTip}
      />
      <div className="input-field">
        <h4>Number of People</h4>
        {zero && <h4>Can't be zero</h4>}
        <input
          type="text"
          name="people"
          value={numOfPeople}
          placeholder="0"
          onChange={(e) => {
            setNumOfPeople(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default FormScreen;

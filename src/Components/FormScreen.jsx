import React from "react";
import TipsHolder from "./TipsHolder";

const FormScreen = ({
  bill,
  numOfPeople,
  setTip,
  setNumOfPeople,
  setBill,
  removeSelected,
}) => {
  return (
    <div className="form-screen">
      <div className="input-field">
        <p className="label">Bill</p>
        <div className="inp-holder">
          <input
            type="text"
            name="bill"
            value={bill ? bill : ""}
            placeholder="0"
            onChange={(e) => !isNaN(e.target.value) && setBill(e.target.value)}
          />
        </div>
      </div>
      <TipsHolder setTip={setTip} removeSelected={removeSelected} />
      <div className="input-field">
        <div className="labels">
          <p className="label">Number of People</p>
          {Number(numOfPeople) === 0 && <p className="irre">Can't be zero</p>}
        </div>
        <div className="inp-holder">
          <input
            type="text"
            name="people"
            placeholder="0"
            value={numOfPeople ? numOfPeople : ""}
            onChange={(e) =>
              !isNaN(e.target.value) && setNumOfPeople(e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default FormScreen;

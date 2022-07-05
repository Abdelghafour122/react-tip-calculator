import React from "react";
import TipsHolder from "./TipsHolder";

const FormScreen = ({ bill, numOfPeople, setTip, setNumOfPeople, setBill }) => {
  return (
    <div className="form-screen">
      <div className="input-field">
        <h4>Bill</h4>
        <input
          type="text"
          name="bill"
          placeholder="0"
          value={bill ? bill : ""}
          onChange={(e) => !isNaN(e.target.value) && setBill(e.target.value)}
        />
      </div>
      <TipsHolder setTip={setTip} />
      <div className="input-field">
        <h4>Number of People</h4>
        {Number(numOfPeople) === 0 && <p>Can't be zero</p>}
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
  );
};

export default FormScreen;

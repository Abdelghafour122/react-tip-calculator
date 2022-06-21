import React, { useState } from "react";
import TipsHolder from "./TipsHolder";

const FormScreen = () => {
  return (
    <div className="form-screen">
      <div className="input-field">
        <h4>Bill</h4>
        <input type="text" name="bill" placeholder="0" />
      </div>
      <TipsHolder />
      <div className="input-field">
        <h4>Number of People</h4>
        {/* zero message */}
        <input type="text" name="people" placeholder="0" />
      </div>
    </div>
  );
};

export default FormScreen;

import React, { useState, useEffect } from "react";
import FormScreen from "./FormScreen";
import ResultScreen from "./ResultScreen";

const CoreCalculator = () => {
  return (
    <div className="calculator">
      <FormScreen />
      <ResultScreen />
    </div>
  );
};

export default CoreCalculator;

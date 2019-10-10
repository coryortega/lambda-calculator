import React, { useState } from "react";
import { operators } from "../../../data";

//import any components needed

import OperatorButton from "./OperatorButton";

//Import your array data to from the provided data file

// const Operators = () => {
export default function Operators() {
  const [operatorButton, setOperatorButton] = useState(operators);
  // STEP 2 - add the imported data to state
  return (
    <div class = "operator_container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
      <div className="button_container">
        {
        operatorButton.map((button, index) => (
          <OperatorButton key={index} button={button} />
        ))}
      </div>
    </div>
  );
};

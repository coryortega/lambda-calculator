import React, { useState } from "react";
import { numbers } from "../../../data";
//import any components needed
// example of import from data.js. Note all the ../   This is how we move through folders. 
/* 
import { numbers } from '../../../data' 
*/

import NumberButton from "./NumberButton";

//Import your array data to from the provided data file

// const Numbers = () => {
export default function Numbers() {
  const [numberButton, setNumberButton] = useState(numbers);
  // STEP 2 - add the imported data to state
  return (
    <div class= "number_container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
            <div className="button_container">
        {
        numberButton.map((button, index) => (
          <NumberButton key={index} button={button} />
        ))}
      </div> 
    </div>
  );
};

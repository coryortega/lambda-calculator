import React, { useState }from "react";
import { specials } from "../../../data";

//import any components needed

import SpecialButton from "./SpecialButton";

//Import your array data to from the provided data file


// const Specials = () => {
  export default function Specials() {
    const [specialButton, setSpecialButton] = useState(specials);
  // STEP 2 - add the imported data to state

  return (
    <div class = "special_container">
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
       <div className="button_container">
        {
        specialButton.map((button, index) => (
          <SpecialButton key={index} button={button} />
        ))}
      </div>
    </div>
  );
};

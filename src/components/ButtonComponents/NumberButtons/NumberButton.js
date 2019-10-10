import React from "react";

const NumberButton = props => {
  console.log(props.button)
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="button" onClick={() => props.numberTwo(props.button)}>
      <span>
        {/* since props is an object we use the . notation */}
        {props.button}
      </span>
    </button>
    </>
  );
};
export default NumberButton;
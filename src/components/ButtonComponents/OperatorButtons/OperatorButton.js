import React from "react";

const OperatorButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="button">
      <span>
        {/* since props is an object we use the . notation */}
        {props.button.char}
      </span>
    </button>
    </>
  );
};
export default OperatorButton;
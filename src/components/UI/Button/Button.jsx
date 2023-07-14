import React from "react";
import "./Button.scss"
function Button({ buttonFuncion, altText, buttonIcon }) {
  return (
    <button className='button' onClick={buttonFuncion}>
      <img className='button__icon' src={buttonIcon} alt={altText} />
    </button>
  );
}

export default Button;

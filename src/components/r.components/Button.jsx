import React from "react";

const Button = ({ btnText, btnClass, btnFunc }) => {
  return (
    <div className={`${btnClass}`} onClick={btnFunc}>
      {btnText}
    </div>
  );
};

export default Button;

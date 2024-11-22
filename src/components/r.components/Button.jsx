import React from "react";
import { Link } from "react-scroll";

const Button = ({
  btnText,
  btnClass,
  btnFunc,
  scrollTo,
  type = "button", // Default to button, but allow 'submit'
}) => {
  if (scrollTo) {
    return (
      <Link
        to={scrollTo}
        smooth={true}
        duration={500}
        offset={-100}
        className={`${btnClass}`}
        onClick={btnFunc}
      >
        {btnText}
      </Link>
    );
  }

  return (
    <button type={type} className={`${btnClass}`} onClick={btnFunc}>
      {btnText}
    </button>
  );
};

export default Button;

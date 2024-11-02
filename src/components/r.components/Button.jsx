import React from "react";
import { Link } from "react-scroll";

const Button = ({ btnText, btnClass, btnFunc, scrollTo }) => {
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
    <div className={`${btnClass}`} onClick={btnFunc}>
      {btnText}
    </div>
  );
};

export default Button;

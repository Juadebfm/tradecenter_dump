import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.title = "Trade Center | Contact Us";
  }, []);
  return <div>Contact</div>;
};

export default Contact;

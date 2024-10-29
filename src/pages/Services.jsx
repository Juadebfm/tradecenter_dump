import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    document.title = "Trade Center | Our Services";
  }, []);
  return <div>Services</div>;
};

export default Services;

import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Trade Center | Home";
  }, []);
  return <div>Home</div>;
};

export default Home;

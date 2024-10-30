import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Offer from "../components/Offer";

const Home = () => {
  useEffect(() => {
    document.title = "Trade Center | Home";
  }, []);
  return (
    <section>
      <Hero />
      <Offer />
    </section>
  );
};

export default Home;

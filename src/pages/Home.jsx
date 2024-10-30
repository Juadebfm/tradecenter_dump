import React, { useEffect } from "react";
import Hero from "../components/Hero";
import Offer from "../components/Offer";
import Procurement from "../components/Procurement";
import Empower from "../components/Empower";

const Home = () => {
  useEffect(() => {
    document.title = "Trade Center | Home";
  }, []);
  return (
    <section>
      <Hero />
      <Offer />
      <Procurement />
      <Empower />
    </section>
  );
};

export default Home;

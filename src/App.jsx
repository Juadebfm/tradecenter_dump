import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import Procurement from "./components/Procurement";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="services">
          <Offer />
        </section>
        <section id="choose">
          <Procurement />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default App;

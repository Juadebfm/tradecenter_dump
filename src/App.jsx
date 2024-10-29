import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Choose from "./pages/Choose";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-services" element={<Services />} />
          <Route path="/why-choose-us" element={<Choose />} />
          <Route path="/contact-us" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;

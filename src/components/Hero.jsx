import React from "react";
import Button from "./r.components/Button";

const Hero = () => {
  return (
    <section className="min-h-[100vh] relative bg-[url('/hero.PNG')] bg-no-repeat bg-cover">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-[35px] lg:px-16 w-[100vw] md:w-[70%] mx-auto ">
        <h1 className="text-[36px] md:text-5xl lg:text-6xl font-bold mb-6 !leading-[1.3]">
          Your Trusted Partner for Safe & Cost-Effective Procurement
        </h1>
        <p className="max-w-2xl text-lg md:text-xl w-[100vw] md:w-[60%] mt-4 px-[35px] lg:px-0 !leading-[1.6]">
          Whether you’re an individual or a business, we bring authentic
          products directly to you—affordably and securely.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-5 mt-14 w-[100vw] md:w-auto px-[35px] lg:px-16">
          <Button
            btnText="Explore Our Services"
            btnClass="text-white text-[15px] p-3 rounded-full bg-black/25 hover:bg-black/50 w-full md:w-[210px] h-[56px] flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-150 ease-in-out px-3 border-2 border-tradecenter_red"
          />
          <Button
            btnText="Get Started"
            btnClass="text-white text-[15px] p-3 rounded-full bg-tradecenter_red w-full md:w-[210px] h-[56px] flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-150 ease-in-out px-3 hover:bg-tradecenter_red/80"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

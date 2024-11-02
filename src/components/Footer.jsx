import React from "react";
import { FaFacebookF, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-tradecenter_dark_red text-[#FFF8F7] px-[35px] md:px-20 py-[5rem] md:py-16 h-max">
      <section className="grid grid-cols-1 lg:grid-cols-3 items-start justify-between gap-16 place-items-start lg:place-items-start text-[#FFF8F7]">
        <div>
          <img src="/footerlogo.png" alt="" className="w-[110px] h-[95px]" />
          <p className="mt-6 leading-loose">
            Your Trusted Partner for Safe and Cost-Effective Procurement.
            Whether you’re an individual or a business, we bring authentic
            products directly to you—affordably and securely.
          </p>
        </div>

        <div className="w-max">
          <span className="text-[#DF312E] font-[600]">Quick Links</span>
          <ul className="mt-7 space-y-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <li>
              <a href="#">Individuals</a>
            </li>
            <li>
              <a href="#">Businesses</a>
            </li>
            <li>
              <a href="#">Why Choose Us</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>

        <div className="w-max flex flex-col items-start justify-start">
          <span className="text-[#DF312E] font-[600]">Contact Us</span>
          <div className="mt-7 flex flex-col items-start justify-start w-full space-y-4">
            <div>
              <span className="text-[#DF312E] font-semibold">Address:</span>{" "}
              <span>Lagos, Nigeria</span>
            </div>
            <div>
              <span className="text-[#DF312E] font-semibold">Email:</span>{" "}
              <span>Tradecenter@gmail.com</span>
            </div>
            <div>
              <span className="text-[#DF312E] font-semibold">Phone:</span>{" "}
              <span>+234 555 555 55</span>
            </div>
          </div>
          <div className="w-full flex items-start justify-start mt-6 space-x-3">
            <a
              href="#"
              className="text-tradecenter_text rounded-full p-2 bg-[#DF312E]"
            >
              <FaXTwitter size={14} className="text-white" />
            </a>
            <a
              href="#"
              className="text-tradecenter_text rounded-full p-2 bg-[#DF312E]"
            >
              <FaFacebookF size={14} className="text-white" />
            </a>
            <a
              href="#"
              className="text-tradecenter_text rounded-full p-2 bg-[#DF312E]"
            >
              <FaLinkedinIn size={14} className="text-white" />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;

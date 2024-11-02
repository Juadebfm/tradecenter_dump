import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import React from "react";
import Button from "./r.components/Button";

const Contact = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-[45fr_55fr] min-h-max md:min-h-[80vh] bg-[#FFFCFC]">
      <div className="p-[35px] md:p-20 flex flex-col items-start justify-center w-full">
        <div className="flex justify-start items-center gap-4 tracking-tighter mt-8 lg:mt-0 border-b border-[#DF312E] pb-5 md:pb-10 w-full">
          <div className="w-2 h-[2.6rem] bg-tradecenter_red" />
          <h2 className="text-tradecenter_dark_blue text-[32px] md:text-[48px] font-[700] leading-[1.1] w-full">
            Get in Touch
          </h2>
        </div>
        <p className="border-b border-[#DF312E] py-[35px] md:py-10 text-tradecenter_text leading-[27px] w-full">
          Have questions or want to get started with Tradecenter? Our team is
          here to assist you with personalized solutions and competitive quotes.
        </p>

        <div className="py-[35px] md:py-10 space-y-4 border-b border-[#DF312E] w-full">
          <ul className="space-y-2">
            <li className="space-x-2">
              <span className="text-[#DF312E] font-semibold">Email:</span>
              <a
                href="mailto:tradecenter@gmail.com"
                className="text-tradecenter_text"
              >
                tradecenter@gmail.com
              </a>
            </li>
            <li className="space-x-2">
              <span className="text-[#DF312E] font-semibold">Phone:</span>
              <a href="tel:+23455555555" className="text-tradecenter_text">
                +234 555 555 55
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-10 flex items-center justify-start space-x-2 w-full">
          <span className="text-[#DF312E] font-semibold">Follow Us:</span>
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
      <div className="bg-[#590003] px-[35px] md:px-20 py-20">
        <form className="flex items-center justify-center flex-col h-full w-full gap-5">
          <div className="w-full flex-col flex text-white gap-2">
            <label htmlFor="name">Fullname</label>
            <input
              className="h-[56px] px-6 placeholder:text-[#121F3B] text-[15px]"
              type="text"
              id="name"
              placeholder="Fullname"
            />
          </div>
          <div className="w-full flex-col flex text-white gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="h-[56px] px-6 placeholder:text-[#121F3B] text-[15px]"
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="w-full flex-col flex text-white gap-2">
            <label htmlFor="phone">Phone Number</label>
            <input
              className="h-[56px] px-6 placeholder:text-[#121F3B] text-[15px]"
              type="tel"
              id="phone"
              placeholder="Phone Number"
            />
          </div>

          <div className="w-full text-[#F3F7FF] text-center">
            <Button
              btnText="Send Message"
              btnClass="w-full bg-tradecenter_red h-[56px] flex items-center justify-center hover:shadow-[#F3F7FF]/10 cursor-pointer mt-6 hover:shadow-lg transition-all duration-150 ease-in-out"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

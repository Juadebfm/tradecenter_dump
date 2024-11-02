import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import Button from "./r.components/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveSection = (section) => {
    return activeSection === section
      ? "text-tradecenter_red"
      : "text-tradecenter_dark_blue";
  };

  return (
    <>
      <nav
        className={`
        fixed top-0 left-0 right-0 z-50
        h-[100px] w-full px-6 md:px-16 lg:px-28 xl:px-32
        flex items-center justify-between
        transition-all duration-300 ease-in-out
        ${
          hasScrolled
            ? "bg-white/80 backdrop-blur-md border-b border-black/10 shadow-lg"
            : "bg-white border-b border-black/10"
        }
      `}
      >
        {/* Logo */}
        <div className="w-auto lg:w-[15%]">
          <img
            src="/trade_center.png"
            alt="Tradecenter Logo"
            className="w-auto h-[38.55px]"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex w-[70%] space-x-8 items-center justify-center">
          <li className="hover:underline hover:underline-offset-4 duration-150 ease-linear">
            <ScrollLink
              to="home"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={`${isActiveSection("home")} cursor-pointer`}
              onSetActive={() => setActiveSection("home")}
            >
              Home
            </ScrollLink>
          </li>
          <li className="hover:underline hover:underline-offset-4 duration-150 ease-linear">
            <ScrollLink
              to="services"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={`${isActiveSection("services")} cursor-pointer`}
              onSetActive={() => setActiveSection("services")}
            >
              Our Services
            </ScrollLink>
          </li>
          <li className="hover:underline hover:underline-offset-4 duration-150 ease-linear">
            <ScrollLink
              to="choose"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={`${isActiveSection("choose")} cursor-pointer`}
              onSetActive={() => setActiveSection("choose")}
            >
              Choose
            </ScrollLink>
          </li>
          <li className="hover:underline hover:underline-offset-4 duration-150 ease-linear">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className={`${isActiveSection("contact")} cursor-pointer`}
              onSetActive={() => setActiveSection("contact")}
            >
              Contact
            </ScrollLink>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden lg:flex w-[15%] items-center justify-center">
          <Button
            btnText="Get A Quote"
            btnClass="text-white text-[15px] p-3 rounded-full bg-tradecenter_red w-[139px] h-[50px] flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-150 ease-in-out"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-tradecenter_red bg-[#FEECE9] p-2 rounded-md font-bold"
        >
          {isOpen ? (
            <X size={30} className="transition-all duration-300 ease-in-out" />
          ) : (
            <Menu
              size={30}
              className="transition-all duration-300 ease-in-out"
            />
          )}
        </button>

        {/* Mobile Sidebar */}
        <div
          className={`
            fixed top-[100px] right-0 h-screen w-[80%] bg-white shadow-2xl
            transform transition-transform duration-300 ease-in-out z-50
            ${isOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          {/* Mobile Menu Items */}
          <div className="px-6 py-8">
            <ul className="space-y-6">
              <li>
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`text-lg ${isActiveSection(
                    "home"
                  )} cursor-pointer`}
                  onClick={() => setIsOpen(false)}
                  onSetActive={() => setActiveSection("home")}
                >
                  Home
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`text-lg ${isActiveSection(
                    "services"
                  )} cursor-pointer`}
                  onClick={() => setIsOpen(false)}
                  onSetActive={() => setActiveSection("services")}
                >
                  Our Services
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="choose"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`text-lg ${isActiveSection(
                    "choose"
                  )} cursor-pointer`}
                  onClick={() => setIsOpen(false)}
                  onSetActive={() => setActiveSection("choose")}
                >
                  Choose
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                  className={`text-lg ${isActiveSection(
                    "contact"
                  )} cursor-pointer`}
                  onClick={() => setIsOpen(false)}
                  onSetActive={() => setActiveSection("contact")}
                >
                  Contact
                </ScrollLink>
              </li>
            </ul>

            {/* Mobile Button */}
            <div className="mt-8">
              <Button
                btnText="Get A Quote"
                btnClass="text-white text-[15px] p-3 rounded-full bg-tradecenter_red w-full h-[50px] flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-150 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* Overlay */}
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/20 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </nav>
      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-[100px]" />
    </>
  );
};

export default Navbar;

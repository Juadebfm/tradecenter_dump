import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Button from "./r.components/Button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll events
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActivePage = (path) => {
    return location.pathname === path
      ? "text-tradecenter_red"
      : "text-tradecenter_dark_blue";
  };

  return (
    <>
      <nav
        className={`
        fixed top-0 left-0 right-0 z-50
        h-[100px] w-full px-6 md:px-28 
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
        <div className="w-auto md:w-[15%]">
          <img
            src="/trade_center.png"
            alt="Tradecenter Logo"
            className="w-auto h-[28.55px]"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex w-[70%] space-x-8 items-center justify-center">
          <li className="hover:underline hover:underline-offset-4 duration-150 ease-linear">
            <Link className={isActivePage("/")} to="/">
              Home
            </Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 duration-150 ease-linear">
            <Link className={isActivePage("/our-services")} to="/our-services">
              Our Services
            </Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 duration-150 ease-linear">
            <Link
              className={isActivePage("/why-choose-us")}
              to="/why-choose-us"
            >
              Choose
            </Link>
          </li>
          <li className="hover:underline hover:underline-offset-4 duration-150 ease-linear">
            <Link className={isActivePage("/contact-us")} to="/contact-us">
              Contact
            </Link>
          </li>
        </ul>

        {/* Desktop Button */}
        <div className="hidden md:flex w-[15%] items-center justify-center">
          <Button
            btnText="Get A Quote"
            btnClass="text-white text-[15px] p-3 rounded-full bg-tradecenter_red w-[139px] h-[50px] flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-150 ease-in-out"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-tradecenter_red bg-[#FEECE9] p-2 rounded-md font-bold"
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
                <Link
                  to="/"
                  className={`text-lg ${isActivePage("/")}`}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/our-services"
                  className={`text-lg ${isActivePage("/our-services")}`}
                  onClick={() => setIsOpen(false)}
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/why-choose-us"
                  className={`text-lg ${isActivePage("/why-choose-us")}`}
                  onClick={() => setIsOpen(false)}
                >
                  Choose
                </Link>
              </li>
              <li>
                <Link
                  to="/contact-us"
                  className={`text-lg ${isActivePage("/contact-us")}`}
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
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

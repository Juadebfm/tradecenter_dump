import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import React, { useState } from "react";
import Button from "./r.components/Button";
import { toast } from "react-toastify";

import "./toast.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formdata = new FormData();
    formdata.append("Name", formData.name);
    formdata.append("Email", formData.email);
    formdata.append("Phonenumber", formData.phone);
    formdata.append("Itemintrested", "General Inquiry");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzc2R7bqbBtJ-GLio9L6lF4WnJ2XTLjhVsXiaxmEP_Hh23QzIiA3acds3KYLH_jbIEm/exec",
        {
          method: "POST",
          body: formdata,
          redirect: "follow",
        }
      );

      const result = await response.text();

      if (response.ok) {
        toast.success("Message sent successfully!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          icon: "",
          style: {
            color: "#DF312E",
          },
        });

        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
        });
      } else {
        toast.error("Failed to send message. Please try again.", {
          style: {
            backgroundColor: "#590003",
            color: "white",
          },
          position: "top-right",
          autoClose: 5000,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("An error occurred. Please try again.", {
        style: {
          backgroundColor: "#590003",
          color: "white",
        },
        position: "top-right",
        autoClose: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };
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
                href="mailto:sales@tradecenter.biz"
                className="text-tradecenter_text"
                title="Click To Send Us An Email"
              >
                sales@tradecenter.biz
              </a>
            </li>
            <li className="space-x-2">
              <span className="text-[#DF312E] font-semibold">Phone:</span>
              <a
                href="tel:+2347077659671"
                className="text-tradecenter_text"
                title="Click To Give Us A Call"
              >
                +234 707 765 9671
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-10 flex items-center justify-start space-x-2 w-full">
          <span className="text-[#DF312E] font-semibold">Follow Us:</span>
          <a
            href="https://www.facebook.com/profile.php?id=61560313782234&mibextid=LQQJ4d"
            target="_blank"
            className="text-tradecenter_text rounded-full p-2 bg-[#DF312E] hover:cursor-pointer hover:bg-[#df312e]/80 duration-300 transition-all ease-in"
          >
            <FaFacebookF size={14} className="text-white" />
          </a>
          <a
            href="https://www.instagram.com/_tradecenterng?igsh=MWNvYmVheHR3anc4NQ=="
            target="_blank"
            className="text-tradecenter_text rounded-full p-2 bg-[#DF312E] hover:cursor-pointer hover:bg-[#df312e]/80 duration-300 transition-all ease-in"
          >
            <FaInstagram size={14} className="text-white" />
          </a>
        </div>
      </div>
      <div className="bg-[#590003] px-[35px] md:px-20 py-20">
        <form
          className="flex items-center justify-center flex-col h-full w-full gap-5"
          onSubmit={handleSubmit}
        >
          <div className="w-full flex-col flex text-white gap-2">
            <label htmlFor="name">Fullname</label>
            <input
              className="h-[56px] px-6 placeholder:text-[#121F3B] text-[15px] text-black"
              type="text"
              id="name"
              placeholder="Fullname"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full flex-col flex text-white gap-2">
            <label htmlFor="email">Email</label>
            <input
              className="h-[56px] px-6 placeholder:text-[#121F3B] text-[15px] text-black"
              type="email"
              id="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="w-full flex-col flex text-white gap-2">
            <label htmlFor="phone">Phone Number</label>
            <input
              className="h-[56px] px-6 placeholder:text-[#121F3B] text-[15px] text-black"
              type="tel"
              id="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="w-full text-[#F3F7FF] text-center">
            <Button
              type="submit"
              btnText={isSubmitting ? "Sending..." : "Send Message"}
              btnClass="w-full bg-tradecenter_red h-[56px] flex items-center justify-center hover:shadow-[#F3F7FF]/10 cursor-pointer mt-6 hover:shadow-lg transition-all duration-150 ease-in-out"
            />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

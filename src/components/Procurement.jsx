import { Verified } from "lucide-react";
import React from "react";
import Button from "./r.components/Button";

const Procurement = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-max md:min-h-[80vh] bg-[#FEECE9] mt-16 md:mt-0">
      <div>
        <img src="/procurement.webp" alt="" className="w-full h-full" />
      </div>
      <div className="p-[35px] md:p-20 flex flex-col items-start justify-center">
        <div className="flex justify-start items-center gap-4 tracking-tighter mt-8 lg:mt-0 border-b border-[#DF312E] pb-5 md:pb-10">
          <div className="w-2 h-[5.5rem] bg-tradecenter_red" />
          <h2 className="text-tradecenter_dark_blue text-[32px] md:text-[48px] font-[700] leading-[1.1] w-[80%]">
            Procurement Solutions for Individuals
          </h2>
        </div>
        <p className="border-b border-[#DF312E] py-[35px] md:py-10 text-tradecenter_text leading-[27px]">
          At Tradecenter, we make it easy for individuals to access quality
          products directly from the source, bypassing middlemen and saving
          money. Whether it’s electronics, fashion, or home goods, we guarantee
          authenticity and value.
        </p>

        <div className="py-[35px] md:py-10 space-y-4 border-b border-[#DF312E]">
          <div className="flex items-center justify-start gap-3 text-tradecenter_text font-[600]">
            <div className="p-2 md:p-3 rounded-full bg-[#BB2526] text-white">
              <Verified className="h-[23px] w-[23px]" />
            </div>
            <p className="text-base md:text-[18px]">
              Authentic products directly from manufacturers
            </p>
          </div>
          <div className="flex items-center justify-start gap-3 text-tradecenter_text font-[600]">
            <div className="p-2 md:p-3 rounded-full bg-[#BB2526] text-white">
              <img src="/savings.png" className="h-[23px] w-[23px]" />
            </div>
            <p className="text-base md:text-[18px]">Cost savings on every purchase</p>
          </div>
          <div className="flex items-center justify-start gap-3 text-tradecenter_text font-[600]">
            <div className="p-2 md:p-3 rounded-full bg-[#BB2526] text-white">
              <img src="/truckscb.png" className="h-[23px] w-[23px]" />
            </div>
            <p className="text-base md:text-[18px]">
              Fast, reliable service with tracking support
            </p>
          </div>
        </div>

        <Button
          btnText="Start Your Order Today"
          btnClass="text-white text-[15px] p-3 rounded-full bg-tradecenter_red w-full md:w-[210px] h-[56px] flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-150 ease-in-out px-3 hover:bg-tradecenter_red/80 mt-10 mb-10"
        />
      </div>
    </section>
  );
};

export default Procurement;

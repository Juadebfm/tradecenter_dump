import { Verified } from "lucide-react";
import React from "react";
import Button from "./r.components/Button";

const Empower = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-max md:min-h-[80vh] bg-white ">
      <div className="order-2 md:order-1 p-[35px] md:p-20 flex flex-col items-start justify-center">
        <div className="flex justify-start items-center gap-2 md:gap-4 tracking-tighter mt-8 lg:mt-0 border-b border-[#DF312E] pb-5 md:pb-10">
          <div className="w-2 h-[150px] bg-tradecenter_red" />
          <h2 className="text-tradecenter_dark_blue text-[32px] md:text-[48px] font-[700] leading-[1.1] w-full md:w-[80%]">
            Empowering Businesses with Secure Procurement
          </h2>
        </div>
        <div className="border-b border-[#DF312E] py-[35px] md:py-10 text-tradecenter_text leading-[27px]">
          <h3 className="text-[20px] md:text-[24px] font-[700] leading-[40px] text-tradecenter_red">
            Insurance-Covered Solutions
          </h3>
          <p className="mt-2 text-sm md:text-base leading-[27px]">
            Our business solutions are designed to minimize risk and maximize
            efficiency. Tradecenter provides full insurance coverage for all
            your shipments, whether domestic or international, ensuring your
            goods are safe at every stage.
          </p>
        </div>

        <div className="py-[35px] md:py-10 space-y-4 border-b border-[#DF312E]">
          <div className="flex items-start md:items-center justify-start gap-3 text-tradecenter_text font-[600]">
            <div className="p-2 md:p-3 rounded-full bg-[#BB2526] text-white">
              <Verified className="h-[23px] w-[23px]" />
            </div>
            <div className="text-base md:text-[18px]">
              <h4 className="text-[18px] text-tradecenter_red">Consignments</h4>
              <p className="text-[14px] font-normal mt-1">
                Don’t need a full container? Share a shipment space with our
                consignment service and save money while still securing your
                goods.
              </p>
            </div>
          </div>
          <div className="flex items-start md:items-center justify-start gap-3 text-tradecenter_text font-[600]">
            <div className="p-2 md:p-3 rounded-full bg-[#BB2526] text-white">
              <Verified className="h-[23px] w-[23px]" />
            </div>
            <div className="text-base md:text-[18px]">
              <h4 className="text-[18px] text-tradecenter_red">
                Direct Naira-RMB Exchange:
              </h4>
              <p className="text-[14px] font-normal mt-1">
                We offer a seamless and cost-effective currency exchange
                process, ensuring smooth international transactions.
              </p>
            </div>
          </div>
          <div className="flex items-start md:items-center justify-start gap-3 text-tradecenter_text font-[600]">
            <div className="p-2 md:p-3 rounded-full bg-[#BB2526] text-white">
              <Verified className="h-[23px] w-[23px]" />
            </div>
            <div className="text-base md:text-[18px]">
              <h4 className="text-[18px] text-tradecenter_red">Insurance</h4>
              <p className="text-[14px] font-normal mt-1">
                Protect your investments with comprehensive coverage, giving you
                confidence in every transaction.Protect your investments with
                comprehensive coverage, giving you confidence in every
                transaction.
              </p>
            </div>
          </div>
        </div>

        <Button
          btnText="Contact Us for Business Solutions"
          btnClass="text-white text-[15px] p-4 rounded-full bg-tradecenter_red w-full md:w-max h-[56px] flex items-center justify-center cursor-pointer hover:shadow-lg transition-all duration-150 ease-in-out hover:bg-tradecenter_red/80 mt-10"
        />
      </div>
      <div className="order-1 md:order-2">
        <img src="/empowerment.webp" alt="" className="w-full h-full" />
      </div>
    </section>
  );
};

export default Empower;

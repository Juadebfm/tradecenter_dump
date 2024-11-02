import { ArrowRight } from "lucide-react";
import React from "react";

const Offer = () => {
  return (
    <section className="bg-white min-h-[70vh] p-[35px] md:p-20 lg:p-28 xl:p-32 2xl:px-40">
      <div className="flex justify-start md:justify-center items-center gap-2 tracking-tighter mt-8 lg:mt-0">
        <div className="w-2 h-10 bg-tradecenter_red" />
        <h2 className="text-tradecenter_dark_blue capitalize text-[32px] md:text-[48px] font-[700]">
          What we offer
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 md:gap-6 mt-14">
        {/* 30% width section */}
        <div className="col-span-1 lg:col-span-3 bg-white rounded-lg p-5 lg:p-8 shadow-lg shadow-red-200 border border-red-100">
          <div className="flex flex-col h-full">
            <div className="flex-grow border-b border-[#DF312E]">
              <h3 className="text-tradecenter_red text-[24px] font-[700] pb-7">
                Procurement for Individuals
              </h3>
              <p className="pb-7 text-tradecenter_dark_blue text-[14px] leading-normal">
                Save money and get authentic products directly from
                manufacturers, ensuring you receive quality items at the best
                prices.
              </p>
            </div>
            <button className="flex items-center justify-between gap-6 w-full text-sm lg:text-[15px] text-tradecenter_red font-[700] py-5">
              <span>Learn More About Individual Services</span>{" "}
              <ArrowRight className="text-[#04142F]" />
            </button>
          </div>
        </div>

        {/* 70% width section */}
        <div className="col-span-1 lg:col-span-7 bg-white rounded-lg p-5 lg:p-8 shadow-lg shadow-red-200 border border-red-100">
          <div className="flex flex-col h-full">
            <div className="flex-grow border-b border-[#DF312E]">
              <h3 className="text-tradecenter_red text-[24px] font-[700] pb-7">
                Procurement for Individuals
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 pb-6 gap-5 lg:gap-0">
                <div>
                  <div className="flex items-center justify-start gap-2 py-2">
                    <img
                      src="/check_tradecenter.png"
                      alt=""
                      className="w-[22px] h-[22px]"
                    />
                    <h3 className="text-tradecenter_dark_blue font-[700] capitalize">
                      Consignment Services
                    </h3>
                  </div>
                  <p className="text-tradecenter_dark_blue w-[90%] text-[14px]">
                    Share shipping containers and reduce costs while benefiting
                    from full insurance coverage.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-start gap-2 py-2">
                    <img
                      src="/check_tradecenter.png"
                      alt=""
                      className="w-[22px] h-[22px]"
                    />
                    <h3 className="text-tradecenter_dark_blue font-[700] capitalize">
                      Direct Naira-RMB Exchange
                    </h3>
                  </div>
                  <p className="text-tradecenter_dark_blue w-[90%] text-[14px]">
                    Streamline currency transactions with our competitive
                    exchange rates and transparent process.
                  </p>
                </div>
                <div>
                  <div className="flex items-center justify-start gap-2 py-2">
                    <img
                      src="/check_tradecenter.png"
                      alt=""
                      className="w-[22px] h-[22px]"
                    />
                    <h3 className="text-tradecenter_dark_blue font-[700] capitalize">
                      Insurance Coverage
                    </h3>
                  </div>
                  <p className="text-tradecenter_dark_blue w-[90%] text-[14px]">
                    All goods are insured, whether they're procured locally or
                    internationally, giving you peace of mind.
                  </p>
                </div>
              </div>
            </div>
            <button className="flex items-center justify-start gap-6 w-full text-sm lg:text-[15px] text-tradecenter_red font-[700] py-5">
              <span>Learn More About Individual Services</span>{" "}
              <ArrowRight className="text-[#04142F]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;

import React from "react";

const Choose = () => {
  return (
    <section className="min-h-max md:min-h-[50vh] bg-[#FEECE9]  bg-[url('/pattern_choose.png')] bg-no-repeat bg-cover mt-16 md:mt-0 p-[35px] md:p-20 ">
      <div className="flex items-center justify-center w-full gap-3 mt-10 md:mt-0">
        <div className="w-2 h-12 bg-tradecenter_red" />
        <h2 className="text-center w-max text-tradecenter_dark_blue text-4xl md:text-5xl font-bold leading-tight">
          Why Choose Tradecenter?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center justify-center gap-10 mt-16 w-full md:w-[90%] mx-auto">
        {/* First Box */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white w-20 h-12 rounded-t-full relative z-10">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[-30%]">
              <img src="/shield_icon.png" alt="" className="w-10 h-10" />
            </div>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-lg shadow-tradecenter_red/40 -mt-0 relative z-0 min-h-[178px]">
            <h3 className="font-semibold text-lg mb-2 text-center text-tradecenter_red">
              Direct Access to Manufacturers
            </h3>
            <p className="text-tradecenter_text w-[90%] mx-auto text-center">
              We partner directly with trusted suppliers to bring you the best
              products and prices.
            </p>
          </div>
        </div>

        {/* Second Box */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white w-20 h-12 rounded-t-full relative z-10">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[-30%]">
              <img src="/handshakeicon.png" alt="" className="w-10 h-10" />
            </div>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-xl shadow-tradecenter_red/40 -mt-0 relative z-0 min-h-[178px]">
            <h3 className="font-semibold text-lg mb-2 text-center text-tradecenter_red">
              Comprehensive Insurance
            </h3>
            <p className="text-tradecenter_text w-[90%] mx-auto text-center">
              All our business services come with full insurance coverage to
              protect your investments.
            </p>
          </div>
        </div>

        {/* Third Box */}
        <div className="flex flex-col items-center justify-center">
          <div className="bg-white w-20 h-12 rounded-t-full relative z-10">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[-30%]">
              <img src="/walleticon.png" alt="" className="w-10 h-10" />
            </div>
          </div>
          <div className="bg-white p-10 rounded-xl shadow-lg shadow-tradecenter_red/40 -mt-0 relative z-0 min-h-[178px]">
            <h3 className="font-semibold text-lg mb-2 text-center text-tradecenter_red">
              Flexible Consignment Options
            </h3>
            <p className="text-tradecenter_text w-[90%] mx-auto text-center">
              Our consignment service allows businesses to reduce costs while
              securing needed goods.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Choose;

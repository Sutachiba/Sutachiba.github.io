/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Header = ({ className, overlapGroupClassName, offertagClassName, divClassName }) => {
  return (
    <div className={`relative w-[1200px] h-[66px] ${className}`}>
      <div className="absolute w-12 h-12 top-2 left-[1046px] rounded-[120px] border border-solid border-black">
        <img
          className="absolute w-5 h-5 top-3.5 left-[13px] object-cover"
          alt="Telephone"
          src="https://c.animaapp.com/aQp9sILh/img/telephone-1-1@2x.png"
        />
      </div>
      <div className="absolute w-12 h-12 top-2 left-[990px] rounded-[120px] border border-solid border-black">
        <img
          className="absolute w-5 h-5 top-3.5 left-[13px] object-cover"
          alt="User"
          src="https://c.animaapp.com/aQp9sILh/img/user-1-1@2x.png"
        />
      </div>
      <div className="absolute w-[93px] top-5 left-[677px] [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
        Inspirations
      </div>
      <div className="absolute w-[100px] top-5 left-[501px] [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
        Destinations
      </div>
      <div className="absolute w-[149px] top-5 left-[276px] [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
        Discover Club Med
      </div>
      <div className="absolute w-[152px] h-[50px] top-[7px] left-[797px]">
        <div
          className={`relative w-[150px] h-[50px] bg-[#1e2643] rounded-[120px] border border-solid border-[#1e2643] ${overlapGroupClassName}`}
        >
          <img
            className={`absolute w-5 h-5 top-[15px] left-[94px] object-cover ${offertagClassName}`}
            alt="Offertag"
            src="https://c.animaapp.com/aQp9sILh/img/offertag-1-1@2x.png"
          />
          <div
            className={`absolute top-[13px] left-[34px] [font-family:'Inter',Helvetica] font-bold text-white text-lg tracking-[0] leading-6 whitespace-nowrap ${divClassName}`}
          >
            Offers
          </div>
        </div>
      </div>
      <div className="absolute w-[75px] h-6 top-[21px] left-[1118px]">
        <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap">
          En
        </div>
        <div className="absolute w-1.5 top-0 left-[23px] [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
          |
        </div>
        <div className="absolute w-9 top-0 left-[33px] [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
          Zh
        </div>
      </div>
      <img
        className="absolute w-[242px] h-[53px] top-[9px] left-[11px] object-cover"
        alt="Futurenow logo"
        src="https://c.animaapp.com/aQp9sILh/img/futurenow-logo--transparent-bg-black-font-green-triangle--1-1@2x.png"
      />
    </div>
  );
};

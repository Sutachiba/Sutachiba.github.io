/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const SpecialOffer = ({ className }) => {
  return (
    <div className={`relative w-[1200px] h-14 bg-[#ffbf00] ${className}`}>
      <div className="absolute w-[42px] top-[11px] left-[1140px] [font-family:'Inter',Helvetica] font-normal text-black text-[15px] text-center tracking-[0] leading-6">
        Close
      </div>
      <div className="absolute w-[163px] top-[17px] left-[253px] [font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] leading-5">
        Maldives Special Offer
      </div>
      <p className="absolute w-[445px] top-[17px] left-[424px] [font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] leading-5">
        Kani Kids Stay Free, Teens 50% Off; Free SPA offer in Finolhu Villas
      </p>
      <div className="absolute top-[17px] left-[877px] [font-family:'Inter',Helvetica] font-normal text-black text-sm tracking-[0] leading-5 whitespace-nowrap">
        Book Now
      </div>
    </div>
  );
};

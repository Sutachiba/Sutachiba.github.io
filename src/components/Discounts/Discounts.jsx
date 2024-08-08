/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const Discounts = ({ className, rectangleClassName }) => {
  return (
    <div className={`w-[1202px] h-[380px] ${className}`}>
      <div className="w-[1201px] h-[380px]">
        <div className="relative w-[1200px] h-[380px] left-px">
          <div className="w-12 h-12 top-5 left-[1132px] shadow-[0px_4px_4px_#00000040] absolute rounded-[120px] border border-solid border-white" />
          <img
            className="absolute w-[1200px] h-[380px] top-0 left-0 object-cover"
            alt="Banner image"
            src="https://c.animaapp.com/aQp9sILh/img/bannerimage-1.png"
          />
          <div className="absolute w-[143px] top-[170px] left-[118px] [-webkit-text-stroke:1px_#ffffff] [font-family:'Inter',Helvetica] font-normal text-white text-xl tracking-[0] leading-7 whitespace-nowrap">
            Up to 20% OFF
          </div>
          <div className="absolute w-[137px] h-[41px] top-[220px] left-[119px]">
            <div className="relative h-[42px] -top-px">
              <div
                className={`w-[137px] h-9 top-1.5 left-0 bg-white absolute rounded-[120px] border border-solid border-white ${rectangleClassName}`}
              />
              <div className="absolute w-[95px] top-0 left-8 [font-family:'Roboto',Helvetica] font-normal text-black text-base tracking-[0] leading-[50px] whitespace-nowrap">
                Book Now
              </div>
            </div>
          </div>
          <div className="absolute w-[619px] top-[59px] left-[118px] [-webkit-text-stroke:1px_#ffffff] [font-family:'Newsreader',Helvetica] font-normal text-white text-5xl tracking-[0] leading-[50px]">
            2024 Last-Minute Summer Holiday
          </div>
        </div>
      </div>
    </div>
  );
};

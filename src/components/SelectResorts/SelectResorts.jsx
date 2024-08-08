/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const SelectResorts = ({
  className,
  leftBtnClassName,
  rightArrowClassName,
  rightBtnClassName,
  rightArrowClassNameOverride,
}) => {
  return (
    <div className={`relative w-[960px] h-[178px] ${className}`}>
      <div className="absolute w-[444px] h-[50px] top-[126px] left-[516px] rounded-[120px] border border-solid border-[#cccccc]">
        <div className="absolute w-[186px] h-10 top-[5px] left-[5px] bg-[#ffbf00] rounded-[120px]">
          <div className="absolute w-[126px] top-[7px] left-[30px] [font-family:'Inter',Helvetica] font-bold text-black text-base text-center tracking-[0] leading-6">
            Popular Resorts
          </div>
        </div>
        <div className="absolute w-[158px] top-[11px] left-[248px] [font-family:'Inter',Helvetica] font-bold text-black text-base text-center tracking-[0] leading-6">
          Exclusive Collection
        </div>
      </div>
      <div className="absolute w-[150px] -top-px left-0 [font-family:'Newsreader',Helvetica] font-normal text-black text-[40px] tracking-[0] leading-[42px]">
        Over 60
      </div>
      <div className="absolute w-[328px] top-[41px] left-0 [font-family:'Newsreader',Helvetica] font-normal text-[#008080] text-[40px] tracking-[0] leading-[42px]">
        ways to reconnect
      </div>
      <p className="absolute w-[342px] top-[105px] left-0 [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
        Sun or Snow, near or far, you will certainly find the Resort of your dreams for your next vacation
      </p>
      <div className="absolute w-[1076px] h-[100px] top-[416px] left-[-76px]">
        <div
          className={`absolute w-[100px] h-[100px] top-0 left-0 bg-[#ffbf00] rounded-[120px] border border-solid border-[#ffbf00] ${leftBtnClassName}`}
        >
          <img
            className={`left-[29px] absolute w-10 h-10 top-[31px] object-cover ${rightArrowClassName}`}
            alt="Right arrow"
            src="https://c.animaapp.com/aQp9sILh/img/right-arrow-4@2x.png"
          />
        </div>
        <div
          className={`absolute w-[100px] h-[100px] top-0 left-[976px] bg-[#ffbf00] rounded-[120px] border border-solid border-[#ffbf00] ${rightBtnClassName}`}
        >
          <img
            className={`left-[31px] absolute w-10 h-10 top-[31px] object-cover ${rightArrowClassNameOverride}`}
            alt="Right arrow"
            src="https://c.animaapp.com/aQp9sILh/img/right-arrow-5@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

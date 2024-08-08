/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const AboutHero = ({
  className,
  overlapGroupClassName,
  divClassName,
}) => {
  return (
    <div
      className={`flex flex-wrap w-[1199px] h-[558px] items-start gap-[0px_-239px] relative ${className}`}
    >
      <div className="relative w-[1200px] h-[560px] mb-[-2.00px] mr-[-1.00px] bg-[#f7f0e9]" />
      <div className="absolute w-[432px] top-[85px] left-[100px] [font-family:'Newsreader',Helvetica] font-normal text-black text-[64px] tracking-[0] leading-[66px]">
        FutureNow, Hey Premium All-inclusive Resorts
      </div>
      <p className="absolute w-[500px] top-[358px] left-[100px] [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6">
        We offer tailor-made holidays in incredible locales around the world.
        Back in 1950, we created premium all-inclusive vacation. We take care of
        everything so you just have to let go.
      </p>
      <div className="flex w-[480px] items-end gap-2.5 absolute top-[136px] left-[598px]">
        <img
          className="relative w-[480px] h-[480px] object-cover"
          alt="Image"
          src="https://c.animaapp.com/aQp9sILh/img/image-19@2x.png"
        />
      </div>
      <div className="absolute w-[543px] h-[35px] top-[485px] left-[100px]">
        <button className="all-[unset] box-border absolute w-[104px] h-[26px] top-[9px] left-[441px]">
          <div
            className={`relative w-[102px] h-[26px] bg-[#ffbf00] rounded-[120px] border border-solid border-[#ffbf00] ${overlapGroupClassName}`}
          >
            <div
              className={`absolute w-[75px] top-0 left-[25px] [font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6 whitespace-nowrap ${divClassName}`}
            >
              Search
            </div>
          </div>
        </button>
        <div className="absolute w-[434px] h-[35px] top-0 left-0">
          <div className="relative w-[432px] h-[35px]">
            <div className="absolute w-[432px] h-[26px] top-[9px] left-0 bg-white rounded-[120px] border border-solid border-[#cccccc]" />
            <p className="absolute w-[371px] top-0 left-[18px] [font-family:'Roboto',Helvetica] font-normal text-[#9a9a9a] text-base tracking-[0] leading-[50px] whitespace-nowrap">
              Where would you like to go?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

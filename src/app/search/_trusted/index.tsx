"use client";

import React, { useEffect, useState } from "react";

export const Trusted = ({}: any) => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="w-full py-2 md:py-8 bg-[#ECECEC]">
      <div className=" m-auto w-full relative max-w-screen-2xl px-0 md:px-16">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="px-4 w-auto hidden md:block">
            Trusted by <br />
            best in industry
          </div>
          <div className="px-4 w-auto block md:hidden text-center text-[#595858] font-medium ">
            Trusted by best in industry
          </div>
          <div className="hidden md:grid grid-cols-7 gap-4 w-full md:w-5/6">
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <div
                className="bg-white px-6 py-3 rounded-lg flex items-center justify-center"
                key={index}
              >
                <img
                  src={`/images/trusted/${index}.png`}
                  alt="trusted"
                  className="h-8 object-contain"
                />
              </div>
            ))}
          </div>
          <div className="px-2 flex items-center justify-start md:hidden gap-2 w-full overflow-scroll">
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <div
                className="bg-white px-2 py-1.5 rounded-lg flex items-center justify-center min-w-[120px]"
                key={index}
              >
                <img
                  src={`/images/trusted/${index}.png`}
                  alt="trusted"
                  className="h-8 object-contain"
                />
              </div>
            ))}
          </div>
          <div className="px-2 flex items-center justify-start md:hidden gap-2 w-full overflow-scroll">
            {[1, 2, 3, 4, 5, 6, 7].map((index) => (
              <div
                className="bg-white px-2 py-1.5 rounded-lg flex items-center justify-center min-w-[120px]"
                key={index}
              >
                <img
                  src={`/images/trusted/${index}.png`}
                  alt="trusted"
                  className="h-8 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";

import React, { useEffect, useState } from "react";
import { ReportItem } from "./item";

export const Property = ({}: any) => {
  return (
    <>
      <div className="w-full py-8 bg-white">
        <div className=" m-auto w-full relative max-w-screen-2xl px-6 md:px-16">
          
          <h1 className="text-3xl md:text-4xl font-bold text-black mt-8 uppercase leading-normal">
            Expert Insights into the Real Estate Market
          </h1>
          <div className="flex items-center justify-start gap-4 mt-8 w-full overflow-auto">
            <div className="bg-[#9f351727] px-4 md:px-8 pt-4 md:pt-6 pb-4 rounded-lg">
              <div>
                <div className="text-3xl text-black font-bold mb-2">
                  2,000+
                </div>
                <div className="text-md text-black">
                  Total Sales Transactions
                </div>
              </div>
              <button className="bg-[#9f3417] px-4 py-2.5 text-white text-sm mt-8 rounded-full whitespace-nowrap flex items-center gap-2">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <img src="/icons/up-green.svg" alt="arrow" className="w-3" />
                </div>
                30% vs April 2024
              </button>
            </div>
            <div className="bg-[#9f351727] px-4 md:px-8 pt-4 md:pt-6 pb-4 rounded-lg">
              <div>
                <div className="text-3xl text-black font-bold mb-2">
                  $1.5 Billion
                </div>
                <div className="text-md text-black">
                  Total Revenue Generated
                </div>
              </div>
              <button className="bg-[#9f3417] px-4 py-2.5 text-white text-sm mt-8 rounded-full whitespace-nowrap flex items-center gap-2">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <img src="/icons/up-green.svg" alt="arrow" className="w-3" />
                </div>
                12.5% vs Dec 2024
              </button>
            </div>
            <div className="bg-[#9f351727] px-4 md:px-8 pt-4 md:pt-6 pb-4 rounded-lg">
              <div>
                <div className="text-3xl text-black font-bold mb-2">
                  AED 25 Million
                </div>
                <div className="text-md text-black">
                  Average Property Value
                </div>
              </div>
              <button className="bg-[#9f3417] px-4 py-2.5 text-white text-sm mt-8 rounded-full whitespace-nowrap flex items-center gap-2">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <img src="/icons/up-green.svg" alt="arrow" className="w-3" />
                </div>
                2.3% vs Dec 2024
              </button>
            </div>
            <div className="bg-[#9f351727] px-4 md:px-8 pt-4 md:pt-6 pb-4 rounded-lg">
              <div>
                <div className="text-3xl text-black font-bold mb-2">
                  $1 million
                </div>
                <div className="text-md text-black">
                  Market Growth Rate
                </div>
              </div>
              <button className="bg-[#9f3417] px-4 py-2.5 text-white text-sm mt-8 rounded-full whitespace-nowrap flex items-center gap-2">
                <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                  <img src="/icons/up-green.svg" alt="arrow" className="w-3" />
                </div>
                luxury home by 14.2%
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 mt-16">
            <div className="text-[#6F6F6F] text-sm font-medium flex items-center gap-2">
              <div className="flex items-center gap-3 border border-[#A6A7AA] rounded-full py-3 md:py-4 px-3 md:px-6 md:w-72">
                <img src="/icons/search.svg" alt="search" className="h-5" />
                <input
                  type="text"
                  placeholder="Search Reports"
                  className="bg-transparent text-md focus:outline-none w-full text-black hidden md:block"
                />
              </div>
              1025+ Reports
            </div>
            <div className="flex items-center justify-end gap-2">
              <div className="text-[#6F6F6F] text-sm flex items-center gap-4 bg-white py-3 px-4 rounded-full border border-[#ECECEC]">
                <select>
                  <option>December</option>
                </select>
                {/* Sort
                <img src="/icons/sort.svg" alt="down" className="w-5 h-5" /> */}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
            {[1, 2, 3, 4].map((property, index) => (
              <ReportItem key={index} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-[#A6A7AA] text-xs border border-[#A6A7AA] px-8 py-4 rounded-full">
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

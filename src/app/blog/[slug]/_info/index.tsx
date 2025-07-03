"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";

export const Info = ({}: any) => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-4xl mx-auto px-6 md:px-0 flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="w-full">
          <h2 className="text-2xl font-semibold text-theme-dark-green mt-4">
            Heading 01
          </h2>
          <p className="text-md text-theme-dark-green my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            incididunt ut labore etLorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do incididunt ut labore etLorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur.
          </p>
          <img
            src="/images/property/down-1.png"
            alt="property"
            className="w-full h-[300px] md:h-[450px] object-cover"
          />

          <hr className="border-[#D9D9D9] mt-8 mb-10" />

          <h2 className="text-2xl font-semibold text-theme-dark-green mt-4">
            Comment as a Guest
          </h2>

          <div className="w-full mt-8 flex items-center justify-between gap-4 flex-wrap md:flex-nowrap">
            <input
              type="text"
              placeholder="Name"
              className="w-full md:w-1/3 px-5 py-3 bg-[#FDFAF9] border border-[#9f3417]"
            />
            <input
              type="text"
              placeholder="E-mail address"
              className="w-full md:w-1/3 px-5 py-3 bg-[#FDFAF9] border border-[#9f3417]"
            />
            <input
              type="text"
              placeholder="Number"
              className="w-full md:w-1/3 px-5 py-3 bg-[#FDFAF9] border border-[#9f3417]"
            />
          </div>
          <textarea
            placeholder="Ask the agent for more information about this property..."
            className="w-full h-40 px-5 py-3 mt-4 bg-[#FDFAF9] border border-[#9f3417]"
          ></textarea>

          <button className="px-6 py-3.5 text-white bg-[#9f3417] text-md border border-[#9f3417] h-full font-bold flex items-center justify-center gap-4 w-full mt-4">
            Submit
            <img
              src="/icons/arrow-right-white.svg"
              alt="arrow"
              className="w-3 h-3"
            />
          </button>
        </div>
      </div>
    </div>
  );
};

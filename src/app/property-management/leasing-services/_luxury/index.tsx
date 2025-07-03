"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";

export const Luxury = ({}: any) => {
  return (
    <div className="w-full py-0 md:py-16 bg-white">
      <div className=" max-w-6xl m-auto relative">
        <div className="bg-black md:mr-8 md:mb-8 rounded-xl">
          <div className="w-full md:w-1/2 px-0 md:px-12 py-10 md:py-32 md:text-start flex flex-col items-start text-start">
            <h2 className="text-2xl md:text-3xl text-white uppercase px-8 md:px-8 py-4">
            Featured Properties
            </h2>
            <p className="mt-2 text-white text-lg px-8 md:px-8">
            Get all the latest updates and news in one easy-to-read roundup!
            </p>
            <img
              src="/images/modern-house.jpg"
              alt="luxury"
              className="w-full h-full object-cover md:hidden block px-8 py-12"
            />
            <button className="bg-[#9f3417] text-white px-6 md:px-4 py-4 md:py-3 mx-8 mt-0 md:mt-12 hover:bg-black font-playfair text-md flex items-center gap-3 uppercase rounded-lg">
              Explore
              <img
                src="/icons/arrow-right-white.svg"
                alt="arrow"
                className="h-3"
              />
            </button>
          </div>
        </div>
        <img
          src="/images/modern-house.jpg"
          alt="luxury"
          className="absolute top-8 bottom-0 right-0 w-1/2 h-full object-cover md:block hidden rounded-xl"
        />
      </div>
    </div>
  );
};

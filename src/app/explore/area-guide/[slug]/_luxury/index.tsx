"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";

export const Luxury = ({}: any) => {
  return (
    <div className="w-full py-16 bg-white">
      <div className=" max-w-6xl m-auto relative">
        <div className="bg-theme-dark-green md:mr-8 md:mb-8">
          <div className="w-full md:w-3/5 px-0 md:px-24 py-10 md:py-32 text-center md:text-start flex flex-col items-center md:items-start">
            <h2 className="text-2xl md:text-3xl text-white uppercase px-3 md:px-8 py-4">
              Luxury Listings, Exceptional Reach
            </h2>
            <p className="mt-2 text-white text-lg px-4 md:px-8">
              Designed for agents, developers, and property owners, we connect
              you with high-net-worth individuals globally for extraordinary
              results.
            </p>
            <img src="/images/luxury.jpg" alt="luxury" className="w-full h-full object-cover md:hidden block px-8 py-12" />
            <button className="bg-transparent text-cream px-6 md:px-4 py-4 md:py-3 mx-8 mt-0 md:mt-12 hover:bg-black border-2 border-cream font-playfair text-md flex items-center gap-3 uppercase">
              List your Property
              <img
                src="/icons/arrow-right-cream.svg"
                alt="arrow"
                className="h-3"
              />
            </button>
          </div>
        </div>
        <img
          src="/images/luxury.jpg"
          alt="luxury"
          className="absolute top-8 bottom-0 right-0 w-2/5 h-full object-cover md:block hidden"
        />
      </div>
    </div>
  );
};

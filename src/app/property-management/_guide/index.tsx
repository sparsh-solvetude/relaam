"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Guide = ({}: any) => {
  return (
    <div className="w-full my-0 md:my-16 bg- ">
      <div className="max-w-screen-2xl mx-auto px-0 md:mx-16 flex items-center justify-between bg-[#c2d6ef] rounded-xl overflow-hidden">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center py-16 px-8 md:px-12">
          <div className="bg-[#9f3417] px-4 py-3 font-bold text-white text-sm font-playfair uppercase rounded-full w-auto inline-block">
            Landlord Guides
          </div>
          <h2 className="text-2xl md:text-4xl  text-theme-dark-green leading-tight w-full mt-5">
            Landlord Services
          </h2>
          <img
            src="/images/explore/explore-1.jpg"
            alt="guide"
            className="w-full h-[350px] object-cover md:hidden block my-5"
          />
          <p className="text-lg w-full leading-tight mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            incididunt ut labore etLorem ipsum dolor sit amet, consectetur
            adipiscing elit. labore etLorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <Link
            href={"/property-management/landlord-services"}
            className="px-4 py-4 text-white bg-black text-sm flex items-center gap-4 mt-6 uppercase font-playfair font-bold rounded-lg"
          >
            Explore Now
            <img
              src="/icons/arrow-right-white.svg"
              alt="arrow"
              className="w-4 h-4"
            />
          </Link>
        </div>
        <div className="w-1/2 pl-4 hidden md:block">
          <img
            src="/images/explore/explore-1.jpg"
            alt="guide"
            className="w-full h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

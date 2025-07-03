"use client";

import React, { useEffect, useState } from "react";

export const Gallery = ({}: any) => {
  return (
    <div className="w-full py-0 md:py-12 pb-8 bg-white">
      <div className=" m-auto w-full relative max-w-screen-2xl px-0 md:px-16 flex flex-col-reverse md:flex-col items-start justify-start gap-8">
        <div className="w-full px-6 md:px-0">
          
          <div className="flex flex-col items-start justify-between gap-4 mt-8 max-w-4xl mx-auto">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-theme-dark-green mt-2 uppercase">
                Dubai Residents and Homeowners Empowered by Dubai’s New Smart
                Rental Index
              </h1>
            </div>
            <img
              src="/images/property/down-1.png"
              alt="property"
              className="w-full h-[300px] md:h-[450px] object-cover"
            />
            <p className="text-md w-full mt-4 text-theme-dark-green">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <button className="bg-white text-[#9f3417] px-4 py-4 mt-4 font-bold text-xs uppercase border border-[#9f3417] hover:bg-gray-200 flex items-center gap-3 rounded-lg">
              Share
              <img src="/icons/share-red.svg" alt="share" className="h-4" />
            </button>
            <hr className="w-full border border-[#D9D9D9] mt-8" />
          </div>
        </div>
      </div>
    </div>
  );
};

"use client";

import React, { useEffect, useState } from "react";

export const Gallery = ({}: any) => {
  return (
    <div className="w-full py-0 md:py-12 pb-8 bg-white">
      <div className=" m-auto w-full relative max-w-screen-2xl px-0 md:px-16 flex flex-col-reverse md:flex-col items-start justify-start gap-8">
        <div className="w-full px-6 md:px-0">
          <div className="hidden md:flex items-center justify-start gap-3 md:gap-4 w-full">
            <div className="flex items-center justify-center w-10 h-10 bg-white border border-[#A6A7AA] rounded-full">
              <img
                src="/icons/arrow-left-gray.svg"
                alt="left"
                className="w-5"
              />
            </div>
            <div className="text-[#6F6F6F] text-sm font-medium">
              <span className="underline">Home</span> /{" "}
              <span className="underline">Explore</span> /{" "}
              <span className="underline">Guides</span> /{" "}
              <span className="underline">Detailed Guide</span> /{" "}
              <span className="underline">Jumeirah Park</span>
            </div>
          </div>
          <div className="flex md:hidden items-center justify-start gap-4">
            <div className="flex items-center justify-center bg-white rounded-full p-1 border border-[#6F6F6F]">
              <img
                src="/icons/arrow-left-gray.svg"
                alt="arrow"
                className="w-3 h-3"
              />
            </div>
            <div className="text-[#6F6F6F] text-sm font-medium overflow-hidden whitespace-nowrap line-clamp-1">
              <span className="underline">...</span> /{" "}
              <span className="underline">Search</span> /{" "}
              <span className="underline">...</span> /{" "}
              <span className="underline">
                Emirates Hills Dubai Pro Al Manara Dubai
              </span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mt-8">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-cream uppercase">
                Jumeirah Park
              </h1>
              <h2 className="text-2xl md:text-3xl font-bold text-theme-dark-green mt-2 uppercase">
                Discover the Lifestyle and Amenities of Jumeirah Park: Your
                Ultimate Guide
              </h2>
            </div>
            <div className="flex flex-row-reverse md:flex-row items-center justify-start gap-3 mt-4 text-sm text-theme-dark-green">
              Share
              <div className="flex items-center justify-center bg-cream rounded-full p-2.5">
                <img src="/icons/share.svg" alt="Share" className="w-5 h-5" />
              </div>
            </div>
          </div>
          <hr className="w-full border border-[#D9D9D9] mt-8 block md:hidden" />
        </div>
        <div className="w-full h-[300px] md:h-[450px] grid grid-cols-2 md:grid-cols-4 gap-1 relative">
          <img
            src="/images/property/down-1.png"
            alt="property"
            className="col-span-2 h-[300px] md:h-[450px] object-cover"
          />
          <img
            src="/images/property/down-2.png"
            alt="property"
            className="col-span-1 h-[300px] md:h-[450px] object-cover hidden md:block"
          />
          <img
            src="/images/property/down-3.png"
            alt="property"
            className="col-span-1 h-[300px] md:h-[450px] object-cover hidden md:block"
          />

          <button className="absolute bottom-4 md:bottom-8 left-4 md:left-8 bg-white text-black px-5 py-3 rounded-lg border border-[#DABDA9] text-sm">
            <span className="hidden md:flex items-center justify-between gap-2">
              Show all Photos/Videos
              <img src="/icons/photo.svg" alt="photo" className="w-5 h-5" />
            </span>
            <span className="block md:hidden">1/10</span>
          </button>
        </div>
      </div>
    </div>
  );
};

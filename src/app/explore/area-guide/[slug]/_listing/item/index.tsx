"use client";

import React, { useEffect, useState } from "react";

export const PropertyItem = ({ id }: any) => {
  return (
    <div className="w-[80vw] md:w-full min-w-[80vw] md:min-w-full bg-[#F8F8F8] relative h-full">
      <img
        src="/images/property/property-1.jpg"
        alt="property"
        className="w-full h-[20rem] object-cover"
      />
      {/* Heart icon */}
      <div className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full p-2 flex items-center justify-center">
        <img src="/icons/heart.svg" alt="heart" className="w-6 h-6" />
      </div>
      <div className="p-4">
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-md font-bold text-theme-dark-green line-clamp-2 h-14">
                  Emirates Hills Dubai <br />
                  {id % 2 == 0 ? "Pro Al Manara Dubai" : ""}
                </h3>
              </div>
              <div className="flex items-center justify-end gap-1 font-bold">
                <img src="/icons/star.svg" alt="star" className="w-4 h-4" />
                4/5
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-start gap-4 mt-2">
              <div className="flex items-center justify-start gap-2">
                <img
                  src="/icons/location-gray.svg"
                  alt="location"
                  className="w-4 h-4"
                />
                <span className="text-sm text-[#6F6F6F]">Business Bay</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <img
                  src="/icons/building-gray.svg"
                  alt="building"
                  className="w-4 h-4"
                />
                <span className="text-sm text-[#6F6F6F]">Apartment</span>
              </div>
            </div>
            <div className="text-theme-red text-md mt-4">AED 35,000,000</div>
            <div className="flex items-center justify-start gap-4 mt-4">
              <div className="flex items-center justify-start gap-2">
                <div className="flex items-center justify-center bg-white rounded-full p-2">
                  <img src="/icons/bed.svg" alt="bed" className="w-4 h-4" />
                </div>
                <span className="text-sm text-[#6F6F6F]">3</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div className="flex items-center justify-center bg-white rounded-full p-2">
                  <img
                    src="/icons/bathroom.svg"
                    alt="bath"
                    className="w-4 h-4"
                  />
                </div>
                <span className="text-sm text-[#6F6F6F]">2</span>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div className="flex items-center justify-center bg-white rounded-full p-2.5">
                  <img src="/icons/frame.svg" alt="frame" className="w-3 h-3" />
                </div>
                <span className="text-sm text-[#6F6F6F]">172 sq ft</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

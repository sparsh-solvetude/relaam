"use client";

import React, { useEffect, useState } from "react";
import { PropertyItem } from "./item";

export const Property = ({}: any) => {
  return (
    <div className="w-full py-12 md:py-20 bg-white">
      <div className=" m-auto w-full relative max-w-screen-2xl px-6 md:px-16">
        <div className="flex items-center justify-center gap-4 md:gap-6 w-full overflow-x-auto ">
          <button className="bg-cream px-6 py-3 border-2 border-cream text-theme-dark-green rounded-full text-sm hover:bg-transparent">
            Apartment
          </button>
          <button className="bg-transparent px-6 py-3 border-2 border-cream text-theme-dark-green rounded-full text-sm hover:bg-cream">
            Villas
          </button>
          <button className="bg-transparent px-6 py-3 border-2 border-cream text-theme-dark-green rounded-full text-sm hover:bg-cream">
            Townhouses
          </button>
          <button className="bg-transparent px-6 py-3 border-2 border-cream text-theme-dark-green rounded-full text-sm hover:bg-cream">
            Plots
          </button>
          <button className="bg-transparent px-6 py-3 border-2 border-cream text-theme-dark-green rounded-full text-sm hover:bg-cream">
            Offices
          </button>
          <button className="bg-transparent px-6 py-3 border-2 border-cream text-theme-dark-green rounded-full text-sm hover:bg-cream">
            Retail
          </button>
          <button className="bg-transparent px-6 py-3 border-2 border-cream text-theme-dark-green rounded-full text-sm hover:bg-cream">
            Ready
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <PropertyItem key={index} />
          ))}
        </div>
        <div className="flex items-center justify-center mt-8">
          <button className="text-[#A6A7AA] text-xs border border-[#A6A7AA] px-8 py-4 rounded-full">
            Load More
          </button>
        </div>
      </div>
    </div>
  );
};

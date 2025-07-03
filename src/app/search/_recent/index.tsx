"use client";

import React, { useEffect, useState } from "react";
import { PropertyItem } from "./item";

export const Recent = ({ title, list = [] }: any) => {
  return (
    <div className="w-full py-12 px-0 md:px-16">
      <div className="flex items-center justify-between border-b border-theme-dark-green pb-4 gap-2">
        <h3 className="text-xl md:text-3xl text-theme-dark-green font-bold">
          Recent Searches
        </h3>
        <button className="text-theme-dark-green text-md font-medium flex items-center gap-2">
          View All
          <span className="hidden md:inline">Properties </span>
          <img
            src="/icons/arrow-right-top-green.svg"
            alt="arrow"
            className="h-3 md:h-4"
          />
        </button>
      </div>
      <div className="flex items-center justify-between md:grid md:grid-cols-4 gap-3 md:gap-4 mt-8 overflow-x-scroll md:overflow-x-hidden ml-6 md:ml-0">
        {[1, 2, 3, 4].map((item: any, index: number) => (
          <PropertyItem key={index} id={index} />
        ))}
      </div>
    </div>
  );
};

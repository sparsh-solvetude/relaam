"use client";

import React, { useEffect, useState } from "react";
import { PropertyItem } from "./item";

export const Listing = ({ title, list = [] }: any) => {
  return (
    <div className="w-full py-12 px-0 md:px-16">
      <div className="flex items-center justify-between border-b border-theme-dark-green pb-4 gap-2 mx-6 md:mx-0">
        <h3 className="text-xl md:text-3xl text-theme-dark-green font-bold">
          {title}
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
        {list.map((item: any, index: number) => (
          <PropertyItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

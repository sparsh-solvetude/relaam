"use client";

import React, { useEffect, useState } from "react";
import { BlogItem } from "./item";

export const Listing = ({ list = [] }: any) => {
  return (
    <div className="w-full py-12 px-0 md:px-16">
      <div className="flex items-center justify-between border-b border-theme-dark-green pb-4 gap-2 mx-6 md:mx-0">
        <h3 className="text-xl md:text-3xl text-theme-dark-green font-bold">
        Latest Blogs
        </h3>
        <button className="text-[#9f3417] text-md font-bold flex items-center gap-2 border border-[#9f3417] px-4 py-2 rounded-md hover:bg-[#ffede8] transition-colors">
          View All
          <img
            src="/icons/arrow-right-red.svg"
            alt="arrow"
            className="h-3 md:h-4"
          />
        </button>
      </div>
      <div className="flex items-center justify-between md:grid md:grid-cols-4 gap-3 md:gap-4 mt-8 overflow-x-scroll md:overflow-x-hidden ml-6 md:ml-0">
        {list.map((item: any, index: number) => (
          <BlogItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export const PropertyItem = ({ image, title, description, price }: any) => {
  return (
    <div className="w-full bg-white relative mb-4">
      <img
        src={image || "/images/property/property-1.jpg"}
        alt="property"
        className="w-full h-[15rem] md:h-[20rem] object-cover"
      />
      <div className="w-full">
        <h3 className="text-lg text-theme-dark-green leading-normal font-playfair font-bold mt-4">
          {title}
        </h3>
        <p className="mt-2 text-sm font-light">151 Properties available</p>

        <p className="mt-2 text-theme-red text-sm">
          Starting from <span className="font-bold">- AED 3,500,000</span>
        </p>
        <Link href={"/explore/area-guide/burjman"}>
          <button className="bg-white text-theme-dark-green px-3 py-2 mt-4 font-bold text-xs uppercase border border-theme-dark-green hover:bg-gray-200 flex items-center gap-1.5">
            Explore Now
            <img
              src="/icons/arrow-right-dark-green.svg"
              alt="arrow"
              className="h-3"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

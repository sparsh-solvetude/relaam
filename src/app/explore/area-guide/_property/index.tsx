"use client";

import React, { useEffect, useState } from "react";
import { PropertyItem } from "./item";

const properties = [
  {
    image: "/images/listing/property-1.jpg",
    title: "Jumeirah Park",
  },
  {
    image: "/images/listing/property-2.jpg",
    title: "Burjmam",
  },
  {
    image: "/images/listing/property-3.jpg",
    title: "Jumeirah Park",
  },
  {
    image: "/images/listing/property-4.jpg",
    title: "Burjmam",
  },
  {
    image: "/images/listing/property-2.jpg",
    title: "Jumeirah Park",
  },
  {
    image: "/images/listing/property-3.jpg",
    title: "Burjmam",
  },
  {
    image: "/images/listing/property-5.jpg",
    title: "Jumeirah Park",
  },
  {
    image: "/images/listing/property-4.jpg",
    title: "Burjmam",
  },
  {
    image: "/images/listing/property-6.jpg",
    title: "Jumeirah Park",
  },
  {
    image: "/images/listing/property-3.jpg",
    title: "Burjmam",
  },
  {
    image: "/images/listing/property-1.jpg",
    title: "Jumeirah Park",
  },
  {
    image: "/images/listing/property-2.jpg",
    title: "Burjmam",
  },
]

export const Property = ({}: any) => {
  return (
    <>
      <div className="w-full py-8 bg-white">
        <div className=" m-auto w-full relative max-w-screen-2xl px-6 md:px-16">
          <div className="flex items-center justify-start gap-3 md:gap-4 w-full">
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
              <span className="underline">Area Guide</span>
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-theme-dark-green mt-8 uppercase leading-normal">
            Explore the City Through Our Detailed Area Guides
          </h1>
          <div className="flex items-center justify-center gap-4 md:gap-6 w-full overflow-x-auto mt-8">
            <button className="bg-cream px-6 py-3 border-2 border-cream text-theme-dark-green rounded-full text-sm hover:bg-transparent">
              All
            </button>
            <button className="bg-transparent px-6 py-3 border-2 border-cream text-theme-dark-green rounded-full text-sm hover:bg-cream">
              Ready
            </button>
            <button className="bg-transparent px-6 py-3 border-2 border-cream text-theme-dark-green rounded-full text-sm hover:bg-cream">
              Off-Plan
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-8">
            {properties.map((property, index) => (
              <PropertyItem key={index} {...property} />
            ))}
          </div>
          <div className="flex items-center justify-center mt-8">
            <button className="text-[#A6A7AA] text-xs border border-[#A6A7AA] px-8 py-4 rounded-full">
              Load More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

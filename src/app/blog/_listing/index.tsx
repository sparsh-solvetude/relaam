"use client";

import React, { useEffect, useState } from "react";
import { BlogItem } from "./item";

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
];

export const BlogList = ({}: any) => {
  return (
    <>
      <div className="w-full py-8 bg-white">
        <div className=" m-auto w-full relative max-w-screen-2xl px-6 md:px-16">
          
          <h1 className="text-3xl md:text-4xl font-bold text-theme-dark-green mt-8 uppercase leading-normal">
            Stay Informed: The Latest in Luxury Property & Investments
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-12">
            {properties.map((property, index) => (
              <BlogItem key={index} {...property} />
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

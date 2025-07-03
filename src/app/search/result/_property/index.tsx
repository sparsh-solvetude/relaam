"use client";

import React, { useEffect, useState } from "react";
import { Item } from "@/common/elements/property/item";
import { Filter } from "../_filter";

export const Property = ({}: any) => {
  const [showFilter, setShowFilter] = useState(false);
  return (
    <>
      {showFilter && <Filter setShowFilter={setShowFilter} />}
      <div className="w-full py-8 md:py-12 bg-[#F8F8F7]">
        <div className=" m-auto w-full relative max-w-screen-2xl px-6 md:px-16">
          <div className="flex items-center justify-between mt-4 rounded-full w-full p-2 bg-[#ffffff] shadow-md border border-[#9f3517] max-w-xl mx-auto">
            {/* Location */}
            <div className="flex flex-col items-start justify-start gap-1 w-auto md:w-1/4 px-3 py-1 border-r border-[#d9b99b]">
              <label htmlFor="location" className="text-xs text-black px-1">
                Location
              </label>
              {/* Select */}
              <select
                name="location"
                id="location"
                className="w-full text-theme-red px-0 text-sm bg-transparent focus:outline-none focus:ring-0 focus:border-none"
              >
                <option value="1">Location 1</option>
                <option value="2">Location 2</option>
                <option value="3">Location 3</option>
              </select>
            </div>
                  <div className="flex flex-col items-start justify-start gap-1 w-auto md:w-1/4  px-3 py-1 border-r border-[#d9b99b]">
                <label htmlFor="location" className="text-xs text-black px-1 ">
                 Price
                </label>
                {/* Select */}
                <select
                  name="location"
                  id="location"
                  className="w-full text-theme-red px-0 text-sm bg-transparent focus:outline-none focus:ring-0 focus:border-none"
                >
                  <option value="1">AED min - AED max</option>
                  <option value="2">AED min - AED max</option>
                  <option value="3">AED min - AED max</option>
                </select>
              </div>
            {/* Price */}
            {/* <div className="hidden md:flex flex-col items-start justify-start gap-1 w-1/4 border-r border-cream px-3 py-1">
              <label htmlFor="location" className="text-xs text-gray-500 px-1">
                Price
              </label>
              <div className="px-1 text-xs">AED min - AED max</div>
            </div> */}
            {/* Property Type */}
            <div className="hidden md:flex flex-col items-start justify-start gap-1 w-1/4 px-3 py-1 border-r border-[#d9b99b]">
              <label htmlFor="location" className="text-xs text-gray-500 px-1">
                Property Type
              </label>
              {/* Select */}
              <select
                name="location"
                id="location"
                className="w-full px-0 text-sm bg-transparent focus:outline-none focus:ring-0 focus:border-none"
              >
                <option value="1">Off Plan</option>
                <option value="2">Type 2</option>
                <option value="3">Type 3</option>
              </select>
            </div>
                          <div className="hidden md:flex flex-col items-start justify-start gap-1 w-1/4 px-3 py-1 ">
                <label
                  htmlFor="location"
                  className="text-xs text-gray-500 px-1"
                >
                  Number of Bedrooms
                </label>
                {/* Select */}
                <select
                  name="location"
                  id="location"
                  className="w-full px-0 text-sm bg-transparent focus:outline-none focus:ring-0 focus:border-none"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            {/* Search btn */}
            <button className="bg-[#9f3517] text-white px-4 py-4 w-auto md:w-1/4 h-full rounded-full font-playfair uppercase">
              Search
            </button>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-theme-dark-green mt-16 uppercase leading-normal">
            Luxury Homes Business Bay, Dubai
          </h1>
          <div className="flex items-end justify-end md:justify-between gap-4 mt-4">
            <div className="text-[#6F6F6F] text-sm font-medium hidden md:block">
              1025+ Properties
            </div>
            <div className="flex items-center justify-end gap-2">
              <button className="text-[#6F6F6F] text-sm flex items-center gap-4 bg-white py-3 px-6 rounded-full border border-[#ECECEC]">
                Sort
                <img src="/icons/sort.svg" alt="down" className="w-5 h-5" />
              </button>
              <button
                className="text-[#6F6F6F] text-sm flex items-center gap-4 bg-white py-3 px-6 rounded-full border border-[#ECECEC]"
                onClick={() => setShowFilter(true)}
              >
                Filter
                <img src="/icons/filter.svg" alt="filter" className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((index) => (
              <Item
                key={index}
                image="/images/burj-khalifa-view.jpg"
                slug="property-1"
                name="Luxury Villa in Dubai"
                location="Dubai, UAE"
                price="AED 5,000,000"
              />
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

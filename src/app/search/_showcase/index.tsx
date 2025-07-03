"use client";

import { Booking } from "@/common/elements/booking";
import React, { useEffect, useState } from "react";

const slides: any = [
  {
    attributes: {
      url: "/images/search-hero.jpg",
    },
  },
  {
    attributes: {
      url: "/images/about-hero.jpg",
    },
  },
];

export const Showcase = ({ title, description }: any) => {
  const [currentSlide, currentSlideSet] = useState(0);
  const [show, showSet] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      currentSlideSet((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  // the required distance between touchStart and touchEnd to be detected as a swipe
  const minSwipeDistance = 30;

  const onTouchStart = (e: any) => {
    setTouchEnd(null); // otherwise the swipe is fired even with usual touch events
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: any) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    let distance = touchStart - touchEnd;
    // check swipe is within the min distance
    if (
      Math.abs(distance) <= minSwipeDistance &&
      Math.abs(distance) > -minSwipeDistance
    )
      return;

    // swipe left
    if (distance > minSwipeDistance) {
      currentSlideSet((currentSlide - 1 + slides.length) % slides.length);
    } else if (distance < -minSwipeDistance) {
      // swipe right
      currentSlideSet((currentSlide + 1) % slides.length);
    }
  };

  return (
    <div
      className="h-[450px] md:h-[500px] w-full relative"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* <video
        src={
          process.env.NEXT_PUBLIC_STRAPI_URL +
          slides[currentSlide]?.attributes?.url
        }
        autoPlay
        loop
        muted
        playsInline
        className="h-[500px] w-full object-cover"
      /> */}
      <img
        // src="/images/search-hero.jpg"
        src={slides[currentSlide]?.attributes?.url}
        alt="banner"
        className="h-[450px] md:h-[500px] w-full object-cover"
      />
      {/* <div className="absolute top-0 left-0 w-full h-[450px] md:h-[500px] bg-white opacity-70"></div> */}
      <div className="absolute top-0 left-0 w-full h-[450px] md:h-[500px]">
        <div className="max-w-4xl mx-auto px-6 sm:px-12 flex flex-col items-center justify-center h-[450px] md:h-[500px] pt-20 text-black">
          <h1 className="text-xl md:text-3xl font-playfair text-white px-8 md:px-0 text-center font-bold">
            Explore the World’s Finest Properties
          </h1>
          {/* Searc box */}
          <div className="flex items-center justify-between mt-4 bg-white rounded-full w-full p-2">
            {/* Location */}
            <div className="flex flex-col items-start justify-start gap-1 w-auto md:w-1/4 border-none md:border-r border-cream px-3 py-1">
              <label htmlFor="location" className="text-xs text-black px-1">
                Location
              </label>
              {/* Select */}
              <select
                name="location"
                id="location"
                className="w-full text-theme-red px-0 text-sm"
              >
                <option value="1">Location 1</option>
                <option value="2">Location 2</option>
                <option value="3">Location 3</option>
              </select>
            </div>
            {/* Price */}
            <div className="hidden md:flex flex-col items-start justify-start gap-1 w-1/4 border-r border-cream px-3 py-1">
              <label htmlFor="location" className="text-xs text-gray-500 px-1">
                Price
              </label>
              <div className="px-1 text-xs">AED min - AED max</div>
            </div>
            {/* Property Type */}
            <div className="hidden md:flex flex-col items-start justify-start gap-1 w-1/4 px-3 py-1">
              <label htmlFor="location" className="text-xs text-gray-500 px-1">
                Property Type
              </label>
              {/* Select */}
              <select
                name="location"
                id="location"
                className="w-full px-0 text-sm"
              >
                <option value="1">Off Plan</option>
                <option value="2">Type 2</option>
                <option value="3">Type 3</option>
              </select>
            </div>
            {/* Search btn */}
            <button className="bg-cream text-theme-dark-green px-4 py-4 w-auto md:w-1/4 h-full rounded-full font-playfair uppercase">
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 w-full">
        <div className="flex space-x-2 items-center justify-center">
          {slides.map((_: any, index: any) => (
            <div
              key={index}
              className={`w-10 bg-white cursor-pointer  ${
                currentSlide === index ? "h-1 opacity-100" : "h-0.5 opacity-70"
              }`}
              onClick={() => currentSlideSet(index)}
            ></div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2 text-white mt-3 text-xs md:text-md w-full">
          <span className="font-playfair text-lg">Emirates Hills Dubai</span>
          <span>AED 35,000,000</span>
          <img
            src="/icons/angle-right-dark-green.svg"
            alt="arrow"
            className="w-5 h-5 bg-cream rounded-full p-1"
          />
        </div>
      </div>
      {show && <Booking showSet={showSet} />}
    </div>
  );
};

"use client";

import React, { useEffect, useState } from "react";

export const Showcase = ({ slides = [], title, description }: any) => {
  const [currentSlide, currentSlideSet] = useState(0);
  const [show, showSet] = useState(false);

  // change slide every 5 seconds
  useEffect(() => {
  if (!slides || slides.length === 0) return;

  const interval = setInterval(() => {
    currentSlideSet((currentSlide + 1) % slides.length);
  }, 5000);

  return () => clearInterval(interval);
}, [currentSlide, slides]);


  return (
    <div className="h-[400px] md:h-screen w-full relative">
      <img
        src="/images/career-hero.jpg"
        alt="banner"
        className="h-[400px] md:h-screen w-full object-cover"
      />
      <div className="absolute inset-0 w-full h-full bg-black/40"></div>
      <div className="absolute top-0 left-0 w-full h-[400px] md:h-screen">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-12 flex flex-col items-center justify-center h-[400px] md:h-screen pt-20 text-white text-center">
          <p className="text-xl w-full lg:w-2/5 leading-tight mb-3">
            Career
          </p>
          <h1 className="text-2xl md:text-4xl font-bold text-theme-dark-green md:leading-base w-full lg:w-2/5  font-playfair">
            Build Your Future with RELAAM
          </h1>
          <p className="text-md mt-4 md:mt-6 w-full lg:w-2/5 leading-tight items-center gap-2 hidden md:flex">
            Join a team that's redefining real estate in the UAE. At RELAAM, we empower driven professionals with the tools, training, and opportunities to grow their careers and make a real impact in one of the region's fastest-growing industries.
          </p>
        </div>
      </div>
    </div>
  );
};

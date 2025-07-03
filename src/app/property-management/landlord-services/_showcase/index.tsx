"use client";

import React, { useEffect, useState } from "react";

export const Showcase = ({ slides, title, description }: any) => {
  const [currentSlide, currentSlideSet] = useState(0);
  const [show, showSet] = useState(false);

  // change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      currentSlideSet((currentSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="h-[500px] md:h-screen w-full">
      <img
        src="/images/handshake.jpg"
        alt="banner"
        className="h-[500px] md:h-screen w-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-70"></div>
      <div className="absolute top-0 left-0 w-full h-[500px] md:h-screen">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-12 flex flex-col items-center justify-center h-[500px] md:h-screen pt-20 text-white text-center">
          {/* <p className="text-xl w-full lg:w-1/2 leading-tight uppercase mb-3">
            Explore
          </p> */}
          <h1 className="text-2xl md:text-6xl font-bold text-white md:leading-base w-full lg:w-1/2 uppercase font-playfair">
            Landlord Services
          </h1>
          <p className="text-lg w-full lg:w-1/2 leading-tight mt-5 hidden md:block">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            incididunt ut labore etLorem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

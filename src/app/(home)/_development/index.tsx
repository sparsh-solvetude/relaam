"use client";

import React, { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/burj-al-arab.jpg",
    name: "Burj Al Arab",
  },
  {
    image: "/images/white-house.jpg",
    name: "Palm Jumeirah Villa",
  },
  {
    image: "/images/modern-house.jpg",
    name: "Burj Khalifa View Residence",
  },
];

export const Development = () => {
  const [currentSlide, currentSlideSet] = useState(0);
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
    <div className="bg-dark-2">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 py-28 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-4">
        <div
          className="relative h-[26rem] md:h-[36rem]"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <img
            src={slides[currentSlide].image}
            alt="expert"
            className="w-full h-full object-cover rounded-xl"
          />
          <div className="absolute top-0 left-0 w-full h-full md:opacity-0 hover:opacity-100 bg-opacity-0 hover:bg-opacity-40 rounded-xl bg-gradient-to-b from-transparent to-dark flex flex-col items-center justify-end transition-all duration-300">
            <h5 className="text-white text-2xl font-bold mb-4">
              {slides[currentSlide].name}
            </h5>
            <div className="flex justify-center space-x-2 mb-6">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 bg-white rounded-full cursor-pointer hover:bg-gray ${
                    currentSlide === index ? "w-10" : "w-2"
                  }`}
                  onClick={() => currentSlideSet(index)}
                ></div>
              ))}
            </div>
          </div>
        </div>
        <div className="px-8 md:px-16 text-white flex flex-col justify-center items-center text-center gap-6">
          <h2 className="text-5xl font-bold mb-6 md:mb-12">MIRA Development</h2>
          <p className="font-light opacity-80">
            Discover lucrative opportunities in property investment. Maximize
            returns with carefully selected, high-potential properties. Start
            investing today! Maximize returns with carefully selected,
            high-potential properties. Start investing today!
          </p>
          <div className="flex items-center gap-20 mt-10 md:mt-16">
            <div className="flex flex-col items-center gap-2">
              <img src="/icons/growth.svg" alt="arrow" className="h-10" />
              <p className="text-lg font-bold">Fast-Growing</p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <img src="/icons/handshake.svg" alt="arrow" className="h-10" />
              <p className="text-lg font-bold">Well-Connected</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

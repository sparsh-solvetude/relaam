"use client";

import { Booking } from "@/common/elements/booking";
import React, { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  easeInOut,
  easeOut,
  easeIn,
} from "framer-motion";

const slides = [
  "/videos/showcase/1.mp4",
  "/videos/showcase/2.mp4",
  "/videos/showcase/4.mp4",
  "/videos/showcase/5.mp4",
];

export const Showcase = () => {
  const [currentSlide, currentSlideSet] = useState(0);
  const [show, showSet] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

 

  useEffect(() => {
  const interval = setInterval(() => {
    currentSlideSet(prev => (prev + 1) % slides.length);
  }, 5000);
  return () => clearInterval(interval);
}, [slides.length]);

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
      className="h-svh w-full"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <motion.video
        src={slides[currentSlide]}
        autoPlay
        loop
        muted
        playsInline
        className="h-svh w-full object-cover "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: easeInOut }}
      />
      <motion.div
        className="absolute top-0 left-0 w-full h-svh bg-black opacity-70"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.5, ease: easeInOut }}
      ></motion.div>
      <div className="absolute top-0 left-0 w-full h-svh">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 flex flex-col items-start justify-center h-svh pt-20 text-white">
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white md:leading-base "
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1, duration: 0.5, ease: easeInOut }}
          >
            Smart <br />
            Property <br />
            Investments
          </motion.h1>
          <motion.p
            className="text-lg mt-8 w-full lg:w-2/5 leading-tight"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: easeInOut }}
          >
            Discover lucrative opportunities in property investment. Maximize
            returns with carefully selected, high-potential properties. Start
            investing today!
          </motion.p>
          <motion.button
            className="bg-[#9f3323] text-white px-8 py-2 mt-8 rounded-full  text-lg"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5, ease: easeInOut }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            onClick={() => showSet(true)}
          >
            Contact Us
          </motion.button>
        </div>
      </div>

      <motion.div
        className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5, ease: easeInOut }}
      >
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 bg-gray rounded-full cursor-pointer hover:bg-white ${
              currentSlide === index ? "w-10" : "w-2"
            }`}
            onClick={() => currentSlideSet(index)}
          ></div>
        ))}
      </motion.div>
      {show && <Booking showSet={showSet} />}
    </div>
  );
};

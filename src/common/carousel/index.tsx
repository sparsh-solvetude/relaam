"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, easeInOut } from "framer-motion";

interface DynamicCarouselProps {
  slides: string[];
  title: string;
  subtitle: string;
}

export const Carousel = ({ slides, title, subtitle }: DynamicCarouselProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  const contentRef = useRef(null);
  const isInView = useInView(contentRef, { amount: 0.6, once: false });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const minSwipeDistance = 30;

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (touchStart === null || touchEnd === null) return;
    const distance = touchStart - touchEnd;
    if (Math.abs(distance) < minSwipeDistance) return;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else {
      prevSlide();
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      ref={contentRef}
      className="relative w-full h-screen overflow-hidden  flex flex-col items-center"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <motion.div
        key={slides[currentSlide]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: easeInOut }}
        className="w-full h-full"
      >
        <Image
          src={slides[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />

      {/* Title & Subtitle */}
      <div className="absolute inset-0 flex flex-col justify-center z-10 text-white px-5 md:px-10">
        <h1 className="SemiBold text-white text-3xl font-bold md:leading-base">
          {title}
        </h1>
        <h1 className="SemiBold text-white mt-2 text-6xl font-bold md:leading-base">
          {subtitle}
        </h1>
      </div>

      {/* Dot Navigation */}
      <motion.div
        className="absolute z-10 bottom-6 md:bottom-10  transform -translate-x-1/2 flex space-x-2"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5, ease: easeInOut }}
      >
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-2 bg-gray rounded-full hover:bg-white cursor-pointer ${
              currentSlide === index ? "w-10" : "w-2"
            }`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </motion.div>
    </div>
  );
};

"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, easeInOut } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      className="relative w-full h-screen overflow-hidden"
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

      {/* Overlay with bg-black and opacity-70 */}
      <div className="absolute inset-0 bg-black opacity-30 z-0" />


      <div className="absolute inset-0 flex flex-col  justify-center z-10 text-white px-10 ">
        <h1 className="SemiBold text-white text-3xl font-bold md:leading-base">{title}</h1>
        <h1 className="SemiBold  text-white  mt-2 text-6xl font-bold md:leading-base">{subtitle}</h1>
      </div>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center space-x-4 z-10">
        <button
          onClick={prevSlide}
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="bg-black/50 text-white p-2 rounded-full hover:bg-black/70"
          aria-label="Next Slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

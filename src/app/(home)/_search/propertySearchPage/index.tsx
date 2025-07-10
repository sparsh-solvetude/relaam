"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const transition = {
  duration: 0.8,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

const PropertySearchPage = ({
  searchRef,
  disableAnimation = false,
  isInModal = false,
  isModal = false,
}: {
  searchRef?: React.RefObject<HTMLElement>;
  disableAnimation?: boolean;
  isInModal?: boolean;
  isModal?: boolean;
}) => {
  const fallbackRef = useRef(null);
  const targetRef = searchRef ?? fallbackRef;

  const isInView = useInView(targetRef, {
    once: false,
    margin: "-100px 0px",
  });

  const shouldAnimate = !disableAnimation && isInView;
  const animationProps = (delay: number) =>
    !isModal
      ? {
          initial: { opacity: 0, y: 40 },
          animate: shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
          transition: { ...transition, delay },
        }
      : {};

  return (
    <div
      ref={targetRef as React.RefObject<HTMLDivElement>}
      className="relative col-span-1 md:col-span-3 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8 w-full min-h-[250px]"
    >
      {!isInModal && (
        <>
          <img
            src="/images/bg-pattern.jpg"
            alt="Hero"
            className="w-full h-full object-cover rounded-lg shadow-lg absolute inset-0"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg" />
        </>
      )}

      <div className="z-30 bg-transparent w-full max-w-6xl">
        <motion.h2
          className="text-xl md:text-3xl lg:text-4xl font-bold text-white text-center md:text-left"
          {...animationProps(0.1)}
        >
          Property Search
        </motion.h2>

        <motion.p
          className="text-sm md:text-base lg:text-md text-white mt-2 text-center md:text-left"
          {...animationProps(0.2)}
        >
          Find your dream home today
        </motion.p>

        {/* Mobile Layout */}
        <motion.div
          className="block md:hidden mt-4 p-4 rounded-xl bg-white shadow-md border border-[#9f3517] space-y-3"
          {...animationProps(0.3)}
        >
          <div className="flex flex-col">
            <label htmlFor="location" className="text-xs text-black mb-1">
              Location
            </label>
            <select
              id="location"
              className="w-full text-theme-red px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none"
            >
              <option value="1">Location 1</option>
              <option value="2">Location 2</option>
              <option value="3">Location 3</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="property" className="text-xs text-black mb-1">
              Property Type
            </label>
            <select
              id="property"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded focus:outline-none"
            >
              <option value="1">Off Plan</option>
              <option value="2">Type 2</option>
              <option value="3">Type 3</option>
            </select>
          </div>

          <motion.button
            className="w-full bg-[#9f3323] text-white px-4 py-3 rounded-md font-semibold uppercase text-sm"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            Search
          </motion.button>
        </motion.div>

        {/* Desktop Layout */}
        <motion.div
          className="hidden md:flex items-center justify-between mt-4 rounded-full w-full p-2 bg-white shadow-md border border-[#9f3517]"
          {...animationProps(0.3)}
        >
          {/* Location */}
          <div className="flex flex-col items-start gap-1 w-auto md:w-1/4 border-none md:border-r border-cream px-3 py-1">
            <label htmlFor="location" className="text-xs text-black px-1">
              Location
            </label>
            <select
              id="location"
              className="w-full text-theme-red px-0 text-sm bg-transparent focus:outline-none"
            >
              <option value="1">Location 1</option>
              <option value="2">Location 2</option>
              <option value="3">Location 3</option>
            </select>
          </div>

          {/* Property Type */}
          <div className="hidden md:flex flex-col items-start gap-1 w-1/4 px-3 py-1">
            <label htmlFor="property" className="text-xs text-gray-500 px-1">
              Property Type
            </label>
            <select
              id="property"
              className="w-full px-0 text-sm bg-transparent focus:outline-none"
            >
              <option value="1">Off Plan</option>
              <option value="2">Type 2</option>
              <option value="3">Type 3</option>
            </select>
          </div>

          {/* Button */}
          <motion.button
            className="bg-[#9f3323] text-white px-4 py-4 w-auto md:w-1/4 h-full rounded-full font-playfair uppercase"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            Search
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default PropertySearchPage;

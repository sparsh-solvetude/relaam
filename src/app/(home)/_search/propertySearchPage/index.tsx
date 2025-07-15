"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const transition = {
  duration: 0.8,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

const fadeOnlyProps = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { ...transition, delay },
});

const hoverProps = {
  whileHover: { scale: 1.05 },
  transition: { duration: 0.2 },
};

const Dropdown = ({
  id,
  label,
  options,
  animation,
}: {
  id: string;
  label: string;
  options: string[];
  animation?: any;
}) => (
  <motion.div className="flex flex-col" {...animation}>
    <label htmlFor={id} className="text-lg text-black mb-1 ml-3">
      {label}
    </label>
    <div className="relative w-full">
      <select
        id={id}
        className="w-full text-theme-red px-3 py-3 text-sm border border-gray-300 rounded-full focus:outline-none appearance-none pr-10"
      >
        {options.map((option, i) => (
          <option key={i} value={i + 1}>
            {option}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
        <svg
          className="w-4 h-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  </motion.div>
);

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

  const shouldAnimate = !disableAnimation && (isInView || isModal);

  const animationProps = (delay: number) =>
    disableAnimation
      ? {}
      : {
          initial: { opacity: 0, y: 40 },
          animate: shouldAnimate ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 },
          transition: { ...transition, delay },
        };

  return (
    <div
      ref={targetRef as React.RefObject<HTMLDivElement>}
      className="relative col-span-1 md:col-span-3 flex items-center justify-center py-6 px-0 sm:px-6 lg:px-8 w-full md:h-auto min-h-[250px]"
    >
      {!isInModal && (
        <>
          <img
            src="/images/bg-pattern.jpg"
            alt="Hero"
            className="hidden md:block w-full h-full object-cover rounded-lg shadow-lg absolute inset-0"
          />
          <div className="hidden md:block absolute inset-0 bg-black opacity-50 rounded-lg" />
        </>
      )}

      <div className="z-30 bg-transparent w-full max-w-6xl">
        <motion.h2
          className="lg:text-4xl font-bold text-[#9f3323] text-4xl md:text-xl mt-5 md:mt-0 md:text-white text-center md:text-left"
          {...animationProps(0.4)}
        >
          Property Search
        </motion.h2>

        <motion.p
          className="lg:text-md text-black text-lg md:text-sm md:text-white mt-2 text-center md:text-left"
          {...animationProps(0.5)}
        >
          Find your dream home today
        </motion.p>

        {/* Mobile Layout */}
        <div className="block md:hidden mt-10 pt-5 px-4 rounded-xl space-y-4">
          <Dropdown
            id="location-mobile"
            label="Location"
            options={["Location 1", "Location 2", "Location 3"]}
            animation={animationProps(0.3)}
          />
          <Dropdown
            id="price-mobile"
            label="Price"
            options={[
              "AED min - AED max",
              "AED min - AED max",
              "AED min - AED max",
            ]}
            animation={animationProps(0.3)}
          />
          <Dropdown
            id="type-mobile"
            label="Property Type"
            options={["Off Plan", "Type 2", "Type 3"]}
            animation={animationProps(0.3)}
          />
          <Dropdown
            id="bedrooms-mobile"
            label="Number of Bedrooms"
            options={["1", "2", "3"]}
            animation={animationProps(0.4)}
          />
          <motion.button
            style={{ marginTop: "60px" }}
            className="w-full bg-[#9f3323] text-white px-4 py-4 rounded-full font-semibold uppercase text-sm"
            {...hoverProps}
            {...animationProps(0.5)}
          >
            Search
          </motion.button>
        </div>

        {/* Desktop Layout */}
        <motion.div
          className="hidden md:flex items-center justify-between mt-4 rounded-full w-full p-2 bg-white shadow-md border border-[#9f3517]"
          {...animationProps(0.3)}
        >
          {/* Location */}
          <div className="relative flex flex-col items-start gap-1 w-1/4 px-3 py-1">
            <label
              htmlFor="location-desktop"
              className="text-lg text-black px-1"
            >
              Location
            </label>
            <div className="relative w-full">
              <select
                id="location-desktop"
                className="w-full text-theme-red px-0 text-sm bg-transparent focus:outline-none appearance-none pr-10"
              >
                <option value="1">Location 1</option>
                <option value="2">Location 2</option>
                <option value="3">Location 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center">
                <svg
                  className="w-4 h-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Property Type */}
          <div className="relative hidden md:flex flex-col items-start gap-1 w-1/4 px-3 py-1">
            <label
              htmlFor="type-desktop"
              className="text-xs text-gray-500 px-1"
            >
              Property Type
            </label>
            <div className="relative w-full">
              <select
                id="type-desktop"
                className="w-full text-sm bg-transparent focus:outline-none appearance-none pr-10"
              >
                <option value="1">Off Plan</option>
                <option value="2">Type 2</option>
                <option value="3">Type 3</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center">
                <svg
                  className="w-4 h-4 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <button className="bg-[#9f3323] text-white px-4 py-4 w-auto md:w-1/4 h-full rounded-full font-playfair uppercase">
            Search
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PropertySearchPage;

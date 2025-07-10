


"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const transition = {
  duration: 0.8,
  ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
};

const OurPortalsPage = ({
  searchRef,
  isModal = false,
}: {
  searchRef?: React.RefObject<HTMLElement>;
  isModal?: boolean;
}) => {
  const fallbackRef = useRef(null);
  const targetRef = searchRef ?? fallbackRef;

  const isInView = useInView(targetRef, { once: false, margin: "-100px 0px" });
  const shouldAnimate = isInView;

  const animationProps = (delay = 0) =>
    !isModal
      ? {
          initial: { opacity: 0, y: 40 },
          animate: shouldAnimate
            ? { opacity: 1, y: 0 }
            : { opacity: 0, y: 40 },
          transition: { ...transition, delay },
        }
      : {};

  const fadeOnlyProps = (delay = 0) =>
    !isModal
      ? {
          initial: { opacity: 0 },
          animate: shouldAnimate ? { opacity: 1 } : { opacity: 0 },
          transition: { ...transition, delay },
        }
      : {};

  const hoverProps = !isModal
    ? {
        whileHover: { scale: 1.05 },
        transition: { duration: 0.2 },
      }
    : {};

  return (
    <div
      ref={targetRef as React.RefObject<HTMLDivElement>}
      className="relative col-span-2 flex items-center justify-center py-6 px-8 w-full"
    >
      <img
        src="/images/bg-pattern.jpg"
        alt="Hero"
        className="w-full h-full object-cover rounded-lg shadow-lg absolute inset-0"
      />
      <div className="absolute inset-0 bg-black opacity-60 rounded-lg" />

      <div className="z-30 bg-transparent w-full">
        <motion.h2
          className="text-2xl md:text-3xl lg:text-4xl font-bold text-white"
          {...animationProps(0.4)}
        >
          Our Portals
        </motion.h2>

        <motion.p
          className="text-sm md:text-base lg:text-md text-white mt-2"
          {...animationProps(0.5)}
        >
          Manage your property needs online with ADCP Tenant and Landlord
          Portals
        </motion.p>

        <motion.div
          className="flex items-center justify-between gap-3 mt-4 rounded-full w-full flex-col md:flex-row"
          {...animationProps(0.6)}
        >
          <motion.button
            className="bg-[#9f3323] text-white px-3 py-3 w-full md:w-1/2 h-full rounded-lg font-bold uppercase"
            {...hoverProps}
          >
            Tenant Portal
          </motion.button>

          <motion.button
            className="bg-white border border-[#9f3323] text-[#9f3323] px-3 py-3 w-full md:w-1/2 h-full rounded-lg font-bold uppercase"
            {...hoverProps}
          >
            Landlord Portal
          </motion.button>
        </motion.div>

        <motion.div
          className="flex items-center justify-between flex-wrap mt-4"
          {...fadeOnlyProps(0.7)}
        >
          <div className="text-xs text-white mt-2">
            <a href="#" className="hover:underline text-[#ffbba9]">
              Forgot Password?
            </a>
          </div>
          <div className="text-xs text-white mt-2">
            Not a current user?{" "}
            <a href="#" className="hover:underline text-[#ffbba9]">
              Click here to register
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurPortalsPage;

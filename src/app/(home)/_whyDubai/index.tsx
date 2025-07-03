"use client";

import { Booking } from "@/common/elements/booking";
import React, { useState } from "react";

export const WhyDubai = () => {
  const [show, showSet] = useState(false);

  return (
    <div className="bg-dark-2 relative">
      <div className="relative md:absolute h-full left-0 top-0 w-full z-10">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 py-28 grid grid-cols-1 md:grid-cols-2 gap-20">
          <div className=" text-white flex flex-col justify-center items-start gap-2">
            <h2 className="text-5xl font-bold mb-6 leading-base">
              Why Dubai Stands Unrivaled?
            </h2>
            <p className="font-light opacity-80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              aliquet elit et nisi tincidunt maximus. Duis at facilisis massa.
              Vestibulum ut libero id libero varius pharetra vitae vitae massa.
              Nullam vulputate fringilla tellus.
            </p>
            <button
              className="bg-[#9f3517] text-white px-8 py-2 mt-8 rounded-lg font-semibold text-lg"
              onClick={() => showSet(true)}
            >
              Start Your Journey
            </button>
          </div>
          <img
            src="/images/burj-al-arab.jpg"
            alt="expert"
            className="w-full h-[20rem] md:h-[32rem] object-cover rounded-xl -pr-32 md:opacity-0"
          />
        </div>
      </div>
      <div className="w-full py-28 grid-cols-1 md:grid-cols-2 gap-10 hidden md:grid">
        <div className=" text-white flex flex-col justify-center items-start gap-2"></div>
        <img
          src="/images/burj-al-arab.jpg"
          alt="expert"
          className="w-full h-[20rem] md:h-[32rem] object-cover rounded-3xl rounded-r-none"
        />
      </div>
      {show && <Booking showSet={showSet} />}
    </div>
  );
};

"use client";

import { Booking } from "@/common/elements/booking";
import React, { useState } from "react";

export const Expert = () => {
  const [show, showSet] = useState(false);

  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 pt-20 pb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <div className="w-full h-full">
            <img
              src="/images/white-house.jpg"
              alt="expert"
              className="w-full h-56 md:h-96 object-cover rounded-xl"
            />
          </div>
          {/* <div className="bg-white absolute right-0 bottom-0 p-4 rounded-2xl flex gap-4 shadow-lg border border-[#9f351773]">
            <img
              src="/images/seller-avatar.jpg"
              alt="house"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="flex flex-col text-black">
              <h3 className="font-bold text-xl">Alice Charmaine</h3>
              <p className="text-xs font-light opacity-60">Real Estate Agent</p>
              <a
                className="flex gap-2 mt-2 items-center"
                href="tel:+1234567890"
              >
                <img src="/icons/call.svg" alt="star" className="h-4" />
                <p className="text-xs font-bold">+1 234 567 890</p>
              </a>
              <a
                className="flex gap-2 mt-2 items-center"
                href="mailto:alice@relaam.ae"
              >
                <img src="/icons/mail.svg" alt="star" className="h-4" />
                <p className="text-xs font-bold">alice@relaam.ae</p>
              </a>
            </div>
          </div> */}
        </div>
        <div className="px-0 md:px-4 text-black flex flex-col justify-center items-start">
          <h2 className="text-5xl font-bold mb-6 leading-base">
            AD One
          </h2>
          <p className="font-light opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
            elit et nisi tincidunt maximus. Duis at facilisis massa. Vestibulum
            ut libero id libero varius pharetra vitae vitae massa. Nullam
            vulputate fringilla tellus.
          </p>
          <button
            className="bg-[#9f3517] text-white px-8 py-2 mt-10 rounded-lg font-bold text-lg"
            onClick={() => showSet(true)}
          >
            View Details
          </button>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 pt-10 pb-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="px-0 md:px-4 text-black flex flex-col justify-center items-start">
          <h2 className="text-5xl font-bold mb-6 leading-base">
            Vera Building
          </h2>
          <p className="font-light opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
            elit et nisi tincidunt maximus. Duis at facilisis massa. Vestibulum
            ut libero id libero varius pharetra vitae vitae massa. Nullam
            vulputate fringilla tellus.
          </p>
          <button
            className="bg-[#9f3517] text-white px-8 py-2 mt-10 rounded-lg font-bold text-lg"
            onClick={() => showSet(true)}
          >
            View Details
          </button>
        </div>
        <div className="relative">
          <div className="w-full h-full">
            <img
              src="/images/modern-house.jpg"
              alt="expert"
              className="w-full h-56 md:h-96 object-cover rounded-xl"
            />
          </div>
          {/* <div className="bg-white absolute left-0 bottom-0 p-4 rounded-2xl flex gap-4 shadow-lg border border-[#9f351773]">
            <img
              src="/images/seller-avatar.jpg"
              alt="house"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="flex flex-col text-black">
              <h3 className="font-bold text-xl">Alice Charmaine</h3>
              <p className="text-xs font-light opacity-60">Real Estate Agent</p>
              <a
                className="flex gap-2 mt-2 items-center"
                href="tel:+1234567890"
              >
                <img src="/icons/call.svg" alt="star" className="h-4" />
                <p className="text-xs font-bold">+1 234 567 890</p>
              </a>
              <a
                className="flex gap-2 mt-2 items-center"
                href="mailto:alice@relaam.ae"
              >
                <img src="/icons/mail.svg" alt="star" className="h-4" />
                <p className="text-xs font-bold">alice@relaam.ae</p>
              </a>
            </div>
          </div> */}
        </div>
      </div>

      {/* {show && <Booking showSet={showSet} />} */}
    </div>
  );
};

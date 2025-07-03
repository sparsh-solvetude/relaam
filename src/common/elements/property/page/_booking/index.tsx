"use client";

import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import PhoneNumber from "./phone";

export const PropertyBooking = () => {
  const [phone, setPhone] = useState("");

  return (
    <div className="px-6 sm:px-12">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 py-28 flex items-center md:flex-row gap-28 ">
        <div className="relative w-1/2 hidden md:block">
          <img
            src="/images/team-meeting.jpg"
            alt="expert"
            className="w-full h-96 object-cover rounded-xl"
          />
        </div>
        <div className="text-white flex flex-col justify-center items-start w-full md:w-1/2 pr-0 md:pr-16">
          <h2 className="text-4xl font-bold mb-4">
          Talk to Our Property Consultant
          </h2>
          <p className="font-light opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
            elit et nisi tincidunt maximus. Duis at facilisis massa. Vestibulum
            ut libero id libero varius
          </p>
          <div className="flex flex-col items-start gap-6 mt-10 w-full">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-dark-3 px-4 py-3 rounded-lg"
            />
            <input
              type="text"
              placeholder="Your Email"
              className="w-full bg-dark-3 px-4 py-3 rounded-lg"
            />
            <PhoneNumber />
            <button className="bg-[#9f3517] text-white px-8 py-2 mt-4 rounded-lg font-bold text-lg">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

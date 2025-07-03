import PhoneNumber from "@/app/(home)/_booking/phone";
import React, { useState } from "react";

export const Booking = ({ showSet }: any) => {
  const [phone, phoneSet] = useState("+971");

  return (
    // pop up for booking
    <div className="fixed left-0 top-0 w-screen h-dvh bg-black bg-opacity-50 flex items-center justify-center z-50 p-0 sm:p-4">
      <div className="bg-dark text-white text-center w-full sm:w-[44rem] h-full sm:h-auto rounded-none sm:rounded-2xl px-6 sm:px-8 py-16 flex flex-col items-center justify-center border border-dark-2 relative shadow-2xl">
        <button
          className="absolute top-4 right-4"
          onClick={() => showSet(false)}
        >
          <img src="/icons/close.svg" alt="close" className="h-6" />
        </button>
        <h2 className="text-3xl md:text-4xl font-bold mb-3">
          Talk to Our Property Consultant
        </h2>
        <div className="flex flex-col items-center gap-6 mt-10 w-full px-0 md:px-10">
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
          <PhoneNumber
          // phone={phone} phoneSet={phoneSet}
          />
          <button className="bg-[#9f3517] text-white px-8 py-2 mt-4 rounded-lg font-bold text-lg">
            Start Your Journey
          </button>
        </div>
      </div>
    </div>
  );
};

"use client";

import React, { useState } from "react";
import { Download } from "../_download";

export const Payment = ({
  description,
  image,
  downPaymentPercentage,
  duringConstructionPercentage,
  onHandoverPercentage,
  docLink = null,
}: {
  description: string;
  image: string;
  downPaymentPercentage: number;
  duringConstructionPercentage: number;
  onHandoverPercentage: number;
  docLink?: string | null;
}) => {
  const [showModal, showModalSet] = useState(false);

  return (
    <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 mb-28 text-white">
      <div className="flex items-center flex-col-reverse md:flex-row gap-12 md:gap-24 ">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Payment Plan</h2>
          <p className="font-light text-sm opacity-80">{description}</p>
          <div className="flex flex-col gap-6 mt-8 mb-1">
            <div className="bg-dark-2 p-2 rounded-full w-full flex items-center justify-start gap-4">
              <div className="bg-[#9f3517] flex items-center justify-center h-20 w-20 rounded-full text-2xl font-bold">
                {downPaymentPercentage}%
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-1">Down Payment</h4>
                <p className="font-light opacity-80">On Booking Date</p>
              </div>
            </div>
            <div className="bg-dark-2 p-2 rounded-full w-full flex items-center justify-start gap-4">
              <div className="bg-[#9f3517] flex items-center justify-center h-20 w-20 rounded-full text-2xl font-bold">
                {duringConstructionPercentage}%
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-1">During Construction</h4>
                <p className="font-light opacity-80">1st to 8th Installment</p>
              </div>
            </div>
            <div className="bg-dark-2 p-2 rounded-full w-full flex items-center justify-start gap-4">
              <div className="bg-[#9f3517] flex items-center justify-center h-20 w-20 rounded-full text-2xl font-bold">
                {onHandoverPercentage}%
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-1">On Handover</h4>
                <p className="font-light opacity-80">100% Completion</p>
              </div>
            </div>
          </div>
          {docLink && (
            <button
              className="bg-[#9f3517] text-white px-6 py-2 mt-8 rounded-lg font-bold text-lg flex items-center gap-2 justify-center"
              onClick={() => showModalSet(true)}
            >
              <img src="/icons/pdf.svg" alt="arrow" className="h-6" />
              Download Payment Plan
            </button>
          )}
        </div>
        <img
          src={image}
          alt="Pool View"
          className="w-full md:w-1/2 h-72 md:h-[44rem] rounded-xl object-cover"
        />
      </div>
      {showModal && (
        <Download
          showSet={showModalSet}
          title={"Download Payment Plan"}
          key="payment"
          docLink={docLink}
        />
      )}
    </div>
  );
};

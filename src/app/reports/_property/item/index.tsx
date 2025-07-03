"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export const ReportItem = ({ image, title, description, price }: any) => {
  return (
    <div className="w-full rounded-xl overflow-hidden border border-[#D9D9D9]">
      <div className="w-full bg-white relative ">
        <div className="w-7/12 relative">
          <img src="/icons/red-shape.svg" alt="shape" className="w-full" />
          <img
            src="/logo.webp"
            alt="logo"
            className="w-20 absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="w-full p-6">
          <div className="text-xs">2024</div>
          <div className="text-xl text-theme-dark-green font-bold mt-2 font-playfair uppercase">
            Monthly Report
          </div>
          <div className="text-xl text-theme-red uppercase">December</div>
          <img src="/images/report.jpg" alt="report" className="w-full mt-4" />
        </div>
      </div>
      <div className="w-full p-4 bg-[#F6F6F6]">
        <h3 className="text-md text-theme-dark-green leading-normal font-bold">
          Dubai Real Estate Report | November 2024
        </h3>
        <p className="mt-2 text-sm font-light text-[#A6A7AA]">02-08-2024</p>
        <button className="bg-white text-black text-sm font-bold border-2 border-black px-4 py-3 mt-4 flex items-center justify-center gap-3 w-full rounded-lg">
          Download Report
          <img src="/icons/download.svg" alt="download" className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

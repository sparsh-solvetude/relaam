"use client";

import clsx from "clsx";
import React, { useEffect, useState } from "react";

const setOne = [
  {
    title: "Purchase and sale of real estate",
    description:
      "Maximize your real estate investments with our buying and selling service. We offer accurate valuation, strategic consultation, and exclusive opportunities to meet your financial and operational goals.",
  },
  {
    title: "Subletting and assignment of lease",
    description:
      "Maximize your unused space with our subletting and lease assignment service. We support you throughout the process, from the initial verification of your lease to the careful selection of tenants or assignees, ensuring secure and compliant transactions.",
  },
  {
    title: "Financial analysis",
    description:
      "Make smart real estate choices with our financial analysis service. We compare all available options in present value to guide your business towards profitable decisions.",
  },
];

const setTwo = [
  {
    title: "Renegotiation and renewal of lease",
    description:
      "Optimize the terms of your current lease with our negotiation expertise. We analyze your contract in depth to identify opportunities and guarantee you the best possible terms.",
  },
  {
    title: "Market analysis",
    description:
      "Make informed decisions with our in-depth knowledge of the Quebec real estate market. We monitor trends and provide you with personalized strategic recommendations.",
  },
  {
    title: "Lease analysis",
    description:
      "Protect your interests with a thorough assessment of your lease. We identify critical clauses and propose adjustments to optimize your upcoming negotiations.",
  },
];

export const Explore = ({}: any) => {
  return (
    <div className="w-full py-16 px-0 md:px-16  bg-[#cbbda5]">
      <div className="text-md text-theme-dark-green bg-white uppercase w-32 font-playfair font-bold py-2 hidden md:flex items-center justify-center mb-12 rounded-full ">
        Services
      </div>
      <div className="text-md text-theme-dark-green bg-white uppercase w-32 font-playfair font-bold py-2 md:hidden flex items-center justify-center mb-6 rounded-full mx-auto">
        Services
      </div>

      <div className="flex items-start gap-10 md:gap-48 flex-col md:flex-row px-8 md:px-0">
        <div className="w-full md:w-6/12">
          <div className="w-full px-6 md:px-0 flex items-center justify-end">
            <div className="w-full">
              <h2 className="text-2xl md:text-3xl text-theme-dark-green uppercase font-extralight leading-normal text-center md:text-start">
                Complete support 
                <br /> in Real Estate
              </h2>
              <p className="mt-4 md:mt-8 text-sm md:text-lg font-light text-center md:text-start">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                incididunt ut labore etLorem ipsum dolor sit amet, consectetur
                adipiscing elit.
              </p>
            </div>
          </div>

          {/* Property */}
          {setOne.map((item, index) => (
            <div className="w-full flex flex-col items-center md:items-start justify-end mt-10 md:mt-16 md:text-start text-center">
              <img
                src="/images/explore/property-3.jpg"
                alt="property"
                className="w-full h-[370px] object-cover"
              />
              <div className="mt-6 md:mt-12">
                <h3 className="text-2xl md:text-3xl text-theme-dark-green leading-tight md:leading-normal font-playfair font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-md font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full md:w-7/12">
          {setTwo.map((item, index) => (
            <div
              className={clsx(
                "w-full flex flex-col items-center md:items-start justify-end  md:text-start text-center ",
                { "mt-10 md:mt-16": index != 0 }
              )}
            >
              <img
                src="/images/explore/property-3.jpg"
                alt="property"
                className="w-full h-[370px] object-cover"
              />
              <div className="mt-6 md:mt-12">
                <h3 className="text-2xl md:text-3xl text-theme-dark-green leading-tight md:leading-normal font-playfair font-semibold">
                  {item.title}
                </h3>
                <p className="mt-3 text-md font-light">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

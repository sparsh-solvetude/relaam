"use client";

import React, { useEffect, useState } from "react";

export const Highlight = ({}: any) => {
  return (
    <div className="w-full py-8 md:py-12 bg-theme-dark-green">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="w-full md:w-5/12 px-6 md:px-16">
          <h2 className="text-2xl md:text-4xl text-cream uppercase leading-normal">
            The Trusted Hub for Luxury Real Estate and Valuable Assets
          </h2>
          <div className="hidden md:flex items-center justify-start gap-4 mt-6">
            <div className="bg-transparent border border-cream w-8 h-8 rounded-full flex items-center justify-center">
              <img
                src="/icons/arrow-left-cream.svg"
                alt="arrow"
                className="h-3"
              />
            </div>
            <div className="bg-transparent border border-cream w-8 h-8 rounded-full flex items-center justify-center">
              <img
                src="/icons/arrow-right-cream.svg"
                alt="arrow"
                className="h-3"
              />
            </div>
          </div>
        </div>
        <div className="w-full md:w-7/12 flex items-start justify-stretch gap-0 md:gap-4 mx-6 md:mx-0 overflow-x-auto">
          <div className="w-[80vw] md:w-1/2 min-w-[80vw] md:min-w-1/2 bg-white px-8 py-8 flex flex-col itemms-start justify-start h-full mr-[8vw] md:mr-0">
            <div className="flex items-center justify-center p-1 bg-cream rounded-full w-12 h-12">
              <img
                src="/icons/computer.svg"
                alt="property"
                className="w-5 h-5"
              />
            </div>
            <h3 className="text-lg text-theme-dark-green font-bold mt-6 font-playfair">
              Real-Time Market Access
            </h3>
            <p className="mt-4 text-sm font-light">
              Stay ahead with a platform that updates inventory multiple times
              daily, adding 3,000 new listings every day. Get instant access to
              real-time market prices and direct connections with trusted
              listing agents.
            </p>
          </div>
          <div className="w-[80vw] md:w-1/2 min-w-[80vw] md:min-w-1/2 bg-white px-8 py-8 flex flex-col itemms-start justify-start h-full mr-[8vw] md:mr-0">
            <div className="flex items-center justify-center p-1 bg-cream rounded-full w-12 h-12">
              <img
                src="/icons/home-check.svg"
                alt="property"
                className="w-5 h-5"
              />
            </div>
            <h3 className="text-lg text-theme-dark-green font-bold mt-6 font-playfair">
              Tailored Property Discovery
            </h3>
            <p className="mt-4 text-sm font-light">
              Experience a search journey designed just for you. From
              personalized recommendations to advanced search filters, wish
              lists, alerts, and curated feeds, finding your dream property has
              never been more seamless.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-start gap-4 px-6">
          <div className="bg-transparent border border-white w-12 h-12 rounded-full flex items-center justify-center">
            <img
              src="/icons/arrow-left-white.svg"
              alt="arrow"
              className="h-5"
            />
          </div>
          <div className="bg-transparent border border-white w-12 h-12 rounded-full flex items-center justify-center">
            <img
              src="/icons/arrow-right-white.svg"
              alt="arrow"
              className="h-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

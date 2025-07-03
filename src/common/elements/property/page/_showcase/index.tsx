"use client";

import React, { useState } from "react";
import { VideoModal } from "./_video";

export const Showcase = ({
  coverImage,
  name,
  description,
  coverVideo,
}: {
  coverImage: string;
  name: string;
  description: string;
  coverVideo: string | null;
}) => {
  const [showModal, showModalSet] = useState(false);

  return (
    <div className="h-svh w-full">
      <img
        src={coverImage}
        alt="property"
        className="h-full w-full object-cover"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-80"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 flex flex-col items-center justify-center gap-4 h-full pt-20 text-center text-white">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white w-full md:w-2/3">
            {name}
          </h1>
          <p className="text-lg mt-8 w-full lg:w-3/5 opacity-80">
            {description}
          </p>
          <div className="hidden md:flex items-center gap-4 md:gap-6 mt-8">
            <a
              href="#overview"
              className="bg-transparent border-2 border-white px-8 py-2 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-500"
            >
              Overview
            </a>
            <a
              href="#features"
              className="bg-transparent border-2 border-white px-8 py-2 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-500"
            >
              Features
            </a>
            <a
              href="#gallery"
              className="bg-transparent border-2 border-white px-8 py-2 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-500"
            >
              Gallery
            </a>
            <a
              href="#location"
              className="bg-transparent border-2 border-white px-8 py-2 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-500"
            >
              Location
            </a>
          </div>
          {coverVideo && (
            <button
              className="bg-gray-2 rounded-full mt-8 hover:bg-dark-2 transition-all duration-500"
              onClick={() => showModalSet(true)}
            >
              <img
                src="/icons/play.svg"
                alt="arrow"
                className="h-12 rotate-0 p-2"
              />
            </button>
          )}
        </div>
      </div>
      {showModal && (
        <VideoModal showModalSet={showModalSet} video={coverVideo} />
      )}
    </div>
  );
};

"use client";

import React, { useEffect, useState } from "react";

export const Info = ({}: any) => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="w-full py-8">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl md:text-3xl text-center font-light text-theme-dark-green">
          Unmatched Opulence, Unparalleled Living
        </h2>
        <div className="w-full h-64 md:h-96 mt-8 relative">
          <img
            src="/images/info-video-preview.jpg"
            alt="info-video"
            className="w-full h-64 md:h-96 mt-8"
          />
          <img
            src="/icons/play-button.svg"
            alt="play-button"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
            onClick={() => setShowVideo(true)}
          />
          {showVideo && (
            <video
              className="w-full h-64 md:h-96 absolute top-0 left-0 object-cover"
              autoPlay
              loop
              muted
              onClick={() => setShowVideo(false)}
            >
              <source src="/videos/info.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
        <p className="mt-5 text-center">
          Growing appreciation for refined design aesthetics in the MENA region
          and Globally, EDNAS stands at the forefront, offering clients the
          opportunity to elevate their spaces to new levels of luxury, elegance,
          and individuality.Growing appreciation for refined design aesthetics
          in the MENA region and Globally, EDNAS stands at the forefront,
          offering clients the opportunity to elevate their spaces to new levels
          of luxury, elegance, and individuality.
        </p>
      </div>
    </div>
  );
};

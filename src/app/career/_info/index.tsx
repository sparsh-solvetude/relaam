"use client";

import React, { useEffect, useState } from "react";

export const Info = ({}: any) => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 py-28 pb-10 grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="text-black flex flex-col justify-center items-start gap-6 pr-0 md:pr-16">
          <h2 className="text-5xl font-bold mb-6 leading-base">
            Career opportunities at <span className="text-orange">RELAAM</span>
          </h2>
          <p className="font-light opacity-80">
            At RELAAM, we're more than just a real estate brand — we're a team driven by innovation, growth, and a passion for excellence. Whether you're just starting your career or looking to take it to the next level, RELAAM offers a dynamic environment where talent is recognized and nurtured.
          </p>
          <p className="font-light opacity-80">
            Join a company that values your ambition, supports your professional development, and opens doors to endless possibilities in the real estate industry. Be part of a team shaping the future of property in Dubai and beyond.
          </p>
        </div>
        
        <div className="text-black flex flex-col justify-center items-start gap-6 pr-0 md:pr-16">
          <h2 className="text-5xl font-bold mb-6 leading-base">
            Benefits of Joining <span className="text-orange">RELAAM</span>
          </h2>
          <ul className="space-y-4 font-light opacity-80 list-disc pl-5">
            <li>
              <strong className="text-gray-800">Performance-Based Growth</strong><br />
              Accelerate your career with clear paths for advancement and regular performance rewards.
            </li>
            <li>
              <strong className="text-gray-800">Competitive Compensation</strong><br />
              Attractive base salary with high commission potential and bonus incentives.
            </li>
            <li>
              <strong className="text-gray-800">Professional Development</strong><br />
              Access to training, mentorship, and learning resources to help you grow continuously.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

"use client";

import React, { useEffect, useState } from "react";
import { title } from "process";
import clsx from "clsx";

const data = [
  {
    id: 1,
    quote:
      "The team’s dedication to quality and customer satisfaction is unmatched. They guided us through every step, ensuring we found a property that ticked all the boxes. Their curated approach and deep market knowledge made a complex process feel effortless. I highly recommend them to anyone seeking premium real estate.",
    author: "Khaled Al Zarooni, Partner, Vision Legal Advisors",
  },
  {
    id: 2,
    quote:
      "The team’s dedication to quality and customer satisfaction is unmatched. They guided us through every step, ensuring we found a property that ticked all the boxes. Their curated approach and deep market knowledge made a complex process feel effortless. I highly recommend them to anyone seeking premium real estate.",
    author: "Khaled Al Zarooni, Partner, Vision Legal Advisors",
  },
  {
    id: 3,
    quote:
      "The team’s dedication to quality and customer satisfaction is unmatched. They guided us through every step, ensuring we found a property that ticked all the boxes. Their curated approach and deep market knowledge made a complex process feel effortless. I highly recommend them to anyone seeking premium real estate.",
    author: "Khaled Al Zarooni, Partner, Vision Legal Advisors",
  },
  {
    id: 4,
    quote:
      "The team’s dedication to quality and customer satisfaction is unmatched. They guided us through every step, ensuring we found a property that ticked all the boxes. Their curated approach and deep market knowledge made a complex process feel effortless. I highly recommend them to anyone seeking premium real estate.",
    author: "Khaled Al Zarooni, Partner, Vision Legal Advisors",
  },
];

export const Testimonial = ({}: any) => {
  const [currentSlide, currentSlideSet] = useState(0);
  const [show, showSet] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      currentSlideSet((currentSlide + 1) % data.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="w-full px-6 md:px-16 my-10 md:my-16 bg-white">
      <div className="pt-16 pb-8 bg-[#A6A7AA1A] px-6 md:px-0">
        <h2 className="text-2xl md:text-3xl text-center text-theme-dark-green uppercase">
          What our clients say
        </h2>
        <p className="mt-8 text-center max-w-4xl m-auto text-xl md:text-3xl font-playfair">
          The team’s dedication to quality and customer satisfaction is
          unmatched. They guided us through every step, ensuring we found a
          property that ticked all the boxes. Their curated approach and deep
          market knowledge made a complex process feel effortless. I highly
          recommend them to anyone seeking premium real estate."
        </p>
        <p className="mt-8 text-center text-md md:text-xl font-black ">
          – Khaled Al Zarooni, Partner, Vision Legal Advisors
        </p>
        <div className="gap-2 md:gap-8 mt-10 md:mt-16 px-0 md:px-16 flex items-center">
          {/* bar */}
          {data.map((item, index) => (
            <div
              key={index}
              className={clsx("w-full bg-[#9f3417]", {
                "h-1": currentSlide === index,
                "h-0.5 opacity-50": currentSlide !== index,
              })}
              onClick={() => currentSlideSet(index)}
            ></div>
          ))}

        </div>
      </div>
    </div>
  );
};

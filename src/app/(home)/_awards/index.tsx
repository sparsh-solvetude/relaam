"use client";

import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Item } from "./item";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const data = [
  {
    name: 'Top Performing Dubai Real Estate Agency',
    image: '/images/award.png'
  },
  {
    name: 'Outstanding Performance in 2023',
    image: '/images/award2.png'
  },
  {
    name: 'Best Real Estate Agency in Dubai',
    image: '/images/award.png'
  },
  {
    name: 'Top Performing Dubai Real Estate Agency',
    image: '/images/award2.png'
  },
  {
    name: 'Outstanding Performance in 2023',
    image: '/images/award.png'
  },
  {
    name: 'Best Real Estate Agency in Dubai',
    image: '/images/award2.png'
  }
];

export const Awards = () => {
  const carouselRef = useRef<any>(null);

  const handleNext = () => {
    if (carouselRef.current) {
      carouselRef.current.next();
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      carouselRef.current.previous();
    }
  };

  return (
    <div className="bg-[#9f3517] relative">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 pt-28 pb-10 text-white flex md:items-end justify-between flex-col md:flex-row gap-6 md:gap-2">
        <div className="w-full md:w-3/5">
          <h2 className="text-4xl font-bold mb-4">Our Awards</h2>
          <p className="font-light opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
            elit et nisi tincidunt maximus. Duis at facilisis massa. Vestibulum
            ut libero id libero varius pharetra vitae vitae massa.
          </p>
        </div>
        <div className="w-full md:w-2/5 flex items-center justify-end">
          <img
            src="/icons/slide-arrow.svg"
            alt="slide arrow"
            className="h-12 cursor-pointer"
            onClick={handlePrev}
          />
          <img
            src="/icons/slide-arrow.svg"
            alt="slide arrow"
            className="h-12 cursor-pointer rotate-180"
            onClick={handleNext}
          />
        </div>
      </div>
      <div className="overflow-hidden pb-28">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 text-white mb-8">
          <Carousel
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            // infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container overflow-hidden w-full"
            arrows={false}
            ref={carouselRef}
            // deviceType={this.props.deviceType}
          >
            {data.map((item, index) => (
              <Item key={index} {...item} />
            ))}
            
          </Carousel>
        </div>
      </div>
    </div>
  );
};

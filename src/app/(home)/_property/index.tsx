"use client";

import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Item } from "@/common/elements/property/item";
import Link from "next/link";

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
    image: "/images/modern-house.jpg",
    name: "Burj Khalifa View Residence",
    location: "Dubai, UAE",
    price: "AED 1,200,000",
  },
  {
    image: "/images/balcony.jpg",
    name: "Jumeirah Lake Towers",
    location: "Dubai, UAE",
    price: "AED 1,200,000",
  },
  {
    image: "/images/pool-view.jpg",
    name: "Palm Jumeirah Villa",
    location: "Dubai, UAE",
    price: "AED 1,200,000",
  },
  {
    image: "/images/modern-house.jpg",
    name: "Burj Khalifa View Residence",
    location: "Dubai, UAE",
    price: "AED 1,200,000",
  },
  {
    image: "/images/balcony.jpg",
    name: "Jumeirah Lake Towers",
    location: "Dubai, UAE",
    price: "AED 1,200,000",
  },
  {
    image: "/images/modern.jpg",
    name: "Palm Jumeirah Villa",
    location: "Dubai, UAE",
    price: "AED 1,200,000",
  },
  {
    image: "/images/modern-house.jpg",
    name: "Burj Khalifa View Residence",
    location: "Dubai, UAE",
    price: "AED 1,200,000",
  },
  {
    image: "/images/balcony.jpg",
    name: "Jumeirah Lake Towers",
    location: "Dubai, UAE",
    price: "AED 1,200,000",
  },
];

export const Property = () => {
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
    <>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 pt-28 pb-10 text-white flex md:items-end justify-between flex-col md:flex-row gap-6 md:gap-2">
        <div className="w-full md:w-7/12">
          <h2 className="text-4xl font-bold mb-6">
            Explore Property Portfolio
          </h2>
          <p className="font-light opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
            elit et nisi tincidunt maximus. Duis at facilisis massa.
          </p>
        </div>
        <div className="w-full md:w-5/12 flex items-center justify-end">
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
      <div className="overflow-hidden">
        <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 text-white ">
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
            // containerClass="carousel-container overflow-hidden w-full"
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
      <div className="max-w-screen-xl mx-auto px-4 pb-28 text-center">
        <Link href="/property">
          <button className="bg-[#9f3517] text-white px-8 py-2 mt-8 rounded-lg font-bold text-lg flex items-center gap-2 justify-center mx-auto">
            Explore More
            <img src="/icons/arrow.svg" alt="arrow" className="h-6 rotate-45" />
          </button>
        </Link>
      </div>
    </>
  );
};

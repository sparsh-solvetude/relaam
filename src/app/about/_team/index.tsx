"use client";

import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Item } from "./item";
import { motion } from "framer-motion";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
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
    image: "/images/team/member-1.png",
    name: "Hugh Phillips",
    designation: "Designation of the person",
  },
  {
    image: "/images/team/member-2.png",
    name: "Jennifer Morez",
    designation: "Designation of the person",
  },
  {
    image: "/images/team/member-3.png",
    name: "Maude Boyer",
    designation: "Designation of the person",
  },
  {
    image: "/images/team/member-4.png",
    name: "David Cameroon",
    designation: "Designation of the person",
  },
  {
    image: "/images/team/member-5.png",
    name: "Salma Mohammad",
    designation: "Designation of the person",
  },
  {
    image: "/images/team/member-6.png",
    name: "Farukh Sheikh",
    designation: "Designation of the person",
  },
];

export const Team = ({ properties = data }: { properties?: any[] }) => {
  const carouselRef = useRef<any>(null);
  const [showPreview, setShowPreview] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // check if it is mobile or not
  useEffect(() => {
    if (window.innerWidth < 640) {
      setIsMobile(true);
    }
  }, []);

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
    <div className="w-full overflow-hidden pb-10">
      <div className="flex flex-col items-center justify-center pb-4 mx-6 md:mx-0 mt-12">
        <h3 className="text-md bg-[#9f3517] text-white font-bold  mb-2 md:mb-4 uppercase font-playfair px-4 py-2 rounded-full">
          Our Team
        </h3>
        <h2 className="text-3xl text-theme-dark-green mt-8 max-w-2xl text-center uppercase font-extralight leading-snug">
          A diverse team of over 20 profiles that strengthen our company.
        </h2>
      </div>
      <div className="hidden md:block mx-16 mt-8">
        <div className="mx-auto ">
          <Carousel
            showDots={false}
            responsive={responsive}
            draggable={isMobile}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            // autoPlay={this.props.deviceType !== "mobile" ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            // containerClass="carousel-container overflow-hidden w-full"
            arrows={!isMobile}
            ref={carouselRef}
            // deviceType={this.props.deviceType}
            // customRightArrow={<CustomRightArrow />}
          >
            {properties.map((item: any, index) => (
              <Item
                key={index}
                slug={item.attributes?.Slug}
                image={item.image}
                name={item.name}
                designation={item.designation}
                height={index % 2 === 0 ? "15" : "18"}
              />
            ))}
          </Carousel>
        </div>
      </div>
      <div className="grid md:hidden grid-cols-2 gap-4">
        {properties.map((item: any, index) => (
          <Item
            key={index}
            slug={item.attributes?.Slug}
            image={item.image}
            name={item.name}
            designation={item.designation}
            height={index % 2 === 0 ? "15" : "18"}
          />
        ))}
      </div>
      {/* <div className="hidden md:block overflow-hidden whitespace-nowrap text-2xl py-2 mt-4">
        <motion.div
          className="inline-block"
          animate={{ x: ["100%", "-100%"] }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
          whileHover={{ animationPlayState: "paused" }}
        >
          <div className="flex items-center justify-center gap-4">
            <div className="inline-block px-4 py-2 uppercase mx-4 font-playfair italic font-bold text-5xl cursor-pointer">
              Al Quoz Dubai
            </div>
            <img
              src="/icons/diagonal.svg"
              alt="diagonal"
              className="inline-block w-4 h-4"
            />
            <div className="inline-block px-4 py-2 uppercase mx-4 font-playfair italic font-bold text-5xl cursor-pointer">
              Emirates Hills
            </div>
            <img
              src="/icons/diagonal.svg"
              alt="diagonal"
              className="inline-block w-4 h-4"
            />

            <div className="inline-block px-4 py-2 uppercase mx-4 font-playfair italic font-bold text-5xl cursor-pointer">
              Pro Al Manara Dubai
            </div>

            <img
              src="/icons/diagonal.svg"
              alt="diagonal"
              className="inline-block w-4 h-4"
            />

            <div className="inline-block px-4 py-2 uppercase mx-4 font-playfair italic font-bold text-5xl cursor-pointer">
              Emirates Hills Dubai
            </div>
          </div>
        </motion.div>
      </div> */}
    </div>
  );
};

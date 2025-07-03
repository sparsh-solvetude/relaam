"use client";

import React, { useRef } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Item } from "@/common/elements/property/item";
import { formatCurrency } from "@/common/config/helper";

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

export const Property = ({ title = "Similar Properties", properties = [] }: any) => {
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
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 pt-12 pb-10 text-white flex md:items-end justify-between gap-6 md:gap-2">
        <div className="w-3/4">
          <h2 className="text-4xl font-bold mb-4">{title}</h2>
        </div>
        <div className="w-full md:w-1/4 flex items-center justify-end">
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
            {properties.map((item: any, index: Number) => (
              <Item
                key={index}
                slug={item.attributes?.Slug}
                image={
                  process.env.NEXT_PUBLIC_STRAPI_URL +
                  item?.attributes?.Thumbnail?.data?.attributes?.url
                }
                name={item.attributes?.Name}
                location={item.attributes?.Location}
                // price={`₹ ${Number(
                //   item.attributes?.StartingPrice
                // ).toLocaleString("en-US")}`}
                price={formatCurrency(Number(item.attributes?.StartingPrice))}
              />
            ))}
          </Carousel>
        </div>
      </div>
    </>
  );
};

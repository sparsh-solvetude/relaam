"use client";

import React, { useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { ImageModal } from "./_popup";
import clsx from "clsx";

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

export const Gallery = ({
  title,
  description,
  interior,
  exterior,
}: {
  title: string;
  description: string;
  interior: any[];
  exterior: any[];
}) => {
  const carouselRef = useRef<any>(null);
  const [activeSlide, activeSlideSet] = useState<any>(0);
  const [type, typeSet] = useState("exterior");

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

  const nextSlide = () => {
    if (activeSlide < data.length) {
      activeSlideSet(activeSlide + 1);
    } else {
      activeSlideSet(1);
    }
  };

  const prevSlide = () => {
    if (activeSlide > 1) {
      activeSlideSet(activeSlide - 1);
    } else {
      activeSlideSet(data.length);
    }
  };

  const data = type === "exterior" ? exterior : interior;

  console.log("exterior", exterior);

  return (
    <>
      <div
        className="max-w-screen-2xl mx-auto px-6 sm:px-12 pt-28 pb-10 text-white flex md:items-end justify-between flex-col md:flex-row gap-6 md:gap-2"
        id="gallery"
      >
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="font-light opacity-80">
            {description}
          </p>
        </div>
        <div className="w-full md:w-2/5 flex flex-col items-start md:items-end justify-between gap-4">
          <div className="flex items-center justify-end bg-dark-2 p-1 rounded-xl">
            <button
              className={clsx(
                {
                  "bg-white text-dark": type === "exterior",
                  "bg-transparent text-white": type !== "exterior",
                },
                " px-8 py-2 rounded-xl font-bold text-md flex items-center gap-2 justify-center"
              )}
              onClick={() => typeSet("exterior")}
            >
              Exterior
            </button>
            <button
              className={clsx(
                {
                  "bg-white text-dark": type === "interior",
                  "bg-transparent text-white": type !== "interior",
                },
                " px-8 py-2 rounded-xl font-bold text-md flex items-center gap-2 justify-center"
              )}
              onClick={() => typeSet("interior")}
            >
              Interior
            </button>
          </div>
          <div className="flex items-center justify-end w-full">
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
            {type === "exterior"
              ? exterior.map((item, index): any => (
                  <div className="mr-3">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_URL +
                        item?.attributes?.url
                      }
                      alt="modern house"
                      className="rounded-xl h-96 object-cover w-full cursor-pointer"
                      onClick={() => activeSlideSet(index + 1)}
                    />
                  </div>
                ))
              : interior.map((item, index): any => (
                  <div className="mr-3">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_STRAPI_URL +
                        item?.attributes?.url
                      }
                      alt="modern house"
                      className="rounded-xl h-96 object-cover w-full cursor-pointer"
                      onClick={() => activeSlideSet(index + 1)}
                    />
                  </div>
                ))}
          </Carousel>
        </div>
      </div>
      {activeSlide && (
        <ImageModal
          slide={data[activeSlide - 1]}
          slideSet={activeSlideSet}
          nextSlide={nextSlide}
          prevSlide={prevSlide}
        />
      )}
    </>
  );
};

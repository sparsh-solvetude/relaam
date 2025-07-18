"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

const Featured = () => {
  const properties = [
    {
      id: 1,
      image: "/images/brand_1.png",
      review:
        "Great experience and service Everyone was attentive and available.",
      name: "Luxury Villa in Dubai",
      location: "Dubai, UAE",
      price: "AED 50,000",
      bedrooms: "3 BEDROOM",
      apartment: "Apartment",
    },
    {
      id: 2,
      image: "/images/brand_1.png",
      review:
        "Great experience and service Everyone was attentive and available.",
      name: "Modern Apartment in Marina",
      location: "Dubai Marina, UAE",
      price: "AED 35,000",
      bedrooms: "3 BEDROOM",
      apartment: "Apartment",
    },
    {
      id: 3,
      image: "/images/brand_1.png",
      review:
        "Great experience and service Everyone was attentive and available.",
      name: "Elegant Villa in Abu Dhabi",
      location: "Abu Dhabi, UAE",
      price: "AED 42,000",
      bedrooms: "3 BEDROOM",
      apartment: "Apartment",
    },
    {
      id: 4,
      image: "/images/brand_1.png",
      review:
        "Great experience and service Everyone was attentive and available.",
      name: "Sea View Penthouse",
      location: "Palm Jumeirah, UAE",
      price: "AED 70,000",
      bedrooms: "4 BEDROOM",
      apartment: "Penthouse",
    },
    {
      id: 5,
      image: "/images/brand_1.png",
      review:
        "Great experience and service Everyone was attentive and available.",
      name: "Cozy Home in Downtown",
      location: "Downtown Dubai, UAE",
      price: "AED 30,000",
      bedrooms: "2 BEDROOM",
      apartment: "Apartment",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardWidth = 360;
  const gap = 16;
  const imageWidth = cardWidth + gap;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const newScrollLeft =
        direction === "left"
          ? scrollLeft - imageWidth
          : scrollLeft + imageWidth;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const index = Math.round(scrollLeft / imageWidth);
      setCurrentSlide(index);
    }
  };

  const jumpToSlide = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * imageWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
      return () => ref.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="text-center pt-6 md:pt-12">
      <div className="text-black flex flex-col justify-center items-center text-center gap-2 opacity-70">
        <p className="text-sm tracking-widest text-[#9f3323] font-semibold uppercase mb-3">
          TESTIMONIALS
        </p>
        <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
          IN THEIR WORDS
        </h1>
      </div>

      <div className="relative w-full flex justify-center">
        <div className="w-[1152px] px-5 overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar"
          >
            {properties.map((property, index) => (
              <div key={index}>
                <div className="bg-white px-3 py-8 w-[360px] flex flex-col items-center gap-1 h-[24rem] overflow-hidden relative cursor-pointer border-2 border-transparent">
                  <img
                    src={property.image}
                    alt={property.name}
                    className="w-full h-full absolute left-0 top-0 object-cover"
                  />
                  <div className="absolute top-0 w-[90%] md:w-full md:right-0 right-8 pt-2">
                    <p className="text-sm text-left px-3">{property.review}</p>
                  </div>
                </div>

                <div className="opacity-80 text-left mt-2">
                  <p className="text-[#9f3323]">JOH SMITH ARNOLD</p>
                  {property.name} <br />
                  {property.price}
                  <p className="text-sm">
                    {property.location} {property.bedrooms} {property.apartment}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Progress Bar & Arrows */}
      <div className="w-full py-8 md:py-16  flex items-center justify-center">
        <div className="w-[90%] max-w-[1152px] flex gap-10 items-center px-4">
          <div className="flex-grow h-[2px] bg-black/20 relative mx-4">
            <div className="absolute top-0 left-0 h-full w-full flex">
              {properties.map((_, index) => (
                <div
                  key={index}
                  className={`flex-1 h-full mx-[1px] transition-colors duration-300 ${
                    currentSlide === index ? "bg-black" : "bg-transparent"
                  }`}
                  onClick={() => jumpToSlide(index)}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>

          <div className="flex space-x-3">
            <button
              onClick={() => scroll("left")}
              className="text-black text-xl hover:scale-110 transition"
            >
              ←
            </button>
            <button
              onClick={() => scroll("right")}
              className="text-black text-xl hover:scale-110 transition"
            >
              →
            </button>
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default Featured;
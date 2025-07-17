import React from "react";
import { Item } from "@/common/elements/property/item";

const houseIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 
      1.591 0L21.75 12M4.5 9.75v10.125c0 
      .621.504 1.125 1.125 1.125H9.75v-4.875
      c0-.621.504-1.125 1.125-1.125h2.25c.621 
      0 1.125.504 1.125 1.125V21h4.125c.621 
      0 1.125-.504 1.125-1.125V9.75M8.25 
      21h8.25"
    />
  </svg>
);

const towerIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 21v-4.875c0-.621.504-1.125 
      1.125-1.125h2.25c.621 0 1.125.504 
      1.125 1.125V21m0 0h4.5V3.545M12.75 
      21h7.5V10.75M2.25 21h1.5m18 
      0h-18M2.25 9l4.5-1.636M18.75 
      3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 
      7.364V3h-3v18m3-13.636 10.5-3.819"
    />
  </svg>
);

const barChartIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 
      6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 
      3h.75M6.75 21v-3.375c0-.621.504-1.125 
      1.125-1.125h2.25c.621 0 1.125.504 
      1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 
      3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 
      3h.008v.008h-.008v-.008Z"
    />
  </svg>
);

export const FeaturedProperty = () => {
  return (
    <div className="bg-white relative">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 pt-10 pb-20">
        <div className="text-black flex flex-col justify-center items-center text-center gap-2">
          <h2 className="text-5xl font-bold mb-6 leading-base">
            Featured Properties
          </h2>
          <p className="font-light opacity-80 max-w-4xl">
            Discover our exclusive featured property that offers unparalleled
            luxury and comfort. This stunning residence is designed to meet
            the highest standards of modern living, providing a perfect blend
            of elegance and functionality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <Item
            image="/images/burj-khalifa-view.jpg"
            slug="property-1"
            name="Luxury Villa in Dubai" 
            location="Dubai, UAE"
            price="AED 50,000"
            icon={houseIcon}
          />
          <Item
            image="/images/atlantis.jpg"
            slug="property-2"
            name="Modern Apartment in Marina"
            location="Dubai Marina, UAE"
            price="AED 35,000"
            icon={towerIcon}
          />
          <Item
            image="/images/burj-al-arab.jpg"
            slug="property-3"
            name="Elegant Villa in Abu Dhabi"
            location="Abu Dhabi, UAE"
            price="AED 42,000"
            icon={barChartIcon}
          />
        </div>
      </div>
    </div>
  );
};

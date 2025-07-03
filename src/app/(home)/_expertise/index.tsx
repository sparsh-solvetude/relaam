import React from "react";
import { Item } from "./item";

export const Expertise = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 py-28 text-white">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Our Expertise</h2>
        <p className="font-thin text-lg opacity-80">
          Discover lucrative opportunities in property investment. Maximize
          returns with carefully
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
}

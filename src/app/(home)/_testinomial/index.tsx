import React from "react";
import { Item } from "./item";

export const Testinomial = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 py-20 text-black">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6">
            Our Client <span className="text-[#9f3517]">Testimonial</span>
          </h2>
          <p className="font-light w-full md:w-2/3 mx-auto opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
            elit et nisi tincidunt maximus. Duis at facilisis massa. Vestibulum
            ut libero id libero varius pharetra vitae vitae massa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};

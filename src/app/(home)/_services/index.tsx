import React from "react";
import { ItemLeft } from "./itemLeft";
import { ItemRight } from "./itemRight";

export const Services = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 py-28 text-black">
      <div>
        <h2 className="text-4xl font-bold mb-4">Our Services</h2>
        <p className="font-light w-full md:w-3/5 opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
          elit et nisi tincidunt maximus. Duis at facilisis massa.
        </p>
      </div>
      <div className="flex flex-col gap-12 mt-16">
        <ItemLeft image="/images/white-house.jpg" title="Property Management" />
        <ItemRight image="/images/city.jpg" title="Facilities Management" />
        {/* <ItemLeft image="/images/contract.jpg" title="MIRA Mortgage" />
        <ItemRight image="/images/renovation.jpg" title="MIRA Renovation" />
        <ItemLeft image="/images/car.jpg" title="MIRA Drive" /> */}
      </div>
    </div>
  );
};

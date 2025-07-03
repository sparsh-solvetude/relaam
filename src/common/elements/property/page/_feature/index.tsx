import React from "react";
import Item from "./item";

export const Feature = ({
  title,
  description,
  higlights,
}: {
  title: string;
  description: string;
  higlights: any[];
}) => {

  return (
    <div className="bg-dark-2" id="features">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 py-28 text-white">
        <div className="text-center">
          <div className="relative flex py-3 items-center w-32 mx-auto">
            <div className="flex-grow border-t border-[#9f3517]"></div>
            <span className="flex-shrink mx-2 text-white">Features</span>
            <div className="flex-grow border-t border-[#9f3517]"></div>
          </div>
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="font-light w-full md:w-1/2 mx-auto opacity-80">
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {higlights.map((item, index) => (
            <Item
              key={index}
              image={
                process.env.NEXT_PUBLIC_STRAPI_URL +
                item?.attributes?.Image?.data?.attributes?.url
              }
              name={item?.attributes?.Name}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

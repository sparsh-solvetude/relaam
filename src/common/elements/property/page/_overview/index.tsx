import React from "react";
import Item from "./item";
import { formatCurrency } from "@/common/config/helper";

export const Overview = ({
  title,
  description,
  image,
  startingPrice,
  bedrooms,
  OverviewFeature,
}: {
  title: string;
  description: string;
  image: string;
  startingPrice: number;
  bedrooms: string;
  OverviewFeature: any;
}) => {
  return (
    <div
      className="max-w-screen-2xl mx-auto px-6 sm:px-12 py-28 text-white"
      id="overview"
    >
      <div className="text-center">
        <div className="relative flex py-3 items-center w-32 mx-auto">
          <div className="flex-grow border-t border-[#9f3517]"></div>
          <span className="flex-shrink mx-2 text-white">Overview</span>
          <div className="flex-grow border-t border-[#9f3517]"></div>
        </div>
        <h2 className="text-4xl font-bold mb-2">{title}</h2>
      </div>
      <div className="flex flex-col md:flex-row gap-16 mt-16">
        <img
          src={image}
          alt="balcony"
          className="w-full md:w-1/2 min-h-36 h-72 md:h-[36rem] rounded-2xl object-cover"
        />
        <div className="flex flex-col gap-4 w-full md:w-1/2 justify-between items-start">
          <p
            className="font-light opacity-80"
            dangerouslySetInnerHTML={{
              __html: description?.replace(/\n/g, "<br />"),
            }}
          ></p>
          <div>
            <div className="flex gap-2 mt-8 mb-1">
              <img src="/icons/tag.svg" alt="tag" className="w-6 h-6" />
              <p className="font-light opacity-50">Starting from</p>
            </div>
            <h3 className="text-4xl font-black">
              {/* ₹ {Number(startingPrice).toLocaleString("en-US")} */}
              {formatCurrency(startingPrice)}
            </h3>
          </div>
        </div>
      </div>
      <div className="mt-28 grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-8">
        {OverviewFeature.map((item: any, index: any) => (
          <Item
            key={index}
            icon={item?.Icon?.data?.attributes?.url}
            title={item?.Title}
            value={bedrooms}
          />
        ))}
      </div>
    </div>
  );
};

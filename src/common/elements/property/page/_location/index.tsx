"use client";

import React from "react";
import GoogleMapReact from "google-map-react";
import { Item } from "./item";

const defaultProps = {
  center: {
    lat: 10.99835602,
    lng: 77.01502627,
  },
  zoom: 11,
};

export const Location = ({
  title,
  description,
  highlightDescription,
  nearBy,
}: {
  title: string;
  description: string;
  highlightDescription: string;
  nearBy: any[];
}) => {
  return (
    <div className="bg-dark-2" id="location">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 py-28 text-white">
        <div className="w-full md:w-2/3">
          <h2 className="text-4xl font-bold mb-6">{title}</h2>
          <p className="font-light text-md opacity-80">{description}</p>
        </div>
        <div className="flex items-start flex-col md:flex-row gap-8 mt-16">
          <div className="w-full md:w-1/2 h-72 md:h-96 rounded-xl overflow-hidden">
            <GoogleMapReact
              bootstrapURLKeys={{ key: "" }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            ></GoogleMapReact>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl mb-4">Location Highlights</h3>
            <p className="font-light text-md opacity-80">
              {highlightDescription}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
              {nearBy.map((item, index) => (
                <Item
                  key={index}
                  location={item?.Place}
                  time={item?.TimeTaken}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

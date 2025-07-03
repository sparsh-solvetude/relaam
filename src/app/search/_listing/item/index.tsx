"use client";

import React, { useEffect, useState } from "react";

export const ListingItem = ({
  image,
  title,
  description,
  price = null,
}: any) => {
  return (
    <div className="min-w-[80vw] md:min-w-full flex flex-col items-start justify-start">
      <img
        src={image}
        alt="property"
        className="w-full h-[350px] md:h-[250px] object-cover"
      />
      <h3 className="text-lg text-theme-dark-green leading-normal font-playfair font-bold mt-4">
        {title}
      </h3>
      <p className="mt-2 text-xs font-light">{description}</p>
      {price && (
        <p className="mt-2 text-theme-red text-xs">
          Starting from <span className="font-black">- {price}</span>
        </p>
      )}
    </div>
  );
};

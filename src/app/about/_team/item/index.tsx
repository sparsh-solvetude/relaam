"use client";

import React, { useState } from "react";

export const Item = ({
  image,
  name,
  designation,
  height = "17"
}: any) => {
  return (
    <>
      <div
        className={`bg-white text-center gap-1 overflow-hidden relative cursor-pointer mx-3 flex items-center justify-center flex-col h-full` }
        
      >
        <img src={image} alt={name} className={height == 18 ? `w-full h-[19rem] object-cover rounded-xl` : `w-full h-[15rem] object-cover rounded-xl`} />
        <div className=" bg-white py-2 w-full flex flex-col items-start justify-start gap-1">
          <h3 className="text-lg font-bold text-theme-dark-green font-playfair">
            {name}
          </h3>
          <div className="flex items-center justify-start gap-2">
            <h4 className="text-xs text-theme-red font-bold text-[#9f3417]">{designation}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

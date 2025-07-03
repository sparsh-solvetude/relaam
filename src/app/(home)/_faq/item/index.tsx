"use client";
import clsx from "clsx";
import React, { useState } from "react";

export const Item = ({lastItem = false}) => {
  const [show, showSet] = useState(false);
  return (
    <div className={clsx("text-black gap-4 py-3 px-2", {
        'border-b border-gray': !lastItem
    })}>
      <div
        className="flex items-center justify-between text-xl sm:text-2xl cursor-pointer gap-4"
        onClick={() => showSet(!show)}
      >
        How to get connected with Relaam?
        <div className=" text-center text-[#9f3517]">{show ? "-" : "+"}</div>
      </div>
      <div
        className={clsx("mt-3 text-sm font-light opacity-80 leading-6", {
          hidden: !show,
        })}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
          elit et nisi tincidunt maximus. Duis at facilisis massa. Vestibulum ut
          libero id libero varius pharetra vitae vitae massa. Nullam vulputate
          fringilla tellus. Aliquam neque felis, tincidunt at placerat quis,
          laoreet non odio. Quisque hendrerit id ex gravida vestibulum.
          Curabitur non mi tortor.
        </p>
      </div>
    </div>
  );
};

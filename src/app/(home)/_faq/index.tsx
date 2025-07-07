import React from "react";
import { Item } from "./item";

export const FAQ = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 py-28 grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="px-0 text-black flex flex-col justify-start items-start gap-3">
          <h2 className="text-5xl font-bold mb-6 leading-base">
            Frequently Asked Questions
          </h2>
          <p className="font-light opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
            elit et nisi tincidunt maximus. Duis at facilisis massa. Vestibulum
            ut libero id libero varius pharetra vitae vitae massa. Nullam
            vulputate fringilla tellus. Aliquam neque felis, tincidunt at
            placerat quis, laoreet non odio. Quisque hendrerit id ex gravida
            vestibulum. Curabitur non mi tortor.
          </p>
          <div className="w-20 h-1 bg-[#9f3323] mt-4 transition-all duration-300 group-hover:w-20"></div>
        </div>
        <div className="bg-white rounded-xl flex flex-col px-4 md:px-6 py-2 shadow-lg border border-[#9f3323]">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item lastItem />
        </div>
      </div>
    </>
  );
};

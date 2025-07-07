import React from "react";

export const Item = () => {
  return (
    <div className="border border-[#9f3323] shadow-md px-10 py-12 rounded-lg text-center flex flex-col items-center gap-1">
      <img
        src="/images/seller-avatar.jpg"
        alt="property"
        className="h-20 w-20 rounded-full object-cover"
      />
      <h3 className="text-xl font-bold mt-4">Alice Charmaine</h3>
      <p className="text-xs font-light opacity-80 text-[#9f3323]">Property Agent</p>
      <p className="mt-4 text-sm font-light opacity-80">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
        elit et nisi tincidunt maximus. Duis at facilisis massa. Vestibulum ut
        libero id libero varius pharetra vitae vitae massa. Nullam vulputate
        fringilla tellus.
      </p>
    </div>
  );
};

import React from "react";

export const Item = () => {
  return (
    <div className="bg-dark-2 px-4 py-8 rounded-lg text-center flex flex-col items-center gap-1">
      <img src="/icons/growth.svg" alt="property" className="h-16" />
      <h3 className="text-xl font-bold mt-4">Fast-growing</h3>
      <p className="mt-2 text-xs font-light">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
        elit et nisi tincidunt maximus. Duis at facilisis massa. Vestibulum ut
        libero id libero varius pharetra vitae vitae massa. Nullam vulputate
        fringilla tellus.
      </p>
    </div>
  );
};

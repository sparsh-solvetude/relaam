import React from "react";

export const Item = ({ name, image }: any) => {
  return (
    <div className="flex flex-col items-center gap-4 px-4">
      <img
        src={image}
        alt="award"
        className="w-full h-80 object-contain"
      />
      <h3 className="text-lg font-bold text-center px-4 md:px-14">
        {name}
      </h3>
    </div>
  );
};

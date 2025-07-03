import React from "react";

export const Item = ({
  location,
  time,
}: {
  location: string;
  time: string;
}) => {
  return (
    <div className="bg-dark px-4 py-3 rounded-xl">
      <h4 className="text-2xl mb-1">{location}</h4>
      <div className="flex items-center gap-1 text-[#9f3517]">
        <img src="/icons/clock-[#9f3517].svg" alt="location" className="w-4 h-4" />
        <p className="font-bold">{time}</p>
      </div>
    </div>
  );
};

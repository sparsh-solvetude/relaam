import Link from "next/link";
import React from "react";
import dayjs from "dayjs";

const types: any = {
  Event: "event",
  Blog: "blog",
  "Press Coverage": "press-coverage",
};

export const Item = ({ title, slug, image, date, time, type }: any) => {
  return (
    <Link href={`/${types[type]}/${slug}`}>
      <div className="bg-white rounded-xl flex flex-col gap-1 relative h-full shadow-lg border border-[#9f3323] hover:border-2 hover:border-[#9f3323] transition-all duration-300 cursor-pointer">
        <div className="absolute right-3 top-3 bg-white px-3 py-1.5 rounded-lg flex items-center gap-1 text-xs shadow-sm">
          <img src="/icons/clock.svg" alt="heart" className="h-4" />
          {time}
        </div>
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover rounded-xl rounded-b-none"
        />
        <div className="p-4 flex flex-col justify-between h-40 gap-6">
          <h3 className="text-xl font-bold">{title}</h3>
          {/* Aug 12, 2024 */}
          <p className="text-xs font-light opacity-70">
            Posted on {dayjs(date).format("MMM DD, YYYY")}
          </p>
        </div>
      </div>
    </Link>
  );
};

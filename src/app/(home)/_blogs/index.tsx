import React from "react";
import { Item } from "@/common/elements/blog/item";
import Link from "next/link";

const data = [
  {
    title: "A guide to home insurance in Dubai",
    image: "/images/modern-house.jpg",
    date: "Aug 9, 2024",
    time: "5 mins",
  },
  {
    title: "Exploring the best areas to live in Dubai",
    image: "/images/balcony.jpg",
    date: "Aug 12, 2024",
    time: "8 mins",
  },
  {
    title: "How to get a mortgage in Dubai",
    image: "/images/pool-view.jpg",
    date: "Aug 15, 2024",
    time: "10 mins",
  },
  {
    title: "A guide to home insurance in Dubai",
    image: "/images/modern-house.jpg",
    date: "Aug 9, 2024",
    time: "5 mins",
  },
];

export const Blogs = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 py-28 text-black">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">Latest News & Events</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16">
        {data.map((item, index) => (
          <Item key={index} {...item} />
        ))}
      </div>
      <div className="max-w-screen-xl mx-auto px-4 text-center">
        <Link href="/news">
          <button className="bg-[#9f3323] text-white px-6 py-2 mt-8 rounded-full text-lg flex items-center gap-2 justify-center mx-auto">
            View More
            <img src="/icons/arrow.svg" alt="arrow" className="h-6 rotate-45" />
          </button>
        </Link>
      </div>
    </div>
  );
};

"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Dropdown = ({
  title,
  items,
}: Readonly<{
  title: string;
  items: { name: string; link: string }[];
}>) => {
  const [show, showSet] = useState(false);

  //   close on outside click
  useEffect(() => {
    if (show) {
      const close = () => {
        showSet(false);
      };
      document.addEventListener("click", close);
      return () => document.removeEventListener("click", close);
    }
  }, [show]);

  return (
    <a
      className="text-white cursor-pointer flex items-center relative"
      onClick={() => showSet(!show)}
    >
      {title}
      <img src="/icons/arrow-drop-down.svg" alt="arrow" className="h-5" />
      {show && (
        <>
          <img
            src="/icons/arrow-drop-down.svg"
            alt="up arrow"
            className="absolute top-5 left-1/2 transform -translate-x-1/2 h-6 -rotate-180"
          />
          <div className="absolute bg-white px-2 py-2 top-8 shadow-lg rounded-lg text-gray-800 min-w-32 w-auto left-0">
            <ul>
              {items.map((item) => (
                <li className="border-b" key={item.name}>
                  <Link href={item.link} className="py-1.5 px-1 block text-dark hover:text-[#9f3517] transition-all duration-500 whitespace-nowrap ">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </a>
  );
};

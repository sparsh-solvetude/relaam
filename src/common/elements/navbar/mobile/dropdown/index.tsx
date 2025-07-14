import clsx from "clsx";
import React from "react";

export const MobileDropdown = ({
  title,
  items,
  isOpen,
  onToggle,
}: Readonly<{
  title: string;
  items: { name: string; link: string }[];
  isOpen: boolean;
  onToggle: () => void;
}>) => {
  return (
    <>
      <a
        href="#"
        className="text-white text-2xl font-bold flex items-center"
        onClick={(e) => {
          e.preventDefault();
          onToggle();
        }}
      >
        {title}
        <img
          src="/icons/arrow-drop-down.svg"
          alt="arrow"
          className={`h-8 ml-2 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </a>
      <div
        className={clsx(
          "flex-col justify-center items-start gap-4 transition-all duration-500 pl-8",
          isOpen ? "flex" : "hidden"
        )}
      >
        {items.map((item) => (
          <a
            href={item.link}
            className="text-white text-xl font-bold"
            key={item.name}
          >
            {item.name}
          </a>
        ))}
      </div>
    </>
  );
};

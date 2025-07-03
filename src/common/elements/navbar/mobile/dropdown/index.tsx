import clsx from "clsx";
import React, { useState } from "react";

export const MobileDropdown = ({
  title,
  items,
}: Readonly<{
  title: string;
  items: { name: string; link: string }[];
}>) => {
  const [show, showSet] = useState(false);

  return (
    <>
      <a
        href="#"
        className="text-white text-2xl font-bold flex items-center"
        onClick={() => showSet(!show)}
      >
        {title}
        <img src="/icons/arrow-drop-down.svg" alt="arrow" className="h-8" />
      </a>
      <div
        className={clsx(
          "flex-col justify-center items-start gap-4 transition-all duration-500 pl-8",
          show ? "flex" : "hidden"
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

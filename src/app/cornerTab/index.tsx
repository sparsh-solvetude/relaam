"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function CornerTab() {
  const router = useRouter();
  const navigateToPage = () => {
    router.push("/"); // Replace with your target route
  };

  return (
    <div>
      <button
        onClick={navigateToPage}
        className=" fixed right-0 w-[45px] h-[150px] bottom-[100px] bg-[#e4d5d4] text-[#0f1821] writing-mode-vertical-rl rotate-180 font-bold  rounded-l-none rounded-tr-[6px]
          rounded-br-[6px] cursor-pointer z-[1000] transition-colors duration-300  hover:bg-[#c2d6ef] tracking-[1.1px] shadow-[0_0_5px_rgba(0,0,0,0.3)] flex flex-col justify-between items-center"
      >
        <p className="rotate-90 font-bold text-[#9f3323] w-fit pl-[60px]">
          Legacy
        </p>
        <img src="R_Logo.png" alt="logo" className="rotate-180  h-[45px]" />
      </button>
    </div>
  );
}

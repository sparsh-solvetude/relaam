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
        className=" fixed right-0 w-[45px] h-[150px] bottom-[100px] bg-[#cbbda5] text-[#0f1821] writing-mode-vertical-rl rotate-180 font-bold  rounded-l-none rounded-tr-[6px]
          rounded-br-[6px] cursor-pointer z-[1000] transition-colors duration-300  hover:bg-[#c2d6ef] tracking-[1.1px] text-[17px] shadow-[0_0_5px_rgba(0,0,0,0.3)] flex flex-col justify-center items-center gap-10"
      >
        <p className="rotate-90 font-bold text-[#9f3323]">Legacy</p>
        {/* <img src="/logo.png" alt="logo" className="h-5 w-5 rotate-90" /> */}
        <p className="rotate-180 text-[#9f3323] translate-y-[15px]">R</p>
      </button>
    </div>
  );
}

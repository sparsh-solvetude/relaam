"use client";

import { useState } from "react";

export default function RebrandBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div
      className="w-full flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center bg-[#cbbda5] text-black px-4 py-6 md:py-3 text-center relative top-0"
      style={{ minHeight: "250px" }}
    >
      <img
        src="https://www.adcp.ae/system/images/adcp-logo-white.svg"
        alt="logo"
        className="h-24"
      />
      <span className="text-lg text-[#9f3323] md:mt-4">is now</span>
      <img src="/logo.webp" alt="logo" className="h-20" />
    </div>
  );
}
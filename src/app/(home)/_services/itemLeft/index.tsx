import React from "react";

export const ItemLeft = ({ image, title }: any) => {
  return (
    <div className="bg-white relative rounded-2xl overflow-hidden flex flex-col md:flex-row shadow-lg border border-[#9f351773]">
      <div className="h-60 right-0 top-0 w-full md:w-1/3 relative overflow-hidden">
        <img
          src={image || "/images/white-house.jpg"}
          alt="property"
          className="h-full w-full z-0 object-cover"
        />
        <div className="absolute h-full left-0 top-0 w-full z-10 bg-gradient-to-l from-white to-transparent hidden md:block"></div>
      </div>

      <div className="p-8 z-20 relative w-full md:w-2/3 flex flex-col items-start gap-4 justify-center">
        <h2 className="text-3xl font-bold">{title || "MIRA Homes"}</h2>
        <p className="font-light opacity-80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
          elit et nisi tincidunt maximus. Duis at facilisis massa tincidunt maximus.
        </p>
        <button className="border-2 border-[#9f3517] text-[#9f3517] px-6 py-2 rounded-md flex items-center gap-2 font-bold hover:bg-white hover:border-white transition-all duration-500 mt-2">
          <img src="/icons/whatsapp.svg" alt="chat" className="h-6" />
          Chat
        </button>
      </div>
    </div>
  );
};

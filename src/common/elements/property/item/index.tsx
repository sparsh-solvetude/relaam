import Link from "next/link";
import React from "react";

export const Item = ({ image, slug, name, location, price, icon }: any) => {
  return (
    <Link href="/[slug]" as={`/${slug}`}>
      <div className="bg-white px-4 py-8 rounded-xl text-center flex flex-col items-center gap-1 mr-3 h-[30rem] overflow-hidden relative cursor-pointer border-2 border-transparent hover:border-[#9f3517]">
        <img
          src={image}
          alt={name}
          className="w-full h-full absolute left-0 top-0 object-cover rounded-xl"
        />
        <button className="absolute right-4 top-4 bg-dark p-1 rounded-full opacity-70 hover:opacity-100">
          <img src="/icons/arrow.svg" alt="arrow" className="h-8 rotate-0" />
        </button>

        <div className="absolute left-4 bottom-4 right-4 z-10 bg-white p-4 rounded-xl flex flex-col items-start gap-0">
          <div className="mb-2 text-[#9f3517]">{icon}</div>

          <h3 className="text-xl font-bold">{name}</h3>
          <div className="flex items-end gap-1">
            <h4 className="text-2xl font-black text-[#9f3323]">{price}</h4>
          </div>

          <div className="flex gap-1 mt-2 items-center">
            <img src="/icons/location.svg" alt="Location" className="h-4" />
            <p className="text-xs opacity-80">{location}</p>
            <img src="/icons/bed.svg" alt="Beds" className="h-4 ml-2" />
            <p className="text-xs opacity-80">2 Beds</p>
          </div>

          <p className="text-xs opacity-80 ml-5">Property type - Flat</p>

          <div className="flex items-center justify-between w-full">
            <div className="flex items-center mt-2 gap-2">
              <button className="bg-white border border-[#1E1E1E] hover:bg-gray p-1.5 h-10 md:h-8 rounded-full">
                <img src="/icons/cta/call.svg" alt="call" className="h-full" />
              </button>
              <button className="bg-white border border-[#1E1E1E] hover:bg-gray p-1.5 h-10 md:h-8 rounded-full">
                <img
                  src="/icons/cta/whatsapp.svg"
                  alt="whatsapp"
                  className="h-full"
                />
              </button>
              <button className="bg-white border border-[#1E1E1E] hover:bg-gray p-1.5 h-10 md:h-8 rounded-full">
                <img
                  src="/icons/cta/submit.svg"
                  alt="submit"
                  className="h-full"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

import Image from "next/image";
import React from "react";

const SignaturePage = () => {
  return (
    <div className="py-8 md:py-16 px-4 md:px-12 lg:px-32">
      <div className="mb-12 text-center opacity-80">
        <p className="text-sm tracking-widest text-[#9f3323] font-semibold uppercase mb-3">
         Signature Projects
        </p>
        <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
          ABU DHABI’S #1
        </h1>
      </div>

      <div className="flex flex-col md:flex-row  gap-4 md:gap-8 w-full bg-slate-100">
        <div className="h-[300px] w-full md:w-2/5 relative overflow-hidden hover:shadow-lg">
          <Image
            src="/images/atlantis.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="w-full md:w-3/5">
          <div className=" flex flex-col justify-around w-full h-full px-4">
           <div>
             <p className="text-[28px] text-[#9f3323] leading-relaxed tracking-wide w-full md:w-3/5">
              AD One
            </p>
            <p>Luxury Apartments | Showrooms | Shops</p>
           </div>
            
            <button className="p-2 bg-slate-200 my-4 w-32 md:w-48 uppercase text-[12px] text-[#0000008c]">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignaturePage;

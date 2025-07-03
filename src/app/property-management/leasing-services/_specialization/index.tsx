import React from "react";

export const Specialization = () => {
  return (
    <div className="bg-white">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 py-28 grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className=" text-black flex flex-col justify-center items-start gap-6 pr-0 md:pr-16">
          <h2 className="text-5xl font-bold mb-6 leading-base">
            <span className="text-orange">RELAAM</span> Specialization in Dubai
            Real Estate
          </h2>
          <p className="font-light opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
            elit et nisi tincidunt maximus. Duis at facilisis massa. Vestibulum
            ut libero id libero varius pharetra vitae vitae massa. Nullam
            vulputate fringilla tellus.
          </p>
          <p className="font-light opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
            elit et nisi tincidunt maximus. Duis at facilisis massa. Vestibulum
            ut libero id libero varius pharetra vitae vitae massa. Nullam
            vulputate fringilla tellus.
          </p>
        </div>
        <div className="flex items-center gap-6 h-[20rem] md:h-[34rem]">
          <img
            src="/images/burj-khalifa-view.jpg"
            alt="expert"
            className="w-3/5 h-full object-cover rounded-xl"
          />
          <div className="flex flex-col gap-6 w-2/5 h-full">
          <img
            src="/images/foggy.jpg"
            alt="expert"
            className="w-full h-1/2 object-cover rounded-xl"
          />
          <img
            src="/images/atlantis.jpg"
            alt="expert"
            className="w-full h-1/2 object-cover rounded-xl"
          />
          </div>
        </div>
      </div>
    </div>
  );
};

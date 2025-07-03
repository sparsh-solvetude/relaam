import React from "react";

export const Info = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 py-28 grid grid-cols-1 md:grid-cols-2 gap-24">
        <div className="relative h-[20rem] md:h-[30rem]">
          <img
            src="/images/office-hall.jpg"
            alt="expert"
            className="w-4/5 h-3/5 object-cover rounded-xl"
          />
          <img
            src="/images/working-man.jpg"
            alt="expert"
            className="w-3/5 h-4/5 object-cover rounded-xl absolute right-0 bottom-0"
          />
        </div>
        <div className="p-4 text-black flex flex-col justify-center items-start">
          <h2 className="text-6xl font-bold mb-6">
            <span className="text-orange">Expert</span> Property Management
          </h2>
          <p className="font-light opacity-80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
            elit et nisi tincidunt maximus. Duis at facilisis massa. Vestibulum
            ut libero id libero varius pharetra vitae vitae massa. Nullam
            vulputate fringilla tellus.
          </p>
        </div>
      </div>
    </>
  );
};

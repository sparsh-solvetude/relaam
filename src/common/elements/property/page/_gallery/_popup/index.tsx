import React from "react";

export const ImageModal = ({ slideSet, slide, nextSlide, prevSlide }: any) => {
  return (
    <div className="fixed left-0 top-0 w-screen h-dvh bg-black bg-opacity-80 flex items-center justify-center z-50 px-6 md:px-20 py-4 md:py-12">
      <div className="bg-transparent text-white h-full w-full rounded-2xl flex flex-col items-center relative">
        <img
          src={process.env.NEXT_PUBLIC_STRAPI_URL + slide?.attributes?.url}
          className="w-full h-full object-contain rounded-xl"
          alt="img"
        />
      </div>
      <div className="absolute top-4 right-4">
        <button
          className="bg-dark p-1 rounded-full hover:bg-dark-2"
          onClick={() => slideSet(null)}
        >
          <img src="/icons/close.svg" alt="close" className="h-8" />
        </button>
      </div>
      {/* left arrow */}
      <div className="absolute top-1/2 left-2 md:left-4 opacity-70">
        <button
          className="bg-dark p-1 rounded-full hover:bg-dark-2"
          onClick={prevSlide}
        >
          <img src="/icons/slide-arrow.svg" alt="left" className="h-10" />
        </button>
      </div>
      {/* right arrow */}
      <div className="absolute top-1/2 right-2 md:right-4 opacity-70">
        <button
          className="bg-dark p-1 rounded-full hover:bg-dark-2"
          onClick={nextSlide}
        >
          <img
            src="/icons/slide-arrow.svg"
            alt="right"
            className="h-10 transform rotate-180"
          />
        </button>
      </div>
    </div>
  );
};

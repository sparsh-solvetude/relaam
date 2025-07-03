import React from "react";

export const VideoModal = ({ showModalSet, video }: any) => {
  return (
    <div className="fixed left-0 top-0 w-screen h-dvh bg-black bg-opacity-50 flex items-center justify-center z-50 px-0 md:px-20 py-0 md:py-12">
      <div className="bg-dark text-white h-full w-full md:rounded-2xl flex flex-col items-center border border-dark-2 relative shadow-2xl">
        <video
          src={video}
          className="w-full h-full object-contain md:rounded-xl"
          controls
          autoPlay
        />
      </div>
      <div className="absolute top-1 md:top-4 right-1 md:right-4">
        <button
          className="bg-dark p-1 rounded-full hover:bg-dark-2"
          onClick={() => showModalSet(false)}
        >
          <img src="/icons/close.svg" alt="close" className="h-8" />
        </button>
      </div>
    </div>
  );
};

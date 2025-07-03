import React from "react";

export default function Item({ image, name }: { image: string; name: string }) {
  return (
    <div className="flex flex-col items-center gap-2 bg-dark px-8 py-6 rounded-xl">
      <img src={image} alt="arrow" className="h-12" />
      <p className="text-xl font-bold text-center">{name}</p>
    </div>
  );
}

import React from "react";

export default function Item({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
}) {
  return (
    <div className="p-4 bg-dark-2 rounded-lg">
      <div className="flex items-center gap-1">
        <img
          src={process.env.NEXT_PUBLIC_STRAPI_URL + icon}
          alt="area"
          className="w-6 h-6"
        />
        <h3 className="text-sm font-light opacity-60">{title}</h3>
      </div>
      <h3 className="text-2xl font-bold">{value}</h3>
    </div>
  );
}

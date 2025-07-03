import clsx from "clsx";
import React, { useState } from "react";
import { CountrySelector } from "react-international-phone";

export default function PhoneNumber() {
  const [country, setCountry] = useState("ua");

  return (
    <div className="flex items-center w-full">
      <div className="rounded-l-lg px-4 h-12 bg-white flex items-center justify-center">
        <CountrySelector
          selectedCountry="ae"
          onSelect={({ iso2 }) => setCountry(iso2)}
          className="border-none"
        />
      </div>
      <input
        type="text"
        placeholder="055 555 5555"
        className={"w-full text-dark px-4 py-3 rounded-r-lg focus:outline-none"}
      />
    </div>
  );
}

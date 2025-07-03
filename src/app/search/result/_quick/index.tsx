"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export const QuickLink = ({}: any) => {
  return (
    <div className="w-full py-6 md:py-12 bg-[#FBEFE7]">
      <div className=" m-auto w-full relative max-w-screen-2xl px-6 md:px-16">
        <h2 className="text-2xl text-theme-dark-green font-bold ">
          Quick Links
        </h2>
        <div className="flex flex-col md:flex-row items-start justify-center gap-6 mt-6">
          <div className="w-full md:w-1/5">
            <div className="text-sm font-bold mb-4">
              Dubai’s Popular Location
            </div>
            <div className="flex flex-col gap-2">
              {[
                "Downtown Dubai",
                "Palm Jumeirah",
                "Dubai Marina",
                "Emirates Hills",
                "Business Bay",
                "Jumeirah Beach Residence",
                "City Walk",
                "Arabian Ranches",
                "Al Barari",
                "Bluewaters Island",
                "DIFC",
                "Meydan",
                "Dubai Hills Estate",
                "Jumeirah Golf Estates",
                "MBR City",
              ].map((location, index) => (
                <Link href="/" className="text-sm">
                  {location}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/5">
            <div className="text-sm font-bold mb-4">Property Types</div>
            <div className="flex flex-col gap-2">
              {[
                "Villas",
                "Apartments",
                "Penthouses",
                "Townhouses",
                "Mansions",
                "Plots/Land",
                "Duplexes",
                "Lofts",
                "Studios",
                "Offices",
                "Retail Spaces",
                "Warehouses",
                "Off-Plan Properties",
                "Luxury Estates",
                "Furnished Properties",
              ].map((location, index) => (
                <Link href="/" className="text-sm">
                  {location}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/5">
            <div className="text-sm font-bold mb-4">Projects</div>
            <div className="flex flex-col gap-2">
              {[
                "Al Quoz Dubai",
                "Emirates Hills",
                "Pro Al Manara Dubai",
                "Emirates Hills Dubai",
                "Al Quoz Dubai",
                "Emirates Hills",
                "Pro Al Manara Dubai",
                "Emirates Hills Dubai",
              ].map((location, index) => (
                <Link href="/" className="text-sm">
                  {location}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/5">
            <div className="text-sm font-bold mb-4">Million Homes Agents</div>
            <div className="flex flex-col gap-2">
              {[
                "Emaar Properties",
                "Nakheel",
                "Damac Properties",
                "Dubai Properties",
                "Meraas",
                "Sobha Realty",
                "Aldar Properties",
                "Ellington Properties",
                "Select Group",
                "Deyaar",
                "Omniyat",
                "MAG Lifestyle Development",
                "Azizi Developments",
                "Bloom Holding",
                "Seven Tides",
              ].map((location, index) => (
                <Link href="/" className="text-sm">
                  {location}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/5">
            <div className="text-sm font-bold mb-4">
              Million Homes Real Estate
            </div>
            <div className="flex flex-col gap-2">
              {[
                "Work with us",
                "Agent",
                "Career",
                "Privacy Policy",
                "Terms & Conditions",
              ].map((location, index) => (
                <Link href="/" className="text-sm">
                  {location}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

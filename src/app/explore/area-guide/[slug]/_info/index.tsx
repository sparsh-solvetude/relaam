"use client";

import React, { useEffect, useState } from "react";
import Select from "react-select";

export const Info = ({ }: any) => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-screen-2xl px-6 md:px-16 flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="w-full md:w-2/3">
          <div className="flex items-center justify-start gap-3 md:gap-4 w-full overflow-x-auto">
            <button className="bg-cream px-6 py-3 border-2 border-cream text-theme-dark-green rounded-full text-sm hover:bg-transparent">
              Highlights
            </button>
            <button className="bg-transparent px-6 py-3 border-2 border-cream text-theme-dark-green rounded-full text-sm hover:bg-cream">
              Nearby Amenities
            </button>
            <button className="bg-transparent px-6 py-3 border-2 border-cream text-theme-dark-green rounded-full text-sm hover:bg-cream">
              Transportation & Accessibility
            </button>
            <button className="bg-transparent px-6 py-3 border-2 border-cream text-theme-dark-green rounded-full text-sm hover:bg-cream">
              Key Attractions
            </button>
          </div>

          <h2 className="text-2xl font-semibold text-theme-dark-green mt-8">
            About Jumeriah Park
          </h2>
          <p className="text-md text-theme-dark-green mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            incididunt ut labore etLorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do incididunt ut labore etLorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur.
          </p>
          <div className="flex items-center justify-start gap-10 mt-6 flex-wrap">
            <div>
              <div className="flex items-center justify-start gap-2">
                <img src="/icons/metro.svg" alt="metro" className="w-5 h-5" />
                <span className="text-md text-theme-dark-green font-bold">
                  Metro Station
                </span>
              </div>
              <div className="flex items-center justify-between gap-6 mt-4">
                <div>
                  <div className="text-md">
                    Dubai Internet City Metro Station 2
                  </div>
                  <div className="text-[#6F6F6F] text-md">685 m</div>
                </div>
                <div>
                  <div className="text-md">Mall of Emirates</div>
                  <div className="text-[#6F6F6F] text-md">2.5 km</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-start gap-2">
                <img src="/icons/bus.svg" alt="bus" className="w-5 h-5" />
                <span className="text-md text-theme-dark-green font-bold">
                  Bus Stop
                </span>
              </div>
              <div className="flex items-center justify-between gap-6 mt-4">
                <div>
                  <div className="text-md">
                    Dubai Internet City Metro Station 2
                  </div>
                  <div className="text-[#6F6F6F] text-md">685 m</div>
                </div>
                <div>
                  <div className="text-md">Mall of Emirates</div>
                  <div className="text-[#6F6F6F] text-md">2.5 km</div>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-[#D9D9D9] mt-8 mb-10" />
          <h2 className="text-2xl font-semibold text-theme-dark-green">
            Residential Options in Jumeriah Park
          </h2>
          <h3 className="text-md font-black text-theme-dark-green mt-4">
            Rental prices in Jumeriah Park
          </h3>
          <p className="text-md text-theme-dark-green mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            incididunt ut labore etLorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do incididunt ut labore etLorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur.
          </p>
          <table className="mt-6 border border-[#F7EFEB]">
            <thead className="bg-[#F7EFEB]">
              <th className="text-theme-dark-green text-sm font-semibold py-4 px-4 uppercase w-1/3 md:w-60 text-start">
                Size
              </th>
              <th className="text-theme-dark-green text-sm font-semibold py-4 pl-4 pr-8 uppercase text-start">
                Average Price Range (AED/year)
              </th>
            </thead>
            <tbody className="py-2">
              <tr className="border-b border-[#F7EFEB]">
                <td className="text-theme-dark-green text-sm py-2 px-4">
                  3 Bedroom
                </td>
                <td className="text-theme-dark-green text-sm py-2 pl-4 pr-8">
                  160,000 - 410,000
                </td>
              </tr>
              <tr className="border-b border-[#F7EFEB]">
                <td className="text-theme-dark-green text-sm py-2 px-4">
                  4 Bedroom
                </td>
                <td className="text-theme-dark-green text-sm py-2 pl-4 pr-8">
                  200,000 - 500,000
                </td>
              </tr>
              <tr className="border-b border-[#F7EFEB]">
                <td className="text-theme-dark-green text-sm py-2 px-4">
                  5 Bedroom
                </td>
                <td className="text-theme-dark-green text-sm py-2 pl-4 pr-8">
                  250,000 - 600,000
                </td>
              </tr>
              <tr className="border-b border-[#F7EFEB]">
                <td className="text-theme-dark-green text-sm py-2 px-4">
                  6 Bedroom
                </td>
                <td className="text-theme-dark-green text-sm py-2 pl-4 pr-8">
                  300,000 - 700,000
                </td>
              </tr>
            </tbody>
          </table>
          <h3 className="text-md font-black text-theme-dark-green mt-4">
            Sale prices in Jumeriah Park
          </h3>
          <p className="text-md text-theme-dark-green mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            incididunt ut labore etLorem ipsum dolor sit amet, consectetur
            adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do incididunt ut labore etLorem ipsum dolor sit amet,
            consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur.
          </p>
          <table className="mt-6 border border-[#F7EFEB]">
            <thead className="bg-[#F7EFEB]">
              <th className="text-theme-dark-green text-sm font-semibold py-4 px-4 uppercase w-1/3 md:w-60 text-start">
                Size
              </th>
              <th className="text-theme-dark-green text-sm font-semibold py-4 pl-4 pr-8 uppercase text-start">
                Average Price Range (AED/year)
              </th>
            </thead>
            <tbody className="py-2">
              <tr className="border-b border-[#F7EFEB]">
                <td className="text-theme-dark-green text-sm py-2 px-4">
                  3 Bedroom
                </td>
                <td className="text-theme-dark-green text-sm py-2 pl-4 pr-8">
                  160,000 - 410,000
                </td>
              </tr>
              <tr className="border-b border-[#F7EFEB]">
                <td className="text-theme-dark-green text-sm py-2 px-4">
                  4 Bedroom
                </td>
                <td className="text-theme-dark-green text-sm py-2 pl-4 pr-8">
                  200,000 - 500,000
                </td>
              </tr>
              <tr className="border-b border-[#F7EFEB]">
                <td className="text-theme-dark-green text-sm py-2 px-4">
                  5 Bedroom
                </td>
                <td className="text-theme-dark-green text-sm py-2 pl-4 pr-8">
                  250,000 - 600,000
                </td>
              </tr>
              <tr className="border-b border-[#F7EFEB]">
                <td className="text-theme-dark-green text-sm py-2 px-4">
                  6 Bedroom
                </td>
                <td className="text-theme-dark-green text-sm py-2 pl-4 pr-8">
                  300,000 - 700,000
                </td>
              </tr>
            </tbody>
          </table>

          <hr className="border-[#D9D9D9] mt-8 mb-10" />
          <h2 className="text-2xl font-semibold text-theme-dark-green">
            Nearby Amenities
          </h2>
          <h3 className="text-md font-black text-theme-dark-green mt-4">
            Schools in Jumeriah Park
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            {[1, 2, 3, 4].map((index) => (
              <div className="flex flex-col items-start justify-start gap-2">
                <img
                  src="/images/listing/property-4.jpg"
                  alt="school"
                  className="w-full h-48 object-cover rounded-sm"
                />
                <div className="text-md text-theme-dark-green font-semibold">
                  Dubai Carmel School
                </div>
                <div className="text-theme-dark-green text-md mt-2">
                  Al Nahda 2, Dubai, United Arab Emirates
                </div>
                <div className="flex items-center justify-start gap-1.5 mt-2">
                  <img
                    src="/icons/location-gray.svg"
                    alt="location"
                    className="w-4 h-4"
                  />
                  <span className="text-[#6F6F6F] text-md">
                    Distance: 2.44KM
                  </span>
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-md font-black text-theme-dark-green mt-4">
            Hospitals in Jumeriah Park
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
            {[1, 2, 3, 4].map((index) => (
              <div className="flex flex-col items-start justify-start gap-2">
                <img
                  src="/images/listing/property-4.jpg"
                  alt="school"
                  className="w-full h-48 object-cover rounded-sm"
                />
                <div className="text-md text-theme-dark-green font-semibold">
                  Dubai Carmel School
                </div>
                <div className="text-theme-dark-green text-md mt-2">
                  Al Nahda 2, Dubai, United Arab Emirates
                </div>
                <div className="flex items-center justify-start gap-1.5 mt-2">
                  <img
                    src="/icons/location-gray.svg"
                    alt="location"
                    className="w-4 h-4"
                  />
                  <span className="text-[#6F6F6F] text-md">
                    Distance: 2.44KM
                  </span>
                </div>
              </div>
            ))}
          </div>

          <hr className="border-[#D9D9D9] mt-8 mb-10" />
          <h2 className="text-2xl font-semibold text-theme-dark-green">
            Explore the Location
          </h2>
          <div className="flex flex-col md:flex-row items-start justify-between gap-4 mt-8">
            <div className="w-full md:w-2/3 text-theme-dark-green">
              Marasi Dr - Business Bay - Dubai - United Arab Emirates, Dubai,
              Dubai, United Arab Emirates.
            </div>
            <div className="w-full md:w-1/3 flex items-center justify-start md:justify-end gap-2 text-theme-dark-green font-bold underline text-sm">
              See on Google Map
              <img
                src="/icons/arrow-right-top-green.svg"
                alt="arrow"
                className="h-3 md:h-3"
              />
            </div>
          </div>
          {/* Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14493.000000000002!2d55.27600000000001!3d25.186000000000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b7f6b7f6b7f%3A0x3e5f6b7f6b7f6b7f!2sBusiness%20Bay%2C%20Dubai%2C%20United%20Arab%20Emirates!5e0!3m2!1sen!2sin!4v1632210000000!5m2!1sen!2sin"
            className="w-full h-72 mt-6"
            loading="lazy"
          ></iframe>
          <div className="mt-8 text-theme-dark-green underline font-bold text-sm">
            View 1,153 more listings in Business Bay
          </div>

          <hr className="border-[#D9D9D9] mt-8 mb-10" />
        </div>
        <div className="w-full md:w-1/3 border border-[#DABDA9] p-6 hidden md:block">
          <h2 className="text-2xl text-theme-dark-green mb-6">
            Schedule a call with an area specialist.
          </h2>
          <div className="flex items-center justify-start gap-6 mb-6">
            <img
              src="/images/agent.jpg"
              alt="property"
              className="w-20 h-20 object-cover rounded-full"
            />
            <div className="flex flex-col items-start justify-between gap-0.5">
              <div className="flex items-center justify-start gap-2">
                <h3 className="text-md font-semibold text-theme-dark-green">
                  Mohammad AL-Bake
                </h3>
              </div>
              <p className="text-sm text-[#6F6F6F]">
                Relaam Real Estate
              </p>
              <div className="flex items-center justify-start gap-1 mt-0.5">
                <img
                  src="/icons/verified.svg"
                  alt="verified"
                  className="w-4 h-4"
                />
                <span className="text-xs text-[#0071FF]">Verified</span>
              </div>
            </div>
          </div>
          <input
            type="text"
            placeholder="Name"
            className="w-full px-5 py-3 bg-[#F8F8F7] border border-[#D9D9D9] mb-2"
          />
          <input
            type="text"
            placeholder="E-mail address"
            className="w-full px-5 py-3 bg-[#F8F8F7] border border-[#D9D9D9] mb-2"
          />
          <input
            type="text"
            placeholder="Number"
            className="w-full px-5 py-3 bg-[#F8F8F7] border border-[#D9D9D9] mb-2"
          />
          <textarea
            className="w-full h-28 px-5 py-3 bg-[#F8F8F7] border border-[#D9D9D9] mb-2"
            placeholder="You can type your message here, our agent will get back to you."
          ></textarea>
          <button className="flex items-center justify-center gap-4 px-5 py-4 text-theme-dark-green bg-[#DABDA9] border border-[#DABDA9] mt-6 font-black w-full uppercase">
            Submit
            <img
              src="/icons/arrow-right-dark-green.svg"
              alt="arrow"
              className="w-4 h-4"
            />
          </button>
          <hr className="border-[#DABDA9] my-8" />
          <div className="flex items-center justify-center gap-6">
            <button className="bg-white text-theme-dark-green text-sm border border-theme-dark-green px-6 py-2 flex items-center justify-center gap-4">
              Call Now
              <img src="/icons/call.svg" alt="call" className="w-4 h-4" />
            </button>
            <button className="bg-white text-theme-dark-green text-sm border border-theme-dark-green px-6 py-2 flex items-center justify-center gap-4">
              Whatsapp
              <img
                src="/icons/social/whatsapp.svg"
                alt="call"
                className="w-5 h-5"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

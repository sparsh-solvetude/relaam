"use client";

import { X } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Select from "react-select";

export const Filter = ({ setShowFilter }: any) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-[999] flex items-start justify-start">
      <div className="w-full md:w-1/3 h-full bg-white flex flex-col justify-between items-start">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#fff0ec] w-full">
          <div className="text-theme-dark-green text-md font-bold">Filters</div>
          <button
            onClick={() => setShowFilter(false)}
            className="flex items-center justify-center w-8 h-8 border border-cream rounded-full"
          >
            <X className="h-4 w-4 " />
          </button>
        </div>
        <div className="px-6 py-4 h-full w-full overflow-y-auto">
          <div className="mb-8">
            <div className="text-theme-dark-green text-sm font-bold uppercase mb-2">
              Location
            </div>
            <Select
              isMulti
              name="colors"
              options={[
                { value: "Business Bay", label: "Business Bay" },
                { value: "Downtown Dubai", label: "Downtown Dubai" },
                { value: "Dubai Marina", label: "Dubai Marina" },
                {
                  value: "Jumeirah Lake Towers",
                  label: "Jumeirah Lake Towers",
                },
              ]}
              // className="basic-multi-select"
              // classNamePrefix="select"
              // remove dividers
              styles={{
                control: (styles) => ({
                  ...styles,
                  backgroundColor: "#F7EFEB4D",
                  borderColor: "#9f3417",
                  borderRadius: 0,
                  width: "100%",
                  fontSize: "14px",
                  padding: "6px 8px",
                }),
                // selected item style
                multiValue: (styles) => ({
                  ...styles,
                  backgroundColor: "transparent",
                  fontSize: "16px",
                  fontWeight: "500",
                }),
              }}
              components={{
                IndicatorSeparator: () => null,
              }}
            />
          </div>
          <div className="mb-8">
            <div className="text-theme-dark-green text-sm font-bold uppercase mb-2">
              Property Type
            </div>
            <div className="flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="type"
                  id="apartment"
                  className="w-4 h-4 rounded-none"
                />
                <label htmlFor="apartment" className="text-[#6F6F6F] text-sm">
                  Apartment
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="type"
                  id="house"
                  className="w-4 h-4 rounded-none"
                />
                <label htmlFor="house" className="text-[#6F6F6F] text-sm">
                  Villa
                </label>
              </div>
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  name="type"
                  id="land"
                  className="w-4 h-4 rounded-none"
                />
                <label htmlFor="land" className="text-[#6F6F6F] text-sm">
                  Townhouse
                </label>
              </div>
            </div>
          </div>
          <div className="mb-8">
            <div className="text-theme-dark-green text-sm font-bold uppercase mb-2">
              Price Stage
            </div>
            <div className="flex items-center gap-0">
              <button className="px-10 py-3 text-theme-dark-green bg-[#F7EFEB] border border-[#9f3417] text-xs font-bold">
                Ready
              </button>
              <button className="px-10 py-3 text-[#6F6F6F] bg-transparent border border-[#9f3417] text-xs font-bold">
                Offplan
              </button>
            </div>
          </div>
          <div className="mb-8">
            <div className="text-theme-dark-green text-sm font-bold uppercase mb-2">
              Handover Year
            </div>
            <Select
              name="colors"
              options={[
                { value: "2025", label: "2025" },
                { value: "2026", label: "2026" },
                { value: "2027", label: "2027" },
              ]}
              placeholder="Please Select"
              styles={{
                control: (styles) => ({
                  ...styles,
                  backgroundColor: "#F7EFEB4D",
                  borderColor: "#9f3417",
                  borderRadius: 0,
                  width: "100%",
                  fontSize: "14px",
                  padding: "6px 8px",
                }),
                // selected item style
                multiValue: (styles) => ({
                  ...styles,
                  backgroundColor: "transparent",
                  fontSize: "16px",
                  fontWeight: "500",
                }),
              }}
              components={{
                IndicatorSeparator: () => null,
              }}
            />
          </div>
          {/* Construction Status */}
          <div className="mb-8">
            <label
              className="text-theme-dark-green text-sm font-bold uppercase mb-2"
              htmlFor="construction-status"
            >
              Construction Status
            </label>
            <div className="flex items-start justify-between gap-6">
              <div className="w-full">
                <input
                  type="range"
                  min="1"
                  max="100"
                  // value="30"
                  className="w-full"
                  id="construction-status"
                />
                <div className="flex justify-between">
                  <span className="text-[#6F6F6F] text-xs">0%</span>
                  <span className="text-[#6F6F6F] text-xs">100%</span>
                </div>
              </div>
              <div className="flex items-center justify-end w-20">30%</div>
            </div>
          </div>
          {/* Post Handover Payment Period */}
          <div className="mb-8">
            <label
              className="text-theme-dark-green text-sm font-bold uppercase mb-2"
              htmlFor="post-handover-payment-period"
            >
              Post Handover Payment Period
            </label>
            <div className="flex items-start justify-between gap-6">
              <div className="w-full">
                <input
                  type="range"
                  min="1"
                  max="100"
                  // value="30"
                  className="w-full"
                  id="post-handover-payment-period"
                />
                <div className="flex justify-between">
                  <span className="text-[#6F6F6F] text-xs">1 year</span>
                  <span className="text-[#6F6F6F] text-xs">10 years</span>
                </div>
              </div>
              <div className="flex items-center justify-end w-20">3 years</div>
            </div>
          </div>
          {/* Post Handover Payment %age */}
          <div className="mb-8">
            <label
              className="text-theme-dark-green text-sm font-bold uppercase mb-2"
              htmlFor="post-handover-payment-percentage"
            >
              Post Handover Payment %age
            </label>
            <div className="flex items-start justify-between gap-6">
              <div className="w-full">
                <input
                  type="range"
                  min="1"
                  max="100"
                  // value="30"
                  className="w-full"
                  id="post-handover-payment-percentage"
                />
                <div className="flex justify-between">
                  <span className="text-[#6F6F6F] text-xs">0%</span>
                  <span className="text-[#6F6F6F] text-xs">100%</span>
                </div>
              </div>
              <div className="flex items-center justify-end w-20">30%</div>
            </div>
          </div>
          {/* Downpayment */}
          <div className="mb-8">
            <label
              className="text-theme-dark-green text-sm font-bold uppercase mb-2"
              htmlFor="downpayment"
            >
              Downpayment
            </label>
            <div className="flex items-start justify-between gap-6">
              <div className="w-full">
                <input
                  type="range"
                  min="1"
                  max="100"
                  // value="30"
                  className="w-full"
                  id="downpayment"
                />
                <div className="flex justify-between">
                  <span className="text-[#6F6F6F] text-xs">0 million aed</span>
                  <span className="text-[#6F6F6F] text-xs">1 million aed</span>
                </div>
              </div>
              <div className="flex items-center justify-end w-20">XX aed</div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="flex items-center justify-center gap-6 px-6 py-4 border-t border-[#fff0ec] w-full">
          <button className="px-10 py-3 text-[#6F6F6F] border border-[#6F6F6F] text-sm">
            Cancel
          </button>
          <button className="px-10 py-3 text-theme-dark-green bg-[#9f3417] text-sm border border-[#9f3417] text-white font-bold rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

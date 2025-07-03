"use client";

import React, { useState } from "react";
import { Download } from "../_download";

export const FloorPlan = ({
  docLink = null,
  FloorPlanDescription,
  FloorPlan,
}: {
  docLink?: string | null;
  FloorPlanDescription: string;
  FloorPlan: any;
}) => {
  const [showModal, showModalSet] = useState(false);

  return (
    <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 mb-28 text-white">
      <div className="flex items-start justify-between flex-col md:flex-row gap-8 md:gap-24">
        <div className="w-full md:w-1/2">
          <h2 className="text-4xl font-bold mb-6">Floor Plan</h2>
          <p className="font-light text-sm opacity-80">
            {FloorPlanDescription}
          </p>
        </div>
        {docLink && (
          <button
            className="bg-[#9f3517] text-white px-6 py-2 rounded-lg font-bold text-lg flex items-center gap-2 justify-center w-72 md:w-80"
            onClick={() => showModalSet(true)}
          >
            <img src="/icons/pdf.svg" alt="arrow" className="h-6" />
            Download Floor Plan
          </button>
        )}
      </div>

      <div className="border-2 overflow-x-scroll md:overflow-hidden  rounded-xl mt-8 border-white">
        <table className="min-w-full divide-y divide-white w-full">
          <thead>
            <tr className="divide-x-2 divide-white">
              <th
                scope="col"
                className="px-6 py-3 text-start text-md font-bold text-gray-500"
              >
                Floor Plan
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-md font-bold text-gray-500"
              >
                Category
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-md font-bold text-gray-500"
              >
                Unit Type
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-start text-md font-bold text-gray-500"
              >
                Floor Details
              </th>

              <th
                scope="col"
                className="px-6 py-3 text-start text-md font-bold text-gray-500"
              >
                Sizes
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-2 divide-white">
            <tr className="divide-x-2 divide-white">
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                {docLink ? (
                  <img
                    src="/icons/copy.svg"
                    alt="copy"
                    className="h-6 cursor-pointer"
                    onClick={() => showModalSet(true)}
                  />
                ) : (
                  "-"
                )}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                {FloorPlan?.Category || "-"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                {FloorPlan?.UnitType || "-"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                {FloorPlan?.FloorDetail || "-"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                {FloorPlan?.Size || "-"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {showModal && (
        <Download
          showSet={showModalSet}
          title={"Download Floor Plan"}
          key="payment"
          docLink={docLink}
        />
      )}
    </div>
  );
};

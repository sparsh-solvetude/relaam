"use client";

import { useRef } from "react";
import RebrandBanner from "@/common/RebrandBanner";
import OurPortalsPage from "./ourPortalsPage";
import PropertySearchPage from "./propertySearchPage";

export const Search = () => {
  const searchRef = useRef(null);

  
  return (
    <div ref={searchRef} className="text-black h-auto md:h-screen">
      <RebrandBanner />
      <div>
        <div className="px-6 sx:py-0 md:py-20 mx-auto sm:px-12">
          {/* Only show this section on medium screens and up */}
          <div className="hidden md:flex justify-center gap-5">
            {/* Property Search */}
            <div className="w-3/5">
              <PropertySearchPage searchRef={searchRef} />
            </div>

            {/* Portals */}
            <div className="w-2/5">
              <OurPortalsPage searchRef={searchRef} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

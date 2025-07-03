import React from "react";
import { MobileDropdown } from "./dropdown";

export const MobileMenu = ({ showSet }: any) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-dark z-50">
      <div className="flex flex-col justify-start items-start gap-6 px-8 py-16 h-full w-full relative">
        <button
          className="absolute top-4 right-4"
          onClick={() => showSet(false)}
        >
          <img src="/icons/close.svg" alt="close" className="h-8" />
        </button>
        <a href="/about-us" className="text-white text-2xl font-bold">
          About
        </a>

        <MobileDropdown
          title="Why Dubai?"
          items={[
            { name: "Dubai Guide", link: "/" },
            { name: "Invest In Dubai", link: "/" },
          ]}
        />
        <MobileDropdown
          title="Properties"
          items={[
            { name: "Bentley Villas", link: "/property/bentley-villas" },
            { name: "Mira Oasis", link: "/property/mira-oasis" },
            { name: "Mira Townhouses", link: "/property/mira-townhouses" },
            { name: "Mira Villas", link: "/property/mira-villas" },
            { name: "View All", link: "/property" },
          ]}
        />
        <MobileDropdown
          title="News"
          items={[
            { name: "Blogs", link: "/blog" },
            { name: "Press Coverage", link: "/press-coverage" },
            { name: "Events", link: "/event" },
            { name: "View All", link: "/blog/latest-news" },
          ]}
        />
        <a href="/real-estate-agent-dubai" className="text-white text-2xl font-bold">
          Agent
        </a>
      </div>
    </div>
  );
};

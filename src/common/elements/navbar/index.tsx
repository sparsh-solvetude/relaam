"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Dropdown } from "./dropdown";
import clsx from "clsx";
import { MobileMenu } from "./mobile";

export const Navbar = ({ properties = [], areas = [] }) => {
  const [isOnTop, isOnTopSet] = useState(true);
  const [showMobileMenu, showMobileMenuSet] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY < 100;
      isOnTopSet(top);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={clsx("fixed top-0 left-0 w-full z-50", {
        "bg-dark-2 shadow-lg": !isOnTop,
        "bg-transparent": isOnTop,
      })}
    >
      <nav
        className="flex justify-between items-center bg-transparent py-4 px-6 sm:px-12 max-w-screen-2xl mx-auto text-md"
        role="navigation"
      >
        <Link href="/">
          <img src="/logo.webp" alt="logo" className="h-10 " />
        </Link>
        {/* Desktop */}
        <div className="space-x-7 hidden md:flex">
          <Link href="/about" className="text-white">
            About
          </Link>
          {/* <Dropdown
            title="Dubai Areas"
            items={[
              ...areas.map((area: any) => ({
                name: area.attributes?.Name,
                link: `/${area.attributes?.Slug}`,
              })),
            ]}
          /> */}
          <Dropdown
            title="Signature Projects"
            items={
              [
                ...properties.map((property: any) => ({
                  name: property.attributes?.Name,
                  link: `/${property.attributes?.Slug}`,
                })),
                { name: "View All", link: "/real-estate-dubai" },
              ]
            }
          />
          {/* <Dropdown
            title="News"
            items={[
              { name: "Blogs", link: "/blog" },
              { name: "Press Coverage", link: "/press-coverage" },
              { name: "Events", link: "/event" },
              { name: "View All", link: "/blog/latest-news" },
            ]}
          /> */}
          <Dropdown
            title="Property Management"
            items={[
              { name: "Landlord Services", link: "/property-management/landlord-services" },
              { name: "Leasing Services", link: "/property-management/leasing-services" },
              { name: "View All", link: "/property-management" },
            ]}
          />
          <Link href="/blog" className="text-white">
            Blog
          </Link>
          <Link href="/agent" className="text-white">
            Agent
          </Link>
        </div>
        {/* Mobile */}
        <div className="md:hidden">
          <button
            className="text-white cursor-pointer"
            onClick={() => showMobileMenuSet(true)}
          >
            <img src="/icons/menu.svg" alt="menu" className="h-6" />
          </button>
        </div>
      </nav>
      {showMobileMenu && <MobileMenu showSet={showMobileMenuSet} />}
    </div>
  );
};

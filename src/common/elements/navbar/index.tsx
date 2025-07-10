"use client";

import Link from "next/link";
import React, { useRef, useState } from "react";
import { MobileMenu } from "./mobile";
import { useRouter } from "next/navigation";
import { Modal } from "@/common/modal";
import PropertySearchPage from "@/app/(home)/_search/propertySearchPage";
import OurPortalsPage from "@/app/(home)/_search/ourPortalsPage";

export const Navbar = ({ properties = [], areas = [] }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [activeModal, setActiveModal] = useState<"search" | "contact" | null>(
    null
  );

  const searchRef = useRef(null);

  const router = useRouter();

  const handleMouseEnter = (menu: string) => {
    setOpenDropdown(menu);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const dropdownMenus = [
    {
      key: "about",
      label: "About Us",
      items: ["Relaam Legacy", "Recognition", "Leadership", "Newsroom"],
      description:
        "Learn more about our company values, team, and achievements.",
    },
    {
      key: "rent",
      label: "Rent",
      items: [
        "All Properties",
        "Apartments",
        "Villas",
        "Townhouses",
        "Offices",
        "Retail",
        "Warehouse",
      ],
      description:
        "Explore a variety of rental options tailored to your needs.",
    },
    {
      key: "property",
      label: "Property Management",
      items: ["Landlord Services", "Leasing Services"],
      description:
        "Comprehensive solutions for managing your real estate assets.",
    },
    {
      key: "facilities",
      label: "Facilities Management",
      items: ["Landlords Services", "Tenants Services", "Contractors Services"],
      description: "Reliable and efficient facility support and maintenance.",
    },
    {
      key: "explore",
      label: "Explore",
      items: [
        "Communities",
        "Property Blogs",
        "Market Report",
        "Signature Projects",
      ],
      description:
        "Insights, guides, and resources for property seekers and owners.",
    },
    {
      key: "contact",
      label: "Contact",
      items: ["Inquire via Lead Form", "Call", "WhatsApp"],
      description:
        "Get in touch with us for inquiries, support, or collaboration.",
    },
  ];

  const currentDropdown = dropdownMenus.find(
    (menu) => menu.key === openDropdown
  );

  return (
    <div>
      <nav
        onMouseLeave={handleMouseLeave}
        className={`transition-all duration-300 overflow-hidden  absolute w-full z-50 
          ${
            openDropdown
              ? "h-[50vh] bg-[#e9e7e4] text-[#101820]"
              : "h-[75px] bg-gray-900 text-white bg-[#0f1821]"
          }
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">
          <Link href="/">
            {openDropdown ? (
              <img src="/logo.png" alt="logo" className="h-10" />
            ) : (
              <img src="/logo.webp" alt="logo" className="h-10" />
            )}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 pt-4">
            {dropdownMenus.map((menu) => {
              const isActive = openDropdown === menu.key;
              return (
                <div
                  key={menu.key}
                  onMouseEnter={() => handleMouseEnter(menu.key)}
                  onClick={() => {
                    router.push(`/${menu.key}`);
                  }}
                  className={`cursor-pointer border-b-2 transition-all duration-300 ${
                    isActive ? "border-[#9f3323]" : "border-transparent"
                  }
                  `}
                >
                  <span>{menu.label}</span>
                </div>
              );
            })}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button
              onClick={() => setShowMobileMenu(true)}
              aria-label="Open mobile menu"
            >
              <img src="/icons/menu.svg" alt="menu" className="h-6" />
            </button>
          </div>
        </div>
        {openDropdown && (
          <div className="px-12 mt-4">
            <div className="border-b border-[#101820]" />
          </div>
        )}

        {currentDropdown && (
          <div className="flex px-12 pt-4 space-x-8">
            {/* Left: Title + Description */}
            <div className="w-1/2 mt-16">
              <div className="text-3xl font-bold mb-2 text-[#9f3323]">
                {currentDropdown.label}
              </div>
              <p className="text-[#101820] max-w-md">
                {currentDropdown.description}
              </p>
            </div>

            {/* Right: Dropdown Links */}
            <div className="w-1/2">
              <div
                className={` w-fit  grid gap-x-12 gap-y-4 ${
                  currentDropdown.items.length <= 4
                    ? "grid-cols-1"
                    : "grid-cols-2"
                }`}
              >
                {currentDropdown.items.map((item, index) => (
                  <div key={index} className="group hover:scale-[1.02] ">
                    <Link
                      href="#"
                      className="block text-[#435254] text-lg px-2 border-b border-[#101820] group-hover:border-[#9f3517] transition-all duration-300 ease-in-out"
                    >
                      {item}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile Menu Overlay */}
      {showMobileMenu && <MobileMenu showSet={setShowMobileMenu} />}

      <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-gray-300 flex justify-center items-center gap-5 py-3 shadow-md">
        <button
          onClick={() => setActiveModal("search")}
          className="text-[#0f1821] font-semibold bg-[#e9e7e4] px-4 py-2 rounded-full border border-[#0f1821] w-2/5"
        >
          Search
        </button>
        <button
          onClick={() => setActiveModal("contact")}
          className="text-white font-semibold bg-[#9f3323] px-4 py-2 rounded-full w-2/5"
        >
          Get in Touch
        </button>
      </div>
      <Modal isOpen={!!activeModal} onClose={() => setActiveModal(null)}>
        {activeModal === "search" && <PropertySearchPage searchRef={searchRef} isModal={true} />}
        {activeModal === "contact" && <OurPortalsPage searchRef={searchRef} isModal={true}  />}
      </Modal>
    </div>
  );
};

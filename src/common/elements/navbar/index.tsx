"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
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

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (currentScrollY > 20) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }, 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const dropdownMenus = [
    {
      key: "about",
      label: "About Us",
      items: [
        { label: "Relaam Legacy", href: "/" },
        { label: "Recognition", href: "/" },
        { label: "Leadership", href: "/" },
        { label: "Newsroom", href: "/" },
      ],
      description:
        "Learn more about our company values, team, and achievements.",
    },
    {
      key: "rent",
      label: "Rent",
      items: [
        { label: "All Properties", href: "/" },
        { label: "Apartments", href: "/" },
        { label: "Villas", href: "/rent/villas" },
        { label: "Townhouses", href: "/" },
        { label: "Offices", href: "/" },
        { label: "Retail", href: "/" },
        { label: "Warehouse", href: "/" },
      ],
      description:
        "Explore a variety of rental options tailored to your needs.",
    },
    {
      key: "property-management",
      label: "Property Management",
      items: [
        { label: "Landlord Services", href: "/property-management/landlord-services" },
        { label: "Leasing Services", href: "/property-management/leasing-services" },
      ],
      description:
        "Comprehensive solutions for managing your real estate assets.",
    },
    {
      key: "facilities",
      label: "Facilities Management",
      items: [
        { label: "Landlords Services", href: "/" },
        { label: "Tenants Services", href: "/" },
        { label: "Contractors Services", href: "/" },
      ],
      description: "Reliable and efficient facility support and maintenance.",
    },
    {
      key: "explore",
      label: "Explore",
      items: [
        { label: "Communities", href: "/" },
        { label: "Property Blogs", href: "/" },
        { label: "Market Report", href: "/" },
        { label: "Signature Projects", href: "/" },
      ],
      description:
        "Insights, guides, and resources for property seekers and owners.",
    },
    {
      key: "contact",
      label: "Contact",
      items: [
        { label: "Inquire via Lead Form", href: "/" },
        { label: "Call", href: "/" },
        { label: "WhatsApp", href: "/" },
      ],
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
                  <div key={index} className="group hover:scale-[1.02]">
                    <Link
                      href={item.href}
                      className="block text-[#435254] text-lg px-2 border-b border-[#101820] group-hover:border-[#9f3517] transition-all duration-300 ease-in-out"
                    >
                      {item.label}
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

      {scrolled && (
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#e4d5d4] border-t border-gray-100 flex justify-center items-center gap-5 py-5 shadow-md">
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
      )}

      <Modal
        isOpen={!!activeModal}
        onClose={() => setActiveModal(null)}
        activeModal={activeModal}
      >
        {activeModal === "search" && (
          <PropertySearchPage searchRef={searchRef} isModal={true} />
        )}
        {activeModal === "contact" && (
          <OurPortalsPage searchRef={searchRef} isModal={true} />
        )}
      </Modal>
    </div>
  );
};

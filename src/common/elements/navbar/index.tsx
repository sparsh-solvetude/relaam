"use client";

import Link from "next/link";
import React, { useState } from "react";
import clsx from "clsx";
import { MobileMenu } from "./mobile"; 

export const Navbar = ({ properties = [], areas = [] }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
      description: "Learn more about our company values, team, and achievements.",
    },
    {
      key: "rent",
      label: "Rent",
      items: ["All Properties", "Apartments", "Villas", "Townhouses", "Offices", "Retail", "Warehouse"],
      description: "Explore a variety of rental options tailored to your needs.",
    },
    {
      key: "property",
      label: "Property Management",
      items: ["Landlord Services", "Leasing Services"],
      description: "Comprehensive solutions for managing your real estate assets.",
    },
    {
      key: "facilities",
      label: "Facilities Management",
      items: ["Landlords Services", "Tenants Services", "Contractors Services"],
      description: "Reliable and efficient facility support and maintenance.",
    },
    {
      key: "projects",
      label: "Signature Projects",
      items: ["AD One", "Vera Building"],
      description: "Discover our flagship developments and architectural excellence.",
    },
    {
      key: "explore",
      label: "Explore",
      items: ["Communities", "Property Blogs", "Market Report"],
      description: "Insights, guides, and resources for property seekers and owners.",
    },
    {
      key: "contact",
      label: "Contact",
      items: ["Inquire via Lead Form", "Call", "WhatsApp"],
      description: "Get in touch with us for inquiries, support, or collaboration.",
    },
  ];

  const currentDropdown = dropdownMenus.find((menu) => menu.key === openDropdown);

  return (
    <div className="">
      <nav
        onMouseLeave={handleMouseLeave}
        className={`transition-all duration-300 overflow-hidden  absolute w-full z-50 
          ${openDropdown ? "h-[50vh] bg-[#e9e7e4] text-[#101820]" : "h-[75px] bg-gray-900 text-white bg-[#0f1821]"}
        `}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">

          <Link href="/" >
            {openDropdown ? (<img src="/logo.png" alt="logo" className="h-10" />) : (<img src="/logo.webp" alt="logo" className="h-10" />)}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 pt-4">
            {dropdownMenus.map((menu) => {
              const isActive = openDropdown === menu.key;
              return (
                <div
                  key={menu.key}
                  onMouseEnter={() => handleMouseEnter(menu.key)}
                  className={`cursor-pointer border-b-2 transition-all duration-300                     ${isActive ? "border-[#9f3323]" : "border-transparent"}
                  `}
                >
                  <span>{menu.label}</span>
                </div>
              );
            })}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden">
            <button onClick={() => setShowMobileMenu(true)} aria-label="Open mobile menu">
              <img src="/icons/menu.svg" alt="menu" className="h-6" />
            </button>
          </div>
        </div>
        {openDropdown && <div className="px-12 mt-4">
          <div className="border-b border-[#101820]" />
        </div>}


        {currentDropdown && (
          <div className="flex px-12 pt-4 space-x-8">
            {/* Left: Title + Description */}
            <div className="w-1/2 mt-16">
              <div className="text-3xl font-bold mb-2 text-[#9f3323]">{currentDropdown.label}</div>
              <p className="text-[#101820] max-w-md">{currentDropdown.description}</p>
            </div>

            {/* Right: Dropdown Links */}
            <div className="w-1/2">
              <div
                className={` w-fit  grid gap-x-12 gap-y-4 ${currentDropdown.items.length <= 4 ? "grid-cols-1" : "grid-cols-2"}`}
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
    </div>
  );
};


// "use client";

// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { Dropdown } from "./dropdown";
// import clsx from "clsx";
// import { MobileMenu } from "./mobile";

// export const Navbar = ({ properties = [], areas = [] }) => {
//   const [isOnTop, setIsOnTop] = useState(true);
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [dropdownTitle, setDropdownTitle] = useState("");

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsOnTop(window.scrollY < 100);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className={clsx(
//         "fixed top-0 left-0 w-full z-50 transition-colors duration-300",
//         {
//           "bg-dark-2 shadow-lg": !isOnTop || isDropdownOpen,
//           "bg-dark-2": isOnTop && !isDropdownOpen,
//         }
//       )}
//     >
//       <nav
//         className="flex justify-between items-center py-4 px-6 sm:px-12 max-w-screen-2xl mx-auto text-md"
//         role="navigation"
//       >
//         <Link href="/" className={clsx({
//           "relative z-10": isDropdownOpen,
//         })}>
//           {/* <img src="/logo.webp" alt="logo" className={clsx("h-10", {
//             "filter invert": isDropdownOpen,
//           })} /> */}
//           {isDropdownOpen ? (<img src="/logo.png" alt="logo" className="h-10" />):(<img src="/logo.webp" alt="logo" className="h-10" />) }

//         </Link>

//         {/* Desktop */}
//         <div className="space-x-3 hidden md:flex" style={{border: "4px solid red"}}>
//           <Dropdown
//             title="About Us"
//             items={[
//               { name: "Relaam Legacy", link: "" },
//               { name: "Recognition", link: "" },
//               { name: "Leadership", link: "" },
//               { name: "Newsroom", link: "" },
//             ]}
//             setDropdownOpen={setIsDropdownOpen}
//             setDropdownTitle={setDropdownTitle}
//             isDropdownOpen={isDropdownOpen}
//             isActive={dropdownTitle === "About Us"}
//           />
//           <Dropdown
//             title="Rent"
//             items={[
//               { name: "All Properties", link: "" },
//               { name: "Apartments", link: "" },
//               { name: "Villas", link: "" },
//               { name: "Townhouses", link: "" },
//               { name: "Offices", link: "" },
//               { name: "Retail", link: "" },
//               { name: "Warehouse", link: "" },
//             ]}
//             setDropdownOpen={setIsDropdownOpen}
//             setDropdownTitle={setDropdownTitle}
//             isDropdownOpen={isDropdownOpen}
//             isActive={dropdownTitle === "Rent"}
//           />
//           <Dropdown
//             title="Property Management"
//             items={[
//               {
//                 name: "Landlord Services",
//                 link: "/property-management/landlord-services",
//               },
//               {
//                 name: "Leasing Services",
//                 link: "/property-management/leasing-services",
//               },
//             ]}
//             setDropdownOpen={setIsDropdownOpen}
//             setDropdownTitle={setDropdownTitle}
//             isDropdownOpen={isDropdownOpen}
//             isActive={dropdownTitle === "Property Management"}
//           />
//           <Dropdown
//             title="Facilities Management"
//             items={[
//               { name: "Landlords Services", link: "" },
//               { name: "Tenants Services", link: "" },
//               { name: "Contractors Services", link: "" },
//             ]}
//             setDropdownOpen={setIsDropdownOpen}
//             setDropdownTitle={setDropdownTitle}
//             isDropdownOpen={isDropdownOpen}
//             isActive={dropdownTitle === "Facilities Management"}
//           />
//           <Dropdown
//             title="Signature Projects"
//             items={[
//               ...properties.map((property: any) => ({
//                 name: property.attributes?.Name,
//                 link: `/${property.attributes?.Slug}`,
//               })),
//               { name: "AD One", link: "/real-estate-dubai" },
//               { name: "Vera Building", link: "/real-estate-dubai" },
//             ]}
//             setDropdownOpen={setIsDropdownOpen}
//             setDropdownTitle={setDropdownTitle}
//             isDropdownOpen={isDropdownOpen}
//             isActive={dropdownTitle === "Signature Projects"}
//           />
//           <Dropdown
//             title="Explore"
//             items={[
//               { name: "Communities", link: "" },
//               { name: "Property Blogs", link: "" },
//               { name: "Market Report", link: "" },
//             ]}
//             setDropdownOpen={setIsDropdownOpen}
//             setDropdownTitle={setDropdownTitle}
//             isDropdownOpen={isDropdownOpen}
//             isActive={dropdownTitle === "Explore"}
//           />
//           <Dropdown
//             title="Contact"
//             items={[
//               { name: "Inquire via Lead Form", link: "" },
//               { name: "Call", link: "" },
//               { name: "WhatsApp", link: "" },
//             ]}
//             setDropdownOpen={setIsDropdownOpen}
//             setDropdownTitle={setDropdownTitle}
//             isDropdownOpen={isDropdownOpen}
//             isActive={dropdownTitle === "Contact"}
//           />
//         </div>

//         {/* Mobile */}
//         <div className="md:hidden">
//           <button
//             className="text-white cursor-pointer"
//             onClick={() => setShowMobileMenu(true)}
//           >
//             <img src="/icons/menu.svg" alt="menu" className="h-6" />
//           </button>
//         </div>
//       </nav>

//       {showMobileMenu && <MobileMenu showSet={setShowMobileMenu} />}
//     </div>
//   );
// };

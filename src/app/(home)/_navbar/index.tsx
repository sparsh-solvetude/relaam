"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";

// Type definitions
type SubmenuItem = {
  id: string;
  title: string;
  href: string;
};

type MenuItem = {
  id: number;
  title: string;
  href: string;
  hasSubmenu?: boolean;
  submenu?: SubmenuItem[];
};

type SecondaryMenuItem = {
  id: string;
  title: string;
  href: string;
};

// Data
const menuItems: MenuItem[] = [
  {
    id: 1,
    title: "About",
    href: "/about",
    hasSubmenu: true,
    submenu: [
      { id: "about-1", title: "Leadership Team", href: "/leadership" },
      { id: "about-2", title: "Careers", href: "/careers" },
      { id: "about-3", title: "Other Businesses", href: "/businesses" },
    ],
  },
  {
    id: 2,
    title: "Communities",
    href: "/communities",
    hasSubmenu: true,
    submenu: [
      { id: "community-1", title: "Community 1", href: "/community-1" },
      { id: "community-2", title: "Community 2", href: "/community-2" },
      { id: "community-3", title: "Community 3", href: "/community-3" },
    ],
  },
  {
    id: 3,
    title: "Collection",
    href: "/collection",
    hasSubmenu: true,
    submenu: [
      { id: "collection-1", title: "Gharbi II", href: "/collection-1" },
      { id: "collection-2", title: "Gharbi I", href: "/collection-2" },
      { id: "collection-3", title: "Nas 3", href: "/collection-3" },
    ],
  },
  {
    id: 4,
    title: "Get In Touch",
    href: "/contact",
    hasSubmenu: true,
    submenu: [
      { id: "contact-1", title: "Call", href: "/call" },
      { id: "contact-2", title: "WhatsApp", href: "/whatsapp" },
      { id: "contact-3", title: "Visit Sales Lounge", href: "/sales-lounge" },
    ],
  },
];

const secondaryMenu: SecondaryMenuItem[] = [
  { id: "sec-1", title: "Home", href: "/" },
  { id: "sec-2", title: "Partner as Agent", href: "/partner" },
];

const LuxuryNavbar = ({ dark = false, staticPosition = false }) => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<MenuItem | null>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [expandedSubmenu, setExpandedSubmenu] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMenu]);

  const toggleSubmenu = (id: number) => {
    setExpandedSubmenu(expandedSubmenu === id ? null : id);
  };

  const color = dark ? "black" : "white";

  return (
    <header className="w-full bg-transparent">
      {/* Main Navbar */}
      <div
        className={`top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "fixed py-2 bg-[#afafaf]/70 backdrop-filter backdrop-blur-lg bg-opacity-30"
            : staticPosition
            ? "py-5 bg-transparent"
            : "fixed py-5 bg-transparent"
        }`}
      >
        <div className="container mx-auto">
          <div className="flex items-center justify-between px-4 md:px-8">
            {/* Left section with Menu button */}
            <div className="flex items-center">
              <button
                className="relative z-20 cursor-pointer group p-2"
                onClick={() => setShowMenu(true)}
                aria-label="Toggle menu"
              >
                {/* Button hover background */}
                <div className="absolute inset-0 bg-[#9f3417]/0 group-hover:bg-[#9f3417]/10 rounded-full transition-all duration-300"></div>

                {/* Menu icon */}
                <Menu
                  size={24}
                  className={`${
                    dark ? "text-black" : "text-white"
                  } group-hover:text-[#900101] transition-colors duration-300`}
                />
              </button>
            </div>

            <Link href="/" className="relative flex items-center z-20">
              <div className="text-[#c8a97e]/90 text-xl md:text-2xl font-light tracking-[0.3em] uppercase">
                <img
                  src={`${dark ? "/logo-black.webp" : "/logo.webp"}`}
                  alt="Logo"
                  className="h-14 inline-block py-2"
                />
              </div>
            </Link>

            {/* Right-side elements */}
            <div className="flex items-center gap-4 z-50">
              {/* Language Toggle with hover effect */}
              <div
                className={`border ${
                  isScrolled ? "text-" + color : "border-" + color
                }  rounded-md px-3 py-1 backdrop-blur-sm bg-white/5 hover:bg-white/20 transition-colors duration-300`}
              >
                <Link
                  href="/en"
                  className={`${
                    isScrolled ? "" : "text-" + color
                  } text-xs uppercase tracking-wider font-light hover:text-[#9f3417] transition-colors`}
                >
                  EN
                </Link>
                <span className={`${isScrolled ? "" : "text-" + color}  mx-2`}>
                  |
                </span>
                <Link
                  href="/ar"
                  className={`${
                    isScrolled ? "]" : "text-" + color
                  } text-xs uppercase tracking-wider font-light hover:text-[#9f3417] transition-colors`}
                >
                  AR
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced gradient line underneath navbar */}
      </div>

      {/* Full-screen Menu Overlay */}
      <motion.div
        className="fixed top-0 left-0 right-0 bottom-0 bg-white backdrop-blur-xl z-50"
        initial={{ x: "-100%" }}
        animate={{ x: showMenu ? 0 : "-100%" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Close Button */}
        <button
          className="absolute top-8 right-8 z-50 p-2 group"
          onClick={() => setShowMenu(false)}
          aria-label="Close menu"
        >
          <div className="absolute inset-0 rounded-full bg-[#9f3417]/0 group-hover:bg-[#9f3417]/10 transition-all duration-300"></div>
          <X
            size={24}
            className="text-[#9f3417] group-hover:text-[#900101] transition-colors duration-300"
          />
        </button>

        {/* Menu Brand Logo - Top Center */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-40">
          <div className="flex items-center">
            <img src="/logo-black.webp" alt="Logo" className="h-8 md:h-12" />
          </div>
        </div>

        {/* Menu Grid Layout */}
        <div className="flex items-center justify-center p-4 w-full h-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mx-auto max-w-6xl">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="flex flex-col"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 * index,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {/* Main menu item with number and title */}
                <div
                  className="flex items-start justify-start gap-4 group cursor-pointer"
                  onMouseEnter={() => setSelectedMenu(item)}
                  onMouseLeave={() => setSelectedMenu(null)}
                  onClick={() =>
                    item.hasSubmenu ? toggleSubmenu(item.id) : null
                  }
                >
                  {/* Item number */}
                  <p className="text-[#9f3417] text-xl font-medium">
                    0{item.id}
                  </p>

                  {/* Item title with animation */}
                  <div className="flex flex-col items-start gap-1">
                    <div className="flex items-center">
                      <p className="text-4xl md:text-6xl text-[#333333] font-light group-hover:text-[#9f3417] group-hover:scale-105 origin-bottom-left transition-all duration-300">
                        {item.title}
                      </p>
                      {item.hasSubmenu && (
                        <ChevronDown
                          className={`ml-4 text-[#9f3417] transition-transform duration-300 ${
                            expandedSubmenu === item.id ? "rotate-180" : ""
                          }`}
                          size={24}
                        />
                      )}
                    </div>

                    {/* Animated underline */}
                    <div className="w-0 h-0.5 bg-[#9f3417]/80 group-hover:w-full transition-all duration-300"></div>
                  </div>
                </div>

                {/* Submenu with animation */}
                {item.hasSubmenu && (
                  <motion.div
                    initial={{ height: 0, opacity: 0, y: -10 }}
                    animate={{
                      height: expandedSubmenu === item.id ? "auto" : 0,
                      opacity: expandedSubmenu === item.id ? 1 : 0,
                      y: expandedSubmenu === item.id ? 0 : -10,
                    }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden ml-12 pl-5 border-l border-[#9f3417]/30 mt-4"
                  >
                    <ul className="space-y-4">
                      {item.submenu?.map((subItem) => (
                        <li key={subItem.id} className="group">
                          <Link
                            href={subItem.href}
                            className="flex items-center text-[#555555] hover:text-[#9f3417] text-xl font-light transition-colors"
                            onClick={() => setShowMenu(false)}
                          >
                            <ChevronRight
                              className="mr-2 text-[#9f3417]/60 group-hover:text-[#9f3417] transition-colors"
                              size={16}
                            />
                            {subItem.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Menu Background Image Effect */}
        <motion.div
          className="absolute inset-0 h-full -z-10 py-32"
          initial={{ opacity: 0 }}
          animate={{
            opacity: selectedMenu ? 0.15 : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-4xl mx-auto h-full">
            <div className="relative h-full w-full">
              <img
                src={
                  selectedMenu
                    ? `/images/community/${selectedMenu.id}.jpg`
                    : "/images/community/1.jpg"
                }
                alt={selectedMenu ? selectedMenu.title : "Menu Background"}
                className="object-cover object-center h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#F0F0F0]/80 to-white/30 mix-blend-multiply"></div>
              {/* Red accent layer */}
              <div className="absolute inset-0 bg-[#9f3417]/5 mix-blend-color"></div>
            </div>
          </div>
        </motion.div>

        {/* Decorative elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Top left elegant dot */}
          <div className="absolute top-40 left-20 w-2 h-2 rounded-full bg-[#9f3417]/30"></div>

          {/* Top right decorative circle */}
          <div className="absolute top-24 right-24 w-32 h-32 rounded-full border border-[#9f3417]/10 opacity-30"></div>

          {/* Middle left decorative line */}
          <div className="absolute top-1/2 left-10 w-24 h-[1px] bg-gradient-to-r from-[#9f3417]/10 to-transparent transform -rotate-45"></div>

          {/* Bottom left decorative line */}
          <div className="absolute bottom-40 left-16 w-16 h-px bg-gradient-to-r from-[#9f3417]/40 to-transparent"></div>

          {/* Bottom right decorative dot */}
          <div className="absolute bottom-32 right-40 w-3 h-3 rounded-full bg-[#9f3417]/20"></div>

          {/* Large subtle circle */}
          <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full border border-[#9f3417]/5 opacity-20"></div>
        </div>

        {/* Footer Secondary Menu */}
        <div className="absolute bottom-12 left-0 right-0 z-50">
          <div className="flex items-center justify-center gap-10 text-[#555555] font-light text-sm uppercase tracking-widest">
            {secondaryMenu.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="group"
                onClick={() => setShowMenu(false)}
              >
                <div className="flex flex-col items-center gap-1 cursor-pointer">
                  <span className="group-hover:text-[#9f3417] transition-colors duration-300">
                    {item.title}
                  </span>
                  <div className="w-0 h-0.5 bg-[#9f3417]/80 group-hover:w-full transition-all duration-300"></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </motion.div>
    </header>
  );
};

export default LuxuryNavbar;

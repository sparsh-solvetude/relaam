import React from "react";
import { motion } from "framer-motion";
import { MobileDropdown } from "./dropdown";

const dropdownMenus = [
  {
    key: "about",
    label: "About Us",
    items: ["Relaam Legacy", "Recognition", "Leadership", "Newsroom"],
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
  },
  {
    key: "property",
    label: "Property Management",
    items: ["Landlord Services", "Leasing Services"],
  },
  {
    key: "facilities",
    label: "Facilities Management",
    items: [
      "Landlords Services",
      "Tenants Services",
      "Contractors Services",
    ],
  
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
  },
  {
    key: "contact",
    label: "Contact",
    items: ["Inquire via Lead Form", "Call", "WhatsApp"],
  },
];

export const MobileMenu = ({ showSet }: any) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 overflow-hidden">
      {/* Background image */}
      <img
        src="/images/burj-khalifa-view.jpg"
        alt="Hero"
        className="w-full h-full object-cover absolute inset-0 z-0"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#6a645a] opacity-70 z-0"></div>

      {/* Content wrapper */}
      <div className="flex flex-col justify-start items-start gap-6 px-8 py-16 h-full w-full relative z-10 text-white drop-shadow-lg">
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-20"
          onClick={() => showSet(false)}
        >
          <img src="/icons/close.svg" alt="close" className="h-8" />
        </button>

        {/* Animated content */}
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          {dropdownMenus.map((menu) => (
            <div key={menu.key} className="flex flex-col gap-1">
              <MobileDropdown
                title={menu.label}
                items={menu.items.map((item) => ({
                  name: item,
                  link: "#", 
                }))}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};


// import React from "react";
// import { MobileDropdown } from "./dropdown";

// export const MobileMenu = ({ showSet }: any) => {
//   return (
//     <div className="fixed top-0 left-0 w-full h-full bg-dark z-50">
//       <div className="flex flex-col justify-start items-start gap-6 px-8 py-16 h-full w-full relative">
//         <button
//           className="absolute top-4 right-4"
//           onClick={() => showSet(false)}
//         >
//           <img src="/icons/close.svg" alt="close" className="h-8" />
//         </button>
//         <a href="/about-us" className="text-white text-2xl font-bold">
//           About
//         </a>

//         <MobileDropdown
//           title="Why Dubai?"
//           items={[
//             { name: "Dubai Guide", link: "/" },
//             { name: "Invest In Dubai", link: "/" },
//           ]}
//         />
//         <MobileDropdown
//           title="Properties"
//           items={[
//             { name: "Bentley Villas", link: "/property/bentley-villas" },
//             { name: "Mira Oasis", link: "/property/mira-oasis" },
//             { name: "Mira Townhouses", link: "/property/mira-townhouses" },
//             { name: "Mira Villas", link: "/property/mira-villas" },
//             { name: "View All", link: "/property" },
//           ]}
//         />
//         <MobileDropdown
//           title="News"
//           items={[
//             { name: "Blogs", link: "/blog" },
//             { name: "Press Coverage", link: "/press-coverage" },
//             { name: "Events", link: "/event" },
//             { name: "View All", link: "/blog/latest-news" },
//           ]}
//         />
//         <a href="/real-estate-agent-dubai" className="text-white text-2xl font-bold">
//           Agent
//         </a>
//       </div>
//     </div>
//   );
// };

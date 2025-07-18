import ScrollingText from "@/common/scrollingText";
import Link from "next/link";
import React from "react";

export const Footer = ({ properties = [] }) => {
  return (
    <div className="bg-[#b3aa9c] text-white pt-12 pb-6">
      <div className="flex justify-center w-full">
        <Link href="/">
          <img src="/logo.webp" alt="logo" className="h-10 " />
        </Link>
      </div>
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row gap-2 mt-14 ">
        <div className="w-full md:w-1/4 flex flex-col justify-between gap-4 ml-0 md:ml-28">
          <Link href="/" className="text-xs">
            HOME PAGE
          </Link>
          <Link href="/" className="text-xs font-light opacity-80">
            INTRO/MAIN BANNER
          </Link>
          <Link href="/" className="text-xs font-light opacity-80">
            SEARCH
          </Link>
          <Link href="/" className="text-xs font-light opacity-80">
            INFO GRAPHICS
          </Link>
          <Link href="/" className="text-xs font-light opacity-80">
            SERVICES - SLIDER
          </Link>
          <Link href="/" className="text-xs font-light opacity-80">
            SIGNATURE PROJECTS - SINGLE
          </Link>
          <Link href="/" className="text-xs font-light opacity-80">
            FEATURED - SLIDER
          </Link>
          <Link href="/" className="text-xs font-light opacity-80">
            TESTIMONIALS - SLIDER
          </Link>
          <Link href="/" className="text-xs font-light opacity-80">
            FAQ
          </Link>
          <Link href="/" className="text-xs font-light opacity-80">
            FOOTER
          </Link>
        </div>

        <div className="w-full md:w-1/4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-xs">
              ABOUT US
            </Link>
            <Link href="/" className="text-xs font-light opacity-80">
              LEGACY
              <p className="text-[10px]">
                The story, the why, brand elements, <br />
                renewed purpose, values
              </p>
            </Link>
            <Link href="/" className="text-xs font-light opacity-80">
              SERVICES
              <p className="text-[10px]">Services will link to each focus</p>
            </Link>
            <Link href="/" className="text-xs font-light opacity-80">
              BENEFITS
            </Link>
            <Link href="/" className="text-xs font-light opacity-80">
              RECOGNITION
              <p className="text-[10px]">Services will link to each focus</p>
            </Link>
          </div>
          {/* <div className="mt-4 flex flex-col gap-2"></div> */}
        </div>

        <div className="w-full md:w-1/4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-xs">
              SERVICES
            </Link>
            <Link href="/" className="text-xs font-light opacity-80">
              PM
            </Link>
            <Link href="/" className="text-xs font-light opacity-80">
              FM
            </Link>
            <Link href="/" className="text-xs font-light opacity-80">
              LEASING
            </Link>
            <Link href="/" className="text-xs font-light opacity-80">
              OA
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row gap-2 mt-14 ">
        <div className="w-full md:w-1/4 flex flex-col justify-between gap-4 ml-0 md:ml-28">
          <div className="flex flex-col justify-between gap-4">
            <Link href="/" className="text-xs">
              EXPLORE
            </Link>
            <Link href="/" className="text-xs font-light opacity-80">
              SIGNATURE PROJECTS
            </Link>
            <Link href="/" className="text-xs font-light opacity-80">
              NEIGHBORHOODS
            </Link>
            <Link href="/" className="text-xs font-light opacity-80">
              FEATURED
            </Link>
            <Link href="/" className="text-xs font-light opacity-80">
              REPORTS
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="text-xs">
              CONTACT
            </Link>

            <Link href="/" className="text-xs font-light opacity-80">
              LEAD/CONTACT FORM
            </Link>
            <Link href="/" className="text-xs font-light opacity-80">
              CAREERS FORM
            </Link>
            <Link href="/" className="text-xs font-light opacity-80">
              BRANCHES
            </Link>
            <Link href="/" className="text-xs font-light opacity-80">
              CALL
            </Link>
            <Link href="/" className="text-xs font-light opacity-80">
              WHATSAPP
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/4">
          <div className="flex flex-col gap-4 h-full justify-end">
            {/* <div className="flex gap-2">
              <img
                src="/icons/social/facebook.svg"
                alt="facebook"
                className="h-10 w-10  p-1.5 rounded-full"
              />
              <img
                src="/icons/social/instagram.svg"
                alt="instagram"
                className="h-10 w-10 p-1.5 rounded-full"
              />
            </div> */}
          </div>
        </div>
      </div>
      <div className="mt-5 mx-10">
        <ScrollingText />
      </div>
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 2xl:px-4 mt-12 text-center">
        <p className="text-sm font-light opacity-50">
          © 2025 Relaam. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};
// import ScrollingText from "@/common/scrollingText";
// import Link from "next/link";
// import React from "react";

// export const Footer = ({ properties = [] }) => {
//   return (
//     <div className="bg-dark-2 text-white pt-12 pb-6">
//       <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between gap-16">
//         <div className="w-full md:w-3/5 flex flex-col justify-between gap-16">
//           <div>
//             <Link href="/">
//               <img src="/logo.webp" alt="logo" className="h-10 " />
//             </Link>
//             <p className="mt-8 opacity-80">
//               Discover lucrative opportunities in property investment. Maximize
//               returns with carefully selected, high-potential properties. Start
//               investing today!
//             </p>
//           </div>
//           <div className="flex items-center gap-4">
//             <Link
//               href=""
//               target="_blank"
//             >
//               <img
//                 src="/icons/social/facebook.svg"
//                 alt="facebook"
//                 className="h-10 w-10 bg-white p-1.5 rounded-full"
//               />
//             </Link>
//             {/* <img
//               src="/icons/social/x.svg"
//               alt="twitter"
//               className="h-10 w-10 bg-white p-1.5 rounded-full"
//             /> */}
//             <Link
//               href=""
//               target="_blank"
//             >
//               <img
//                 src="/icons/social/instagram.svg"
//                 alt="instagram"
//                 className="h-10 w-10 bg-white p-1.5 rounded-full"
//               />
//             </Link>
//             <Link
//               href=""
//               target="_blank"
//             >
//               <img
//                 src="/icons/social/linkedin.svg"
//                 alt="linkedin"
//                 className="h-10 w-10 bg-white p-1.5 rounded-full"
//               />
//             </Link>
//             <Link href="mailto:info@relaam.ae">
//               <img
//                 src="/icons/social/mail.svg"
//                 alt="mail"
//                 className="h-10 w-10 bg-white p-1.5 rounded-full"
//               />
//             </Link>
//           </div>
//         </div>
//         <div className="w-full md:w-2/5 flex">
//           <div className="w-1/2">
//             <h3 className="text-md font-light opacity-60">Quick Links</h3>
//             <div className="mt-4 flex flex-col gap-2">
//               <Link href="/" className="block text-white font-bold">
//                 Home
//               </Link>
//               <Link href="/about-us" className="block text-white font-bold">
//                 About Us
//               </Link>
//               <Link href="/blog" className="block text-white font-bold">
//                 Blogs
//               </Link>
//               <Link href="/event" className="block text-white font-bold">
//                 Events
//               </Link>
//               <Link
//                 href="/real-estate-agent-dubai"
//                 className="block text-white font-bold"
//               >
//                 Agent
//               </Link>
//             </div>
//           </div>
//           <div className="w-1/2">
//             <h3 className="text-md font-light opacity-60">Our Properties</h3>
//             <div className="mt-4 flex flex-col gap-2">
//               <Link
//                 href={`/property/ad-one`}
//                 className="block text-white font-bold"
//               >
//                 AD One
//               </Link>
//               <Link
//                 href={`/property/vera-building`}
//                 className="block text-white font-bold"
//               >
//                 Vera Building
//               </Link>
//               <Link
//                 href="/real-estate-dubai"
//                 className="block text-white font-bold"
//               >
//                 View All
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="mt-5 mx-10">
//         <ScrollingText />
//       </div>
//       <div className="max-w-screen-xl mx-auto px-6 sm:px-8 2xl:px-4 mt-12 text-center">
//         <p className="text-sm font-light opacity-50">
//           © 2025 Relaam. All Rights Reserved.
//         </p>
//       </div>
//     </div>
//   );
// };

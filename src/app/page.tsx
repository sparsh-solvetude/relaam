// 'use client';

import HomeClient from "@/common/elements/home";

// import { Showcase } from "./(home)/_showcase";
// import { Expertise } from "./(home)/_expertise";
// import { Expert } from "./(home)/_expert";
// import { Property } from "./(home)/_property";
// import { Development } from "./(home)/_development";
// import { Services } from "./(home)/_services";
// import { WhyDubai } from "./(home)/_whyDubai";
// import { Partner } from "./(home)/_partner";
// import { Awards } from "./(home)/_awards";
// import { FAQ } from "./(home)/_faq";
// import Booking from "./(home)/_booking";
// import { Blogs } from "./(home)/_blogs";
// import RealEstateHero from "./(home)/hero";
// import LuxuryNavbar from "./(home)/_navbar";
// import { Search } from "./(home)/_search";
// import { FeaturedProperty } from "./(home)/featuredProperty";
// import { Testinomial } from "./(home)/_testinomial";
// import { useEffect, useRef } from "react";


// export const fetchCache = "force-no-store";

// const fetchData = async () => {
//   let data: any = {
//     banner: [],
//     partners: [],
//     blogs: [],
//     faqs: [],
//     awards: [],
//     developments: [],
//     properties: [],
//     pageContent: null,
//   };
//   try {
//   } catch (error) {
//     console.log("error", error);
//   }
//   return data;
// };

// export default async function Home() {
//   const data = await fetchData();
//   const searchRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting) {
//           searchRef.current?.scrollIntoView({
//             behavior: "smooth",
//             block: "center",
//           });
//         }
//       },
//       {
//         threshold: 0.5, // Trigger when 50% is visible
//       }
//     );

//     if (searchRef.current) {
//       observer.observe(searchRef.current);
//     }

//     return () => {
//       if (searchRef.current) observer.unobserve(searchRef.current);
//     };
//   }, []);
//   console.log("data.pageContent", data.pageContent);

//   return (
//     <div>
//       {/* <RealEstateHero /> */}
//       {/* <LuxuryNavbar /> */}
//       <Showcase />

//       <div ref={searchRef}>
//         <Search />
//       </div>
//       <FeaturedProperty />
//       <Services />
//       <Expert />
//       <Testinomial />
//       <FAQ />
//       <Blogs />
//       {/* <Expertise />
//       <Expert />
//       <Property /> */}
//       {/* <Development
//         slides={data.developments}
//         title={data.pageContent?.DevelopmentTitle}
//         description={data.pageContent?.DevelopmentDescription}
//         features={data.pageContent?.DevelopmentFeature}
//       /> */}
//       {/* <Services />
//       <WhyDubai />
//       <Partner />
//       <Awards />
//       <FAQ />
//       <Booking />
//       <Blogs /> */}
//     </div>
//   );
// }
// app/page.tsx or app/home/page.tsx (Server Component – no 'use client')


// const fetchData = async () => {
//   return {
//     banner: [],
//     partners: [],
//     blogs: [],
//     faqs: [],
//     awards: [],
//     developments: [],
//     properties: [],
//     pageContent: null,
//   };
// };

export default async function HomePage() {
  // const data = await fetchData();
  return <HomeClient  />;
}

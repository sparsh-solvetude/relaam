"use client";

import { Blogs } from "@/app/(home)/_blogs";
import { Expert } from "@/app/(home)/_expert";
import { FAQ } from "@/app/(home)/_faq";
import { Search } from "@/app/(home)/_search";
import { Services } from "@/app/(home)/_services";
import { Showcase } from "@/app/(home)/_showcase";
import { Testinomial } from "@/app/(home)/_testinomial";
import AbuDhabiStory from "@/app/(home)/abuDhabiStory";
import Featured from "@/app/(home)/Featured";
import { FeaturedProperty } from "@/app/(home)/featuredProperty";
import ServiceProject from "@/app/(home)/serviceProject";
import SignaturePage from "@/app/(home)/signaturePage";
import SignatureProject from "@/app/(home)/signatureProject";
import { useEffect, useRef } from "react";
import { Link, Element, scroller } from "react-scroll";

export default function HomeClient() {
  // const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // useEffect(() => {
  //   const observerOptions = {
  //     root: null,
  //     threshold: 0.3,
  //   };

  //   const observerCallback = (entries: IntersectionObserverEntry[]) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         const sectionName = entry.target.getAttribute("data-name");
  //         if (sectionName) {
  //           scroller.scrollTo(sectionName, {
  //             smooth: true,
  //             duration: 300,
  //             offset: 0,
  //           });
  //         }
  //       }
  //     });
  //   };

  //   const observer = new IntersectionObserver(
  //     observerCallback,
  //     observerOptions
  //   );

  //   Object.values(sectionRefs.current).forEach((el) => {
  //     if (el) observer.observe(el);
  //   });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  // const setRef = (name: string) => (el: HTMLElement | null) => {
  //   if (el) {
  //     sectionRefs.current[name] = el;
  //   }
  // };

  return (
    <div>
      <Showcase />
      <AbuDhabiStory />
      <SignatureProject />
      <SignaturePage />
      <ServiceProject />
      <Featured />
      <FAQ />

      {/* <Element name="section1">
        <section
          data-name="section1"
          ref={setRef("section1")}
          className="h-auto md:h-screen"
        >
          <Search />
        </section>
      </Element>
      <FeaturedProperty />
      <Services />
      <Expert />
      <Testinomial />
      <Blogs /> */}
    </div>
  );
}

// "use client";

// import { Blogs } from "@/app/(home)/_blogs";
// import { Expert } from "@/app/(home)/_expert";
// import { FAQ } from "@/app/(home)/_faq";
// import { Search } from "@/app/(home)/_search";
// import { Services } from "@/app/(home)/_services";
// import { Showcase } from "@/app/(home)/_showcase";
// import { Testinomial } from "@/app/(home)/_testinomial";
// import { FeaturedProperty } from "@/app/(home)/featuredProperty";
// import { useEffect, useRef } from "react";
// import { Link, Element, scroller } from "react-scroll";

// export default function HomeClient() {
//   const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

//   useEffect(() => {
//     const observerOptions = {
//       root: null,
//       threshold: 0.3,
//     };

//     const observerCallback = (entries: IntersectionObserverEntry[]) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           const sectionName = entry.target.getAttribute("data-name");
//           if (sectionName) {
//             scroller.scrollTo(sectionName, {
//               smooth: true,
//               duration: 300,
//               offset: 0,
//             });
//           }
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     Object.values(sectionRefs.current).forEach((el) => {
//       if (el) observer.observe(el);
//     });

//     return () => {
//       observer.disconnect();
//     };
//   }, []);

//   const setRef = (name: string) => (el: HTMLElement | null) => {
//     if (el) {
//       sectionRefs.current[name] = el;
//     }
//   };

//   return (
//     <div>
//       <Showcase />
//       <Element name="section1">
//         <section
//           data-name="section1"
//           ref={setRef("section1")}
//           className="h-auto md:h-screen"
//         >
//           <Search />
//         </section>
//       </Element>
//       <FeaturedProperty />
//       <Services />
//       <Expert />
//       <Testinomial />
//       <FAQ />
//       <Blogs />
//     </div>
//   );
// }

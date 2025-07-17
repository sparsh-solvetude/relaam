"use client";

import Image from "next/image";
import { useRef } from "react";

interface Slide {
  image: string;
  label: string;
}

interface ContentProps {
  title: string;
  heading: string;
  description: string;
}

interface PropertyCarouselProps {
  slides: Slide[];
  content: ContentProps;
  isButton?: string;
}

const PropertyCarousel: React.FC<PropertyCarouselProps> = ({
  slides,
  content,
  isButton,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = 320; // Adjust this value based on image width

      scrollRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#f9f4f1] text-center pt-12">
      <div className="flex justify-center">
        <div className="mb-12 w-3/5">
          <p className="text-sm tracking-widest text-[#9f3323] font-semibold uppercase mb-3">
            {content.title}
          </p>
          <h1
            className="text-3xl md:text-5xl text-gray-900 mb-4 font-light"
            dangerouslySetInnerHTML={{ __html: content.heading }}
          />
          <p className="text-base md:text-lg text-gray-700 leading-relaxed tracking-wide uppercase">
            {content.description}
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full">
        {/* Scrollable Image Row */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar px-4 "
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-[450px] cursor-pointer">
              <div className="bg-white pb-2">
                <div className="h-[300px] w-full relative  overflow-hidden shadow-md hover:shadow-lg transition ">
                  <Image
                    src={slide.image}
                    alt={slide.label}
                    layout="fill"
                    objectFit="cover"
                    className=""
                  />
                </div>
                <div className="flex w-full justify-between items-center mt-2 px-2 ">
                  <p className="text-sm font-medium mt-2 text-left text-[#9f3323] ">
                    {slide.label}
                  </p>
                  {isButton === "false" && (
                    <button className="bg-[#efe8df] p-2 w-40 text-xs text-[#0000008c]">
                      READ MORE
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Arrows moved to bottom right */}
        <div className="flex gap-4 justify-end pr-6 ">
          <button
            onClick={() => scroll("left")}
            className="p-2  hover:bg-gray-100 text-xl"
          >
            ‹
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 hover:bg-gray-100 text-xl"
          >
            ›
          </button>
        </div>
      </div>

      {/* Hide scrollbar (Tailwind + custom) */}
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};
export default PropertyCarousel;

// "use client";

// import Image from "next/image";

// interface Slide {
//   image: string;
//   label: string;
// }

// interface PropertyCarouselProps {
//   slides: Slide[];
// }

// const PropertyCarousel: React.FC<PropertyCarouselProps> = ({ slides }) => {
//   const duplicatedSlides = [...slides, ...slides];

//   return (
//     <section className="bg-[#f9f4f1] text-center py-12 overflow-hidden">
//       <div className="flex justify-center">
//         <div className="mb-12 w-3/5">
//           <p className="text-sm tracking-widest text-[#9f3323] font-semibold uppercase mb-3">
//             SERVICES
//           </p>
//           <h1 className="text-3xl md:text-5xl text-gray-900 mb-4">
//             BUILT ON TRUST. <br />
//             DESIGNED FOR WHAT’S NEXT.
//           </h1>
//           <p className="text-base md:text-lg text-gray-700 leading-relaxed tracking-wide uppercase">
//             esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
//             at vero eros et accumsan et iusto odio dignissim qui blandit
//             praesent luptatum zzril delenit augue duis dolore te feugait nulla
//             facilisi.
//           </p>
//         </div>
//       </div>

//       <div className="mt-10 overflow-hidden relative w-full">
//         <div className="flex animate-marquee gap-4 w-max">
//           {duplicatedSlides.map((slide, index) => (
//             <div key={index} className="flex-shrink-0 w-80 cursor-pointer">
//               <div className="h-[300px] w-80 relative rounded overflow-hidden shadow-md hover:shadow-lg transition">
//                 <Image
//                   src={slide.image}
//                   alt={slide.label}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded"
//                 />
//               </div>
//               <p className="text-sm font-medium mt-2">{slide.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 40s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PropertyCarousel;

// "use client";

// import Image from "next/image";

// const slides = [
//   { image: "/images/burj-khalifa-view.jpg", label: "OWNER'S ASSOCIATION" },
//   { image: "/images/atlantis.jpg", label: "LEASING SERVICES" },
//   { image: "/images/burj-al-arab.jpg", label: "COMMUNITY MANAGEMENT" },
//   { image: "/images/burj-khalifa-view.jpg", label: "OWNER'S ASSOCIATION" },
//   { image: "/images/atlantis.jpg", label: "LEASING SERVICES" },
//   { image: "/images/atlantis.jpg", label: "LEASING SERVICES" },
//   { image: "/images/atlantis.jpg", label: "LEASING SERVICES" },
// ];

// const PropertyCarousel = () => {
//   const duplicatedSlides = [...slides, ...slides];
//   return (
//     <section className="bg-[#f9f4f1] text-center py-12 overflow-hidden">
//       <div className="flex justify-center">
//         <div className="mb-12  w-3/5 ">
//           <p className="text-sm tracking-widest text-[#9f3323] font-semibold uppercase mb-3">
//             SERVICES
//           </p>
//           <h1 className="text-3xl md:text-5xl text-gray-900 mb-4">
//             BUILT ON TRUST. <br />
//             DESIGNED FOR WHAT’S NEXT.
//           </h1>
//           <p className="text-base md:text-lg text-gray-700 leading-relaxed tracking-wide uppercase ">
//             esse molestie consequat, vel illum dolore eu feugiat nulla facilisis
//             at vero eros et accumsan et iusto odio dignissim qui blandit
//             praesent luptatum zzril delenit augue duis dolore te feugait nulla
//             facilisi.
//           </p>
//         </div>
//       </div>

//       <div className="mt-10 overflow-hidden relative w-full">
//         <div className="flex animate-marquee gap-4 w-max">
//           {duplicatedSlides.map((slide, index) => (
//             <div key={index} className="flex-shrink-0 w-80 cursor-pointer">
//               <div className="h-[300px] w-80 relative rounded overflow-hidden shadow-md hover:shadow-lg transition">
//                 <Image
//                   src={slide.image}
//                   alt={slide.label}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded"
//                 />
//               </div>
//               <p className="text-sm font-medium mt-2">{slide.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 40s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PropertyCarousel;

// =================================================================================================

// "use client";

// import Image from "next/image";

// interface Slide {
//   image: string;
//   label: string;
// }

// interface ContentProps {
//   title: string;
//   heading: string;
//   description: string;
// }

// interface PropertyCarouselProps {
//   slides: Slide[];
//   content: ContentProps;
// }

// const PropertyCarousel: React.FC<PropertyCarouselProps> = ({ slides, content }) => {
//   const duplicatedSlides = [...slides, ...slides];

//   return (
//     <section className="bg-[#f9f4f1] text-center py-12 overflow-hidden">
//       <div className="flex justify-center">
//         <div className="mb-12 w-3/5">
//           <p className="text-sm tracking-widest text-[#9f3323] font-semibold uppercase mb-3">
//             {content.title}
//           </p>
//           <h1 className="text-3xl md:text-5xl text-gray-900 mb-4" dangerouslySetInnerHTML={{ __html: content.heading }} />
//           <p className="text-base md:text-lg text-gray-700 leading-relaxed tracking-wide uppercase">
//             {content.description}
//           </p>
//         </div>
//       </div>

//       <div className="mt-10 overflow-hidden relative w-full">
//         <div className="flex animate-marquee gap-4 w-max">
//           {duplicatedSlides.map((slide, index) => (
//             <div key={index} className="flex-shrink-0 w-80 cursor-pointer">
//               <div className="h-[300px] w-80 relative rounded overflow-hidden shadow-md hover:shadow-lg transition">
//                 <Image
//                   src={slide.image}
//                   alt={slide.label}
//                   layout="fill"
//                   objectFit="cover"
//                   className="rounded"
//                 />
//               </div>
//               <p className="text-sm font-medium mt-2">{slide.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes marquee {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-marquee {
//           animation: marquee 40s linear infinite;
//         }
//       `}</style>
//     </section>
//   );
// };

// export default PropertyCarousel;

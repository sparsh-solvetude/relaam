"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

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
  const [currentSlide, setCurrentSlide] = useState(0);

  const imageWidth = 450 + 16;

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft } = scrollRef.current;
      const newScrollLeft =
        direction === "left"
          ? scrollLeft - imageWidth
          : scrollLeft + imageWidth;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const index = Math.round(scrollLeft / imageWidth);
      setCurrentSlide(index);
    }
  };

  const jumpToSlide = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * imageWidth,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
      return () => ref.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <section className="bg-[#f9f4f1] text-center pt-12">
      <div className="flex justify-center opacity-80 px-4">
        <div className="mb-12 w-full md:w-3/5">
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

      <div className="relative w-full px-4">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth hide-scrollbar "
        >
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full md:w-[450px] cursor-pointer">
              <div className="bg-white pb-2">
                <div className="h-[300px] w-full relative overflow-hidden shadow-md hover:shadow-lg transition">
                  <Image
                    src={slide.image}
                    alt={slide.label}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="flex w-full justify-between items-center mt-2 px-2 opacity-70">
                  <p className="text-xs font-medium mt-2 text-left text-[#9f3323]">
                    {slide.label}
                  </p>
                  {isButton === "false" && (
                    <button className="bg-[#efe8df] p-1 w-32 text-[10px] text-[#0000008c]">
                      READ MORE
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full py-8 md:py-16 flex items-center justify-center md:justify-end">
          <div className="w-[90%] flex gap-10 items-center px-0 md:px-20">
            <div className="flex-grow h-[2px] bg-black/20 relative mx-4">
              <div className="absolute top-0 left-0 h-full w-full flex">
                {slides.map((_, index) => (
                  <div
                    key={index}
                    className={`flex-1 h-full mx-[1px] transition-colors duration-300 ${
                      currentSlide === index ? "bg-black" : "bg-transparent"
                    }`}
                    onClick={() => jumpToSlide(index)}
                    style={{ cursor: "pointer" }}
                  />
                ))}
              </div>
            </div>

            <div className="flex gap-5 md:gap-10">
              <button
                onClick={() => scroll("left")}
                className="text-black text-xl hover:scale-110 transition"
              >
                ←
              </button>
              <button
                onClick={() => scroll("right")}
                className="text-black text-xl hover:scale-110 transition"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>

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

"use client";
import { useEffect, useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  easeInOut,
  easeOut,
  easeIn,
} from "framer-motion";
import LuxuryNavbar from "./_navbar";

const RealEstateHero = ({ heroData }: { heroData?: any }) => {
  const [isMobile, setIsMobile] = useState(false);
  const heroRef = useRef(null);

  // Check for mobile device on component mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkMobile();

    // Listen for resize events
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  // Use Framer Motion's scroll utilities with smoother spring physics
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  // Apply spring physics for smoother animations - adjusted for more responsive feel
  const smoothScrollProgress = useSpring(scrollYProgress, {
    damping: 60, // Increased damping for smoother transitions
    stiffness: 300, // Increased stiffness for more responsive animation
    mass: 0.6, // Slightly increased mass for more stability
  });

  // First hero animations - improved timing for smoother transitions
  const firstHeroOpacity = useTransform(
    smoothScrollProgress,
    [0, 0.25, 0.35, 0.4],
    [1, 1, 0.6, 0]
  );

  const firstHeroScale = useTransform(
    smoothScrollProgress,
    [0, 0.25, 0.35, 0.45],
    [1, 1, 0.985, 0.97]
  );

  // Second hero animations - more precise timing for cleaner transitions
  const secondHeroOpacity = useTransform(
    smoothScrollProgress,
    [0.25, 0.3, 0.35, 0.4],
    [0, 0.8, 0.95, 1]
  );

  const secondHeroY = useTransform(
    smoothScrollProgress,
    [0.25, 0.32, 0.38, 0.43],
    ["100vh", "40vh", "5vh", "0vh"]
  );

  // MORE ABRUPT fade out for the entire hero section - important change
  const entireHeroOpacity = useTransform(
    smoothScrollProgress,
    [0.7, 0.72], // Much narrower range for abrupt transition
    [1, 0]
  );

  const heroZIndex = useTransform(
    smoothScrollProgress,
    [0.7, 0.72], // Match the opacity transition points
    [10, -1]
  );

  // Cloud animations - adjusted for smoother parallax
  const cloud1X = useTransform(
    smoothScrollProgress,
    [0, 0.1, 0.25, 0.4],
    [0, isMobile ? 75 : 150, isMobile ? 150 : 300, isMobile ? 300 : 600]
  );

  const cloud2X = useTransform(
    smoothScrollProgress,
    [0, 0.1, 0.25, 0.4],
    [0, isMobile ? -100 : -200, isMobile ? -200 : -400, isMobile ? -400 : -800]
  );

  const cloud3X = useTransform(
    smoothScrollProgress,
    [0, 0.1, 0.25, 0.4],
    [0, isMobile ? 60 : 120, isMobile ? 125 : 250, isMobile ? 250 : 500]
  );

  const cloud4X = useTransform(
    smoothScrollProgress,
    [0, 0.1, 0.25, 0.4],
    [0, isMobile ? -90 : -175, isMobile ? -175 : -350, isMobile ? -350 : -700]
  );

  // Enhanced house image transforms
  const houseY = useTransform(
    smoothScrollProgress,
    [0, 0.1, 0.25, 0.4],
    [0, 40, 100, 160]
  );

  const houseOpacity = useTransform(
    smoothScrollProgress,
    [0, 0.1, 0.2, 0.3, 0.4],
    [1, 0.9, 0.7, 0.4, 0]
  );

  // Enhanced text animations for first hero
  const firstTextOpacity = useTransform(
    smoothScrollProgress,
    [0, 0.1, 0.18, 0.25],
    [1, 0.9, 0.5, 0]
  );

  const firstTextY = useTransform(
    smoothScrollProgress,
    [0, 0.1, 0.18, 0.25],
    [0, -10, -25, -40]
  );

  // Smoother text animations for second hero
  const secondTextOpacity = useTransform(
    smoothScrollProgress,
    [0.35, 0.4, 0.45, 0.5],
    [0, 0.7, 0.9, 1]
  );

  const secondTextY = useTransform(
    smoothScrollProgress,
    [0.4, 0.45, 0.5, 0.55],
    [50, 30, 10, 0]
  );

  // Enhanced CTA animations
  const ctaOpacity = useTransform(
    smoothScrollProgress,
    [0, 0.05, 0.1, 0.15],
    [1, 0.8, 0.3, 0]
  );

  const ctaY = useTransform(
    smoothScrollProgress,
    [0, 0.05, 0.1, 0.15],
    [0, 15, 30, 50]
  );

  // Smoother scroll indicator fade
  const scrollIndicatorOpacity = useTransform(
    smoothScrollProgress,
    [0, 0.05, 0.08, 0.1],
    [1, 0.6, 0.2, 0]
  );

  // Function to handle scroll to next section
  const scrollToNextSection = () => {
    // Get the viewport height
    const viewportHeight = window.innerHeight;

    // Scroll down by 100vh to reach the next section
    window.scrollTo({
      top: viewportHeight * 2, // Adjust this value to scroll to the desired section
      behavior: "smooth",
    });
  };

  // Helper function to get image URL from Strapi
  const getImageUrl = (imageData: { url: any }[] | { url: any } | null) => {
    if (!imageData) return "";
    if (Array.isArray(imageData) && imageData.length > 0) {
      return `${process.env.NEXT_PUBLIC_BACKEND_URL}${imageData[0].url}`;
    }
    if (!Array.isArray(imageData) && imageData.url) {
      return `${process.env.NEXT_PUBLIC_BACKEND_URL}${imageData.url}`;
    }
    return "";
  };

  // Fallback values in case heroData is not available
  const fallbackData = {
    heroFirstHeadingPart1: "HERITAGE",
    heroFirstHeadingPart2: "ROOTS",
    heroConnectingText: "TO",
    heroSecondHeadingPart1: "MODERN",
    heroSecondHeadingPart2: "HEIGHTS",
    ctaButtonText: "Explore Our Collection",
    heroFirstImage: null,
    heroFirstImageMobile: null,
    heroSecondImage: null,
    rabdanGateLogo: null,
  };

  // Use heroData if available, otherwise use fallback
  const data = heroData || fallbackData;

  // Validate and provide safe access to data properties
  const safeHeroData = {
    heroFirstHeadingPart1:
      data.heroFirstHeadingPart1 || fallbackData.heroFirstHeadingPart1,
    heroFirstHeadingPart2:
      data.heroFirstHeadingPart2 || fallbackData.heroFirstHeadingPart2,
    heroConnectingText:
      data.heroConnectingText || fallbackData.heroConnectingText,
    heroSecondHeadingPart1:
      data.heroSecondHeadingPart1 || fallbackData.heroSecondHeadingPart1,
    heroSecondHeadingPart2:
      data.heroSecondHeadingPart2 || fallbackData.heroSecondHeadingPart2,
    ctaButtonText: data.ctaButtonText || fallbackData.ctaButtonText,
    heroFirstImage: data.heroFirstImage || null,
    heroFirstImageMobile: data.heroFirstImageMobile || null,
    heroSecondImage: data.heroSecondImage || null,
    rabdanGateLogo: data.rabdanGateLogo || null,
  };

  return (
    <>
      <LuxuryNavbar />
      {/* Fixed position hero container with dynamic z-index that becomes negative after animation */}
      <motion.div
        className="fixed inset-0 w-full h-screen"
        style={{
          opacity: entireHeroOpacity,
          zIndex: heroZIndex,
        }}
      >
        {/* FIRST HERO SECTION */}
        <motion.div
          className="absolute inset-0 w-full h-screen bg-gradient-to-b from-sky-600 to-sky-200 perspective-1000"
          style={{
            opacity: firstHeroOpacity,
            scale: firstHeroScale,
          }}
        >
          {/* Clouds Layer */}

          {/* Enhanced hero text with styling from partner page */}
          <motion.div
            className={`absolute ${
              isMobile ? "top-[20%]" : "top-[20%] left-[30%]"
            } right-0 w-full`}
            style={{
              opacity: firstTextOpacity,
              y: firstTextY,
              zIndex: 50,
            }}
          >
            <div className="text-center flex flex-col items-center pt-10">
              {/* Title container with styling from partner page */}
              <div className="text-center mb-8">
                {/* Main heading with brand colors */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tight mb-6">
                  <span className="text-white">
                    {safeHeroData.heroFirstHeadingPart1}{" "}
                    <span className="text-[#9f3417]">
                      {safeHeroData.heroFirstHeadingPart2}
                    </span>
                  </span>
                </h2>

                {/* Decorative line + text line similar to partner page */}
                <div className="flex items-center justify-center mb-4">
                  <div className="h-[2px] w-10 bg-[#9f3417] mr-4"></div>
                  <span className="text-white text-xl uppercase tracking-wider font-medium">
                    {safeHeroData.heroConnectingText}
                  </span>
                  <div className="h-[2px] w-10 bg-[#9f3417] ml-4"></div>
                </div>

                {/* Second part of heading */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                  <span className="text-white">
                    {safeHeroData.heroSecondHeadingPart1}{" "}
                    <span className="text-[#9f3417]">
                      {safeHeroData.heroSecondHeadingPart2}
                    </span>
                  </span>
                </h2>
              </div>
            </div>
          </motion.div>

          {/* Main house image for first hero */}
          <motion.div
            className="w-full h-full relative"
            style={{
              zIndex: 20,
            }}
          >
            <img
              src={!isMobile ? "/hero2/main-hero.jpg" : "/hero2/hero1-mob.png"}
              alt="Modern house"
              className={`w-screen ${
                isMobile ? "h-[140vh]" : "h-auto"
              } object-contain transform-gpu`}
            />
          </motion.div>

          {/* Enhanced call to action button - UPDATED: smaller and more rounded */}
          <motion.div
            className="absolute bottom-[15%] left-0 right-0 mx-auto w-full flex justify-center items-center z-30"
            style={{
              y: ctaY,
              opacity: ctaOpacity,
            }}
          >
            <button
              className={`
                px-5 py-3 sm:px-6 sm:py-3.5 md:px-7 md:py-4
                bg-[#9f3417] hover:bg-[#8a0101] text-white 
                font-medium tracking-widest text-xs sm:text-sm md:text-base 
                rounded-md md:rounded-lg transition-all duration-300 
                shadow-md hover:shadow-lg transform hover:-translate-y-0.5
                flex items-center group
              `}
            >
              <span className="relative z-10">
                {safeHeroData.ctaButtonText}
              </span>
              <svg
                className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </button>
          </motion.div>
        </motion.div>

        {/* SECOND HERO SECTION - Improved transition */}

        {/* Enhanced scroll indicator - UPDATED: now a clickable button */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 mx-auto w-full flex justify-center items-center z-50 cursor-pointer"
          style={{
            opacity: scrollIndicatorOpacity,
          }}
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2.5,
            ease: easeInOut,
          }}
          onClick={scrollToNextSection}
        >
          <button className="flex flex-col items-center cursor-pointer px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            <span className="text-white text-sm mb-1 tracking-wider font-light">
              Scroll Down
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5V19M12 19L5 12M12 19L19 12"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </motion.div>
      </motion.div>

      {/* Scroll container that provides the scroll height */}
      <div ref={heroRef} className="relative h-[200vh]">
        {/* Empty space to allow scrolling for animation */}
      </div>
    </>
  );
};

export default RealEstateHero;

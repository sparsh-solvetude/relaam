"use client"
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const JourneyTimeline = () => {
  const containerRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const milestones = [
    {
      date: "Jun 2017",
      title: "Rabdan Founded",
      subtitle: "The Beginning",
      imageSrc: "/images/property/1.jpg",
      description: "The inception of a vision to redefine luxury living in Dubai."
    },
    {
      date: "Aug 2018",
      title: "Launch Of",
      subtitle: "NAS 1",
      imageSrc: "/images/property/2.jpg",
      description: "Our first landmark project marking the entrance into Dubai's luxury real estate market."
    },
    {
      date: "Dec 2021",
      title: "Handover",
      subtitle: "NAS 1",
      imageSrc: "/images/property/3.jpg",
      description: "Successfully delivered our inaugural project to satisfied clients."
    },
    {
      date: "Aug 2023",
      title: "Launch Of",
      subtitle: "NAS 2",
      imageSrc: "/images/brand-info/1.jpg",
      description: "Expanding our portfolio with this innovative residential development."
    },
    {
      date: "Nov 2023",
      title: "Launch Of",
      subtitle: "NAS 3",
      imageSrc: "/images/brand-info/1.jpg",
      description: "A premium commercial property in the heart of Dubai's business district."
    },
    {
      date: "2024",
      title: "Launch Of",
      subtitle: "GHARBI I",
      imageSrc: "/images/brand-info/2.jpg",
      description: "Our most ambitious residential project featuring cutting-edge design."
    },
    {
      date: "2026",
      title: "Launch Of",
      subtitle: "GHARBI II",
      imageSrc: "/images/brand-info/3.jpg",
      description: "The pinnacle of luxury living set to redefine Dubai's skyline."
    }
  ];

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.9, 1, 1, 0.9]);

  // Handle scroll navigation
  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = direction === 'left' ? -300 : 300;
      
      // Adjust scroll amount based on screen size
      const isMobile = window.innerWidth < 768;
      const finalScrollAmount = isMobile ? scrollAmount / 1.5 : scrollAmount;
      
      container.scrollBy({
        left: finalScrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Update scroll buttons state
  useEffect(() => {
    const checkScrollPosition = () => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        setCanScrollLeft(container.scrollLeft > 10);
        setCanScrollRight(
          container.scrollLeft < container.scrollWidth - container.clientWidth - 10
        );
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      // Check on window resize as well
      window.addEventListener('resize', checkScrollPosition);
      // Initial check
      checkScrollPosition();
      
      return () => {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
        window.removeEventListener('resize', checkScrollPosition);
      };
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen py-8 md:py-10 overflow-hidden w-full bg-white"
    >
      {/* Simple background elements */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#AA0202] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-[#AA0202] rounded-full"></div>
      </div>
      
      <motion.div 
        className="mx-auto px-4 sm:px-6 relative z-10 w-[90vw]"
        style={{ opacity, scale }}
      >
        {/* Section Header - matching other components */}
        <div className="text-center mb-24">
          <div className="text-[#AA0202] text-sm md:text-base font-semibold uppercase tracking-[0.3em] mb-4">
            Our Journey
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-black tracking-tight mb-6">MILE<span className="text-[#AA0202]">STONES</span></h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-[2px] w-10 bg-[#AA0202] mr-4"></div>
            <span className="text-[#4D4D4F] text-base uppercase tracking-wider font-medium">
              Our Path to Excellence
            </span>
            <div className="h-[2px] w-10 bg-[#AA0202] ml-4"></div>
          </div>
          <p className="text-lg text-[#4D4D4F] max-w-2xl mx-auto italic font-light">
            Explore the remarkable journey of Rabdan Developments from our founding to our upcoming landmark projects.
          </p>
        </div>
        
        <div className="relative mt-20">
          {/* Main horizontal line */}
          <div className="absolute top-[160px] left-0 w-full h-[2px] bg-[#AA0202] rounded-full"></div>
          
          {/* Timeline items container */}
          <div className="relative">
            <div 
              ref={scrollContainerRef}
              className="overflow-x-auto pb-10 hide-scrollbar scrollbar-hide"
              style={{ 
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <div className="flex items-start space-x-16 md:space-x-24 pl-8 md:pl-12 min-w-max">
                {milestones.map((milestone, index) => (
                  <div 
                    key={index} 
                    className="relative"
                  >
                    {/* Vertical connecting line */}
                    <div className="absolute top-[160px] left-1/2 transform -translate-x-1/2 w-[2px] h-12 bg-[#AA0202] rounded-full"></div>
                    
                    {/* Date marker */}
                    <div className="absolute top-[146px] left-1/2 transform -translate-x-1/2 w-[28px] h-[28px] rounded-full border-2 border-[#AA0202] bg-white shadow-md"></div>
                    
                    {/* Date label */}
                    <div className="absolute top-[190px] left-1/2 transform -translate-x-1/2 whitespace-nowrap text-[#4D4D4F] font-light">
                      {milestone.date}
                    </div>
                    
                    {/* Content - staggered layout */}
                    <div className={`relative ${index % 2 === 0 ? 'mt-0' : 'mt-48'} w-[240px] sm:w-[280px]`}>
                      {/* Image container with circular design */}
                      <div className="w-[220px] h-[220px] rounded-full overflow-hidden relative group mb-6 mx-auto shadow-lg">
                        {/* Image */}
                        <Image 
                          src={milestone.imageSrc} 
                          alt={milestone.title} 
                          fill 
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        
                        {/* Simple overlay */}
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
                        
                        {/* Circular border */}
                        <div className="absolute inset-0 border-2 border-[#AA0202] rounded-full"></div>
                      </div>
                      
                      {/* Title with luxury styling */}
                      <div className="text-center">
                        <div className="text-[#AA0202] uppercase tracking-wider text-sm font-light mb-1">{milestone.title}</div>
                        <h3 className="text-2xl md:text-3xl text-black font-light mb-2">{milestone.subtitle}</h3>
                        <div className="h-[1px] w-12 bg-[#AA0202] mx-auto mb-4"></div>
                        <p className="text-[#4D4D4F] text-sm max-w-[260px] mx-auto">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation buttons */}
            <div className="absolute top-1/2 left-2 z-10 -translate-y-1/2">
              <motion.button 
                className="relative"
                onClick={() => handleScroll('left')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!canScrollLeft}
              >
                <div className={`relative flex items-center justify-center w-12 h-12 rounded-full border ${canScrollLeft ? 'border-[#AA0202] bg-white hover:bg-[#AA0202] hover:text-white' : 'border-gray-300 bg-white'} shadow-md transition-colors duration-300`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${canScrollLeft ? 'text-[#AA0202]' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </div>
              </motion.button>
            </div>
            
            <div className="absolute top-1/2 right-2 z-10 -translate-y-1/2">
              <motion.button 
                className="relative"
                onClick={() => handleScroll('right')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={!canScrollRight}
              >
                <div className={`relative flex items-center justify-center w-12 h-12 rounded-full border ${canScrollRight ? 'border-[#AA0202] bg-white hover:bg-[#AA0202] hover:text-white' : 'border-gray-300 bg-white'} shadow-md transition-colors duration-300`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${canScrollRight ? 'text-[#AA0202]' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Additional custom CSS for hiding scrollbars */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* For Firefox */
        .scrollbar-hide {
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default JourneyTimeline;
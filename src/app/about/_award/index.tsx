"use client";
import { useState, useEffect, useRef, SetStateAction } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const awardsData = [
  {
    id: 1,
    period: "2022 - 2024",
    category: "Global Brand Awareness",
    awards: [
      "Fastest Growing Real Estate Brand",
      "Leading Designer Residential Development Brand"
    ],
    subcategory: "International Business Magazine",
    subAwards: [
      "Leading Design-led Property Development Company",
      "Best Residential Property Development"
    ],
    image: "/images/property/1.jpg"
  },
  {
    id: 2,
    period: "2023 - 2024",
    category: "International Property Awards",
    awards: [
      "Best Residential Development - Ellington Beach House",
      "Best Architecture Multiple Residence - Ocean House",
      "Best Kitchen Design - Ellington House",
      "Best Residential Interior Show Home - Ellington House",
      "Best Bathroom Design - Ellington House"
    ],
    image: "/images/property/2.jpg"
  },
  {
    id: 3,
    period: "2021 - 2022",
    category: "Architectural Excellence",
    awards: [
      "Best Luxury High-Rise Development",
      "Most Innovative Residential Design"
    ],
    subcategory: "Dubai Real Estate Summit",
    subAwards: [
      "Developer of the Year",
      "Excellence in Sustainable Development"
    ],
    image: "/images/property/3.jpg"
  }
];

const AwardsComponent = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [animating, setAnimating] = useState(false);
  const sliderRef = useRef(null);

  const totalSlides = awardsData.length;

  const nextSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
    setTimeout(() => setAnimating(false), 500);
  };

  const prevSlide = () => {
    if (animating) return;
    setAnimating(true);
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    setTimeout(() => setAnimating(false), 500);
  };

  const goToSlide = (index: SetStateAction<number>) => {
    if (animating || index === activeSlide) return;
    setAnimating(true);
    setActiveSlide(index);
    setTimeout(() => setAnimating(false), 500);
  };

  useEffect(() => {
    // Auto scroll every 7 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(interval);
  }, [activeSlide]);

  return (
    <section className="py-20 md:py-30 bg-white relative overflow-hidden">
      {/* Background decorative elements - simplified */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-[#AA0202] rounded-full"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-[#AA0202] rounded-full"></div>
      </div>
      
      <div className="mx-auto px-4 relative z-10 w-[90vw]">
        {/* Section Header - matching testimonials style */}
        <div className="text-center mb-24">
          <div className="text-[#AA0202] text-sm md:text-base font-semibold uppercase tracking-[0.3em] mb-4">
            Recognition
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-black tracking-tight mb-6">AW<span className="text-[#AA0202]">ARDS</span></h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-[2px] w-10 bg-[#AA0202] mr-4"></div>
            <span className="text-[#4D4D4F] text-base uppercase tracking-wider font-medium">
              Industry Recognition
            </span>
            <div className="h-[2px] w-10 bg-[#AA0202] ml-4"></div>
          </div>
          <p className="text-lg text-[#4D4D4F] max-w-2xl mx-auto italic font-light">
            We're honoured to have been recognised for our contribution to Dubai's skyline
          </p>
        </div>

        {/* Awards Slider */}
        <div className="relative" ref={sliderRef}>
          {/* Slides Container */}
          <div className="relative min-h-[600px] md:min-h-[500px] mb-12">
            {awardsData.map((award, index) => (
              <motion.div
                key={award.id}
                className={`absolute inset-0 w-full ${index === activeSlide ? "z-10" : "z-0"}`}
                initial={{ opacity: 0, x: index > activeSlide ? 100 : -100 }}
                animate={{ 
                  opacity: index === activeSlide ? 1 : 0,
                  x: index === activeSlide ? 0 : (index > activeSlide ? 100 : -100)
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Award Image with luxury styling */}
                  <motion.div 
                    className="relative order-2 lg:order-1"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                  >
                    {/* Main image container with rounded corners */}
                    {/* Outer decorative container with rounded corners */}
                    <div className="absolute -inset-6 rounded-[30px] border border-[#AA0202]/10 bg-gradient-to-br from-white/50 to-[#E8E8E8]/30 backdrop-blur-sm shadow-lg pointer-events-none"></div>
                    
                    {/* Floating circular elements */}


                    {/* Main image container with rounded corners */}
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[20px] shadow-lg">
                      {/* Lighting effect behind image */}
                      <div className="absolute inset-0 bg-gradient-radial from-[#AA0202]/10 to-transparent opacity-30 z-0"></div>
                      
                      <Image 
                        src={award.image}
                        alt={`${award.category} Award`} 
                        fill
                        className="object-cover z-10 rounded-[20px] transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      
                      {/* Light vignette effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 z-20 rounded-[20px]"></div>
                      <div className="absolute inset-0 rounded-[20px] shadow-[inset_0_0_30px_rgba(0,0,0,0.1)] z-20"></div>
                      
                      {/* Light flare effect */}
                      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#AA0202]/10 filter blur-xl rounded-full mix-blend-soft-light z-20"></div>
                    </div>
                    
                  </motion.div>
                  
                  {/* Award Content */}
                  <div className="order-1 lg:order-2 p-2 lg:p-6">
                    <div className="relative">
                      {/* Subtle decorative element */}
                      <div className="absolute -left-4 top-0 w-1 h-16 bg-[#AA0202] rounded-full"></div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 pl-6"
                      >
                        <h3 className="text-2xl md:text-3xl font-light text-[#AA0202] tracking-wide">
                          {award.period}
                        </h3>
                      </motion.div>
                      
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                      >
                        <h4 className="text-xl font-medium text-black mb-6">
                          {award.category}
                        </h4>
                        
                        <ul className="space-y-3 mb-8">
                          {award.awards.map((item, i) => (
                            <motion.li 
                              key={i} 
                              className="flex items-start"
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                            >
                              <div className="w-2 h-2 rounded-full bg-[#AA0202] mt-2 mr-3 shadow-sm"></div>
                              <p className="text-[#4D4D4F] font-light">{item}</p>
                            </motion.li>
                          ))}
                        </ul>
                        
                        {award.subcategory && (
                          <>
                            <h4 className="text-lg font-medium text-black mt-8 mb-4">
                              {award.subcategory}
                            </h4>
                            
                            <ul className="space-y-3">
                              {award.subAwards.map((item, i) => (
                                <motion.li 
                                  key={i} 
                                  className="flex items-start"
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ duration: 0.5, delay: 0.4 + (i * 0.1) }}
                                >
                                  <div className="w-2 h-2 rounded-full bg-[#AA0202] mt-2 mr-3 shadow-sm"></div>
                                  <p className="text-[#4D4D4F] font-light">{item}</p>
                                </motion.li>
                              ))}
                            </ul>
                          </>
                        )}
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="absolute top-1/2 left-0 right-0 -mt-6 flex justify-between px-4 z-20 pointer-events-none">
            <button 
              onClick={prevSlide}
              className="w-12 h-12 flex items-center justify-center bg-white shadow-md text-[#AA0202] border border-[#AA0202] hover:bg-[#AA0202] hover:text-white transition-colors duration-300 pointer-events-auto rounded-full"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <button 
              onClick={nextSlide}
              className="w-12 h-12 flex items-center justify-center bg-white shadow-md text-[#AA0202] border border-[#AA0202] hover:bg-[#AA0202] hover:text-white transition-colors duration-300 pointer-events-auto rounded-full"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default AwardsComponent;
"use client"
import { useRef, useEffect, useState } from "react"
import { motion, easeInOut } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import LuxuryNavbar from "../_navbar"

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoPlayed, setIsVideoPlayed] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  

  // Play video when component mounts
  useEffect(() => {
    if (videoRef.current && !isVideoPlayed) {
      videoRef.current
        .play()
        .then(() => {
          setIsVideoPlayed(true)
        })
        .catch((error) => {
          console.error("Video play error:", error)
        })
    }
  }, [isVideoPlayed])

 useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Calculate opacity based on scroll position
  const fadeOpacity = Math.min(scrollY / 300, 0.8)
  // Calculate scroll indicator opacity (fade out as user scrolls)
  const scrollIndicatorOpacity = Math.max(1 - scrollY / 200, 0)

  // Function to scroll to the next section
  const scrollToNextSection = () => {
    const viewportHeight = window.innerHeight
    window.scrollTo({
      top: viewportHeight,
      behavior: 'smooth'
    })
  }

  return (
    <div className="relative w-full h-screen overflow-hidden bg-white/10">
      {/* Rounded container for the entire hero */}
      <div className="absolute inset-4  md:inset-8 lg:inset-12 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
        {/* Navigation bar */}
        
          <div className="flex items-center space-x-8">
           <LuxuryNavbar/>
          </div>
        

        {/* Video background with overlay */}
        <div className="absolute inset-0 z-10">
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src="https://rabdandevelopments.ae/wp-content/uploads/2025/01/About.mp4" type="video/mp4" />
          </video>

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/70 to-transparent"></div>

          {/* Additional color overlay for aesthetic */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-70"></div>

          {/* Purple/pink color cast */}
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-transparent mix-blend-overlay"></div>
          
          {/* New: Bottom fade effect on scroll */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none transition-opacity duration-300 ease-in-out"
            style={{ opacity: fadeOpacity }}
          ></div>
        </div>

        {/* Main content */}
        <div className="absolute bottom-[10%] left-0 right-0 z-20 p-10 md:p-16 lg:p-20 flex flex-col md:flex-row justify-between items-end">
          {/* Left side - About Us heading */}
          <div className="mb-10 md:mb-0 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-white/80 text-sm tracking-wider mb-4">
                ESTABLISHED 2008
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white text-5xl md:text-6xl lg:text-7xl font-light leading-tight mb-4"
            >
              The <span className="italic font-normal text-[#9f3417]">RELAAM</span> Legacy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-white/80 text-lg md:text-xl font-light"
            >
              Crafting exceptional living experiences through visionary development and unwavering commitment to
              excellence.
            </motion.p>
          </div>
        </div>
        
        {/* Scroll Down Button - positioned to not overlap with content */}
        <motion.div
          className="absolute bottom-8 left-0 right-0 mx-auto w-full flex justify-center items-center z-50 cursor-pointer"
          style={{
            opacity: scrollIndicatorOpacity,
          }}
          animate={{ y: [0, 8, 0] }} 
          transition={{ 
            repeat: Infinity, 
            duration: 2.5,
            ease: easeInOut
          }}
          onClick={scrollToNextSection}
        >
          <button className="flex flex-col items-center cursor-pointer px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105">
            <span className="text-white text-sm mb-1 tracking-wider font-light">Scroll Down</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      </div>
    </div>
  )
}

export default Hero
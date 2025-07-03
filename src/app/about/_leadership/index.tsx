"use client";

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Team member type definition
interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  imageSrc: string;
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

const LeadershipPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Function to toggle video play/pause
  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  // Add this useEffect to handle video state changes
  useEffect(() => {
    const videoElement = videoRef.current;
    
    // Add event listeners to keep state in sync with video
    if (videoElement) {
      const handlePlay = () => setIsPlaying(true);
      const handlePause = () => setIsPlaying(false);
      const handleEnded = () => setIsPlaying(false);
      
      videoElement.addEventListener('play', handlePlay);
      videoElement.addEventListener('pause', handlePause);
      videoElement.addEventListener('ended', handleEnded);
      
      // Cleanup event listeners
      return () => {
        videoElement.removeEventListener('play', handlePlay);
        videoElement.removeEventListener('pause', handlePause);
        videoElement.removeEventListener('ended', handleEnded);
      };
    }
  }, []);

  // Team members data
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "Mohamed Barakat",
      position: "Founder & CEO",
      description: "Mohamed leads Relaam Developments with a vision for excellence and innovation in Dubai's luxury real estate market.",
      imageSrc: "/leadership/wz2.webp", 
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/mohamed-barakat-1a0b3a1b6/"
      }
    },
    {
      id: 2,
      name: "Medhat Ibrahim",
      position: "Sales Director",
      description: "A real estate expert with extensive experience in sales and business development, Medhat drives Relaam's growth and client relationships.",
      imageSrc: "/leadership/wz2.webp", 
      socialLinks: {
        linkedin: "https://ae.linkedin.com/in/medhat-ibrahim-17587787"
      }
    },
    {
      id: 3,
      name: "Rafat Alakel",
      position: "Sales Director",
      description: "Rafat brings years of sales leadership in the Dubai real estate sector, ensuring Relaam's projects reach the right investors and residents.",
      imageSrc: "/leadership/wz2.webp", 
      socialLinks: {
        linkedin: "" // Add LinkedIn if available
      }
    },
    {
      id: 4,
      name: "Abid Hussain",
      position: "Finance Manager",
      description: "Abid oversees financial planning and management, supporting Relaam's sustainable growth and project delivery.",
      imageSrc: "/leadership/wz2.webp", 
      socialLinks: {
        linkedin: "" // Add LinkedIn if available
      }
    },
    {
      id: 5,
      name: "Jana Jamal-ud-din",
      position: "Senior Accountant",
      description: "Jana manages internal audits, payroll, and financial operations, ensuring transparency and compliance across all Relaam projects.",
      imageSrc: "/leadership/wz2.webp", 
      socialLinks: {
        linkedin: "" // Add LinkedIn if available
      }
    },
    {
      id: 6,
      name: "MUHAMMAD KHALIL",
      position: "Senior Accountant",
      description: "Muhammad specializes in accounts payable, receivable, VAT, and audits, contributing to Relaam's robust financial processes.",
      imageSrc: "/leadership/wz2.webp", 
      socialLinks: {
        linkedin: "" // Add LinkedIn if available
      }
    }
  ];

  // Modal animation variants
  const modalVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, damping: 25, stiffness: 500 } },
    exit: { opacity: 0, y: 30, transition: { duration: 0.2 } }
  };

  // Open member detail modal
  const openMemberDetail = (member: TeamMember) => {
    setSelectedMember(member);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  // Close member detail modal
  const closeMemberDetail = () => {
    setSelectedMember(null);
    document.body.style.overflow = 'auto'; // Allow scrolling again
  };

  return (
    <main className="relative min-h-screen ] pb-24">
      
      {/* Header Section */}
      <div className="relative z-10 pt-10 pb-12 bg-white ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center container mx-auto px-4"
        >
          <div className="text-[#9f3417] text-sm md:text-base font-semibold uppercase tracking-[0.3em] mb-4">
            The People Behind Our Success
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-black tracking-tight mb-6">
            OUR <span className="text-[#9f3417]">LEADERSHIP</span>
          </h1>
          
          <div className="text-base text-[#4D4D4F] tracking-[0.1em] uppercase font-medium mx-auto max-w-3xl mb-8">
            Meet the team of visionaries and experts driving Relaam's commitment to excellence in luxury real estate development.
          </div>
          
          {/* <div className="flex items-center justify-center">
            <div className="h-[2px] w-10 bg-[#9f3417] mr-4"></div>
            <span className="text-[#4D4D4F] text-base font-medium">
              Expertise, Vision & Passion
            </span>
            <div className="h-[2px] w-10 bg-[#9f3417] ml-4"></div>
          </div> */}
        </motion.div>
      </div>

      {/* Team Members Grid */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group cursor-pointer bg-white rounded-lg shadow-lg overflow-hidden"
              onClick={() => openMemberDetail(member)}
            >
              <div className="relative h-[350px] overflow-hidden">
                {/* Image container */}
                <div className="absolute inset-0">
                  <Image 
                    src={member.imageSrc} 
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="h-[2px] w-12 bg-[#9f3417] mb-3 group-hover:w-16 transition-all duration-300"></div>
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-[#9f3417] text-sm uppercase tracking-wider mb-4">{member.position}</p>
                  
                  <div className="flex items-center space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-y-2 group-hover:translate-y-0">
                    <span className="text-white text-sm">View Profile</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#9f3417]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>


      {/* Team Member Detail Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMemberDetail}
          >
            <motion.div 
              className="relative bg-white rounded-lg max-w-4xl mx-4 overflow-hidden shadow-xl"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
              {/* Close button */}
              <button 
                className="absolute top-4 right-4 z-50 w-8 h-8 flex items-center justify-center rounded-full bg-white/90 text-[#9f3417] hover:bg-[#9f3417] hover:text-white transition-colors"
                onClick={closeMemberDetail}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal content */}
              <div className="flex flex-col md:flex-row">
                {/* Image side */}
                <div className="md:w-2/5 h-96 md:h-auto relative">
                  <Image 
                    src={selectedMember.imageSrc} 
                    alt={selectedMember.name}
                    fill
                    className="object-cover"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-black/50"></div>
                </div>

                {/* Content side */}
                <div className="md:w-3/5 p-8 md:p-10">
                  <div className="h-[2px] w-16 bg-[#9f3417] mb-6"></div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-1">{selectedMember.name}</h2>
                  <p className="text-[#9f3417] text-sm uppercase tracking-wider mb-6">{selectedMember.position}</p>
                  
                  <p className="text-gray-600 mb-8 leading-relaxed">
                    {selectedMember.description}
                  </p>
                  
                  {/* Social links */}
                  <div className="flex items-center space-x-4">
                    {selectedMember.socialLinks.linkedin && (
                      <a 
                        href={selectedMember.socialLinks.linkedin} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#9f3417] hover:bg-[#9f3417] hover:text-white hover:border-[#9f3417] transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    )}
                    {selectedMember.socialLinks.twitter && (
                      <a 
                        href={selectedMember.socialLinks.twitter} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#9f3417] hover:bg-[#9f3417] hover:text-white hover:border-[#9f3417] transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </a>
                    )}
                    {selectedMember.socialLinks.instagram && (
                      <a 
                        href={selectedMember.socialLinks.instagram} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-[#9f3417] hover:bg-[#9f3417] hover:text-white hover:border-[#9f3417] transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      
    </main>
  );
};

export default LeadershipPage;
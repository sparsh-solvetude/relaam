"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LuxuryServices = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          {/* <div className="text-[#AA0202] text-sm md:text-base font-semibold uppercase tracking-[0.3em] mb-4">
            Exclusive Offerings
          </div> */}
          <h2 className="text-6xl md:text-7xl font-bold text-black tracking-tight mb-6">CONNECT <span className="text-[#AA0202]">WITH US</span></h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-[2px] w-10 bg-[#AA0202] mr-4"></div>
            <span className="text-[#4D4D4F] text-base uppercase tracking-wider font-medium">
              Enhancing Your Property Experience
            </span>
            <div className="h-[2px] w-10 bg-[#AA0202] ml-4"></div>
          </div>
          {/* <p className="text-lg text-[#4D4D4F] max-w-2xl mx-auto">
            Discover the exclusive services we offer to enhance your luxury property experience
          </p> */}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Service 1 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-lg">
              {/* White Background with gradient overlay */}
              <div className="absolute inset-0 bg-white shadow-inner group-hover:bg-gray-50 transition-colors duration-500"></div>
              
              {/* Red Border */}
              <div className="absolute inset-0 border-2 border-[#AA0202]/30 rounded-3xl pointer-events-none group-hover:border-[#AA0202]/80 transition-colors duration-500"></div>
              
              {/* Content */}
              <div className="p-10 flex flex-col items-center text-center relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full border-2 border-[#AA0202]/40 flex items-center justify-center mb-8 group-hover:bg-[#AA0202]/10 transition-colors duration-500 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#AA0202]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-[#AA0202] transition-colors duration-300">Virtual 3D Tour</h3>
                <p className="text-[#4D4D4F] mb-8 group-hover:text-black transition-colors duration-300">Experience our properties with an immersive virtual tour</p>
                
                <Link href="/virtual-tour" className="inline-flex items-center text-[#AA0202] hover:text-black group-hover:translate-x-1 transform transition-transform duration-300">
                  <span className="uppercase text-sm tracking-wider font-medium">Begin Tour</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Service 2 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-lg">
              {/* White Background with gradient overlay */}
              <div className="absolute inset-0 bg-white shadow-inner group-hover:bg-gray-50 transition-colors duration-500"></div>
              
              {/* Red Border */}
              <div className="absolute inset-0 border-2 border-[#AA0202]/30 rounded-3xl pointer-events-none group-hover:border-[#AA0202]/80 transition-colors duration-500"></div>
              
              {/* Content */}
              <div className="p-10 flex flex-col items-center text-center relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full border-2 border-[#AA0202]/40 flex items-center justify-center mb-8 group-hover:bg-[#AA0202]/10 transition-colors duration-500 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#AA0202]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-[#AA0202] transition-colors duration-300">Book a Viewing</h3>
                <p className="text-[#4D4D4F] mb-8 group-hover:text-black transition-colors duration-300">Schedule a personal tour of our show apartment</p>
                
                <Link href="/book-viewing" className="inline-flex items-center text-[#AA0202] hover:text-black group-hover:translate-x-1 transform transition-transform duration-300">
                  <span className="uppercase text-sm tracking-wider font-medium">Schedule Now</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Service 3 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-lg">
              {/* White Background with gradient overlay */}
              <div className="absolute inset-0 bg-white shadow-inner group-hover:bg-gray-50 transition-colors duration-500"></div>
              
              {/* Red Border */}
              <div className="absolute inset-0 border-2 border-[#AA0202]/30 rounded-3xl pointer-events-none group-hover:border-[#AA0202]/80 transition-colors duration-500"></div>
              
              {/* Content */}
              <div className="p-10 flex flex-col items-center text-center relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full border-2 border-[#AA0202]/40 flex items-center justify-center mb-8 group-hover:bg-[#AA0202]/10 transition-colors duration-500 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#AA0202]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-[#AA0202] transition-colors duration-300">Sales Meeting</h3>
                <p className="text-[#4D4D4F] mb-8 group-hover:text-black transition-colors duration-300">Connect with our dedicated sales specialists</p>
                
                <Link href="/sales-meeting" className="inline-flex items-center text-[#AA0202] hover:text-black group-hover:translate-x-1 transform transition-transform duration-300">
                  <span className="uppercase text-sm tracking-wider font-medium">Request Meeting</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Service 4 */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="group relative"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-lg">
              {/* White Background with gradient overlay */}
              <div className="absolute inset-0 bg-white shadow-inner group-hover:bg-gray-50 transition-colors duration-500"></div>
              
              {/* Red Border */}
              <div className="absolute inset-0 border-2 border-[#AA0202]/30 rounded-3xl pointer-events-none group-hover:border-[#AA0202]/80 transition-colors duration-500"></div>
              
              {/* Content */}
              <div className="p-10 flex flex-col items-center text-center relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 rounded-full border-2 border-[#AA0202]/40 flex items-center justify-center mb-8 group-hover:bg-[#AA0202]/10 transition-colors duration-500 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#AA0202]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                
                <h3 className="text-xl font-semibold text-black mb-3 group-hover:text-[#AA0202] transition-colors duration-300">Express Interest</h3>
                <p className="text-[#4D4D4F] mb-8 group-hover:text-black transition-colors duration-300">Receive updates on our exclusive properties</p>
                
                <Link href="/express-interest" className="inline-flex items-center text-[#AA0202] hover:text-black group-hover:translate-x-1 transform transition-transform duration-300">
                  <span className="uppercase text-sm tracking-wider font-medium">Register Now</span>
                  <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom Decorative Line */}
      <div className="max-w-xs mx-auto mt-16">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#AA0202]/40 to-transparent"></div>
      </div>
    </section>
  );
};

export default LuxuryServices;
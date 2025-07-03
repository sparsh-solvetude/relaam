"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutGrid = () => {
  return (
    <section className="py-24 md:py-32 bg-gradient-to-r from-white to-[#E8E8E8]/30 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {/* Background Grid Lines */}
        <div className="absolute inset-0 grid grid-cols-6 w-full h-full">
          {[...Array(7)].map((_, i) => (
            <div key={`vertical-${i}`} className="h-full w-[1px] bg-gradient-to-b from-transparent via-[#9f3417]/20 to-transparent"></div>
          ))}
        </div>
        <div className="absolute inset-0 grid grid-rows-6 h-full w-full">
          {[...Array(7)].map((_, i) => (
            <div key={`horizontal-${i}`} className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#9f3417]/30 to-transparent"></div>
          ))}
        </div>
      </div>
      
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#9f3417 1px, transparent 1px)', backgroundSize: '25px 25px' }}></div>

      {/* Lighting Effects */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#9f3417]/5 rounded-full filter blur-[150px] opacity-30 mix-blend-soft-light"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-[#9f3417]/5 rounded-full filter blur-[100px] opacity-20 mix-blend-soft-light"></div>
      <div className="absolute top-1/3 left-1/4 w-1/4 h-1/4 bg-[#4D4D4F]/5 rounded-full filter blur-[120px] opacity-20 mix-blend-soft-light"></div>

      {/* Diagonal Accent Lines */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-[200%] h-[1px] bg-gradient-to-r from-transparent via-[#9f3417]/30 to-transparent transform rotate-[30deg] origin-top-left"></div>
        <div className="absolute top-0 right-0 w-[200%] h-[1px] bg-gradient-to-l from-transparent via-[#9f3417]/30 to-transparent transform rotate-[-30deg] origin-top-right"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        {/* Main About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="relative">
            <div className="flex items-start mb-6">
              <div className="w-1 h-12 bg-[#9f3417] mr-6"></div>
              <div>
                <h2 className="text-4xl md:text-5xl uppercase tracking-wide"><span className='text-[#9f3417]'>RELAAM </span><br /><span className="font-extralight">DEVELOPMENTS</span></h2>
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-[#9f3417]/80 text-lg italic font-light tracking-wider">Redefining the concept of modern living</h3>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-[#4D4D4F] text-lg leading-relaxed mb-6"
            >
              At Relaam Developments, our scope goes way beyond bricks and mortar. Think of us as visionaries, shaping the future of urban living. Based in Dubai, our expertise spans project management, construction and off-plan developments.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-[#4D4D4F] text-lg leading-relaxed mb-10"
            >
              Our luxurious residences and modern commercial spaces are an expression of quality, sustainability and lasting value. Our goal is to redefine modern living with spaces that inspire and investments that endure.
            </motion.p>
            

            {/* Subtle decorative element for the content area */}
            
          </div>
          
          {/* Right Image with Enhanced Effects */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative "
          >


            {/* Main image container */}
            <div className="relative w-full rounded-4xl h-[500px] md:h-[600px] overflow-hidden shadow-lg">
              {/* Lighting effect behind image */}
              
              <Image 
                src="/images/blog/1.jpg"
                alt="Relaam Developments" 
                fill
                className="object-cover z-10 rounded-4xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              
              {/* Overlay with enhanced gradient */}
              <div className="absolute inset-0 rounded-4xl bg-gradient-to-br from-black/20 to-black/10 z-20"></div>
              
              {/* Light flare effect */}
              <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-[#9f3417]/10 filter blur-xl rounded-4xl mix-blend-soft-light z-20"></div>
            </div>
            
         
            
            {/* Floating design elements */}

            
            {/* Animated light trace */}
            <motion.div
              initial={{ opacity: 0.4, x: "-100%", y: "-100%" }}
              animate={{ opacity: 0.2, x: "100%", y: "100%" }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 w-full h-full overflow-hidden z-20 pointer-events-none"
            >
              <div className="absolute -inset-1/2 w-40 h-[1px] bg-gradient-to-r from-transparent via-[#9f3417]/20 to-transparent transform rotate-45"></div>
            </motion.div>
          </motion.div>
        </div>
        
        
      </div>
    </section>
  );
};

export default AboutGrid;
"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const LuxuryProperties = () => {
  const properties = [
    {
      name: "Gharbi II",
      location: "Downtown Dubai",
      image: "/images/brand-info/1.jpg",
      price: "AED 1,200,000"
    },
    {
      name: "Gharbi I",
      location: "Business Bay",
      image: "/images/brand-info/2.jpg",
      price: "AED 950,000"
    },
    {
      name: "NAS 3",
      location: "Dubai Marina",
      image: "/images/brand-info/3.jpg",
      price: "AED 1,540,000"
    },
    {
      name: "NAS 2",
      location: "Palm Jumeirah",
      image: "/images/property/1.jpg",
      price: "AED 2,100,000"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-24">
          <div className="text-[#AA0202] text-sm md:text-base font-semibold uppercase tracking-[0.3em] mb-4">
            Exclusive Portfolio
          </div>
          <h2 className="text-6xl md:text-7xl font-bold text-black tracking-tight mb-6">LATEST <span className="text-[#AA0202]">PROPERTIES</span></h2>
          <div className="flex items-center justify-center mb-6">
            <div className="h-[2px] w-10 bg-[#AA0202] mr-4"></div>
            <span className="text-[#4D4D4F] text-base uppercase tracking-wider font-medium">
              Premium Residences
            </span>
            <div className="h-[2px] w-10 bg-[#AA0202] ml-4"></div>
          </div>
          
          <div className="flex justify-center mt-8">
            <Link href="/properties" className="group inline-flex items-center px-8 py-3 border-2 border-[#AA0202] text-[#AA0202] hover:bg-[#AA0202] hover:text-white rounded-full transition-colors duration-300 uppercase tracking-wider text-sm font-medium shadow-md">
              <span>View All Properties</span>
              <svg className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="group relative"
            >
              {/* Property Card */}
              <div className="relative overflow-hidden rounded-3xl shadow-lg">
                {/* Card Border */}
                <div className="absolute inset-0 border-2 border-[#AA0202]/30 rounded-3xl group-hover:border-[#AA0202]/60 transition-colors duration-500 pointer-events-none z-20"></div>
                
                {/* Image container */}
                <div className="relative h-[350px] overflow-hidden rounded-3xl">
                  <Image 
                    src={property.image}
                    alt={property.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                  
                  {/* Light overlay with gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:opacity-90 transition-opacity duration-500"></div>
                  
                  {/* Property Details */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transform translate-y-0 group-hover:translate-y-[-10px] transition-transform duration-500">
                    <h3 className="text-2xl text-white font-semibold tracking-wide group-hover:text-white transition-colors duration-300">{property.name}</h3>
                    <div className="flex items-center mt-2 mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#AA0202]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-white text-sm ml-1">{property.location}</span>
                    </div>
                    
                    {/* Price info that appears on hover */}
                    <div className="flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 mt-4">
                      <div>
                        <span className="text-xs uppercase tracking-wider text-white font-medium">From</span>
                        <div className="text-lg font-semibold text-white">{property.price}</div>
                      </div>
                      <Link href={`/properties/${property.name.toLowerCase().replace(' ', '-')}`}>
                        <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white/20 transition-colors duration-300">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </div>
                      </Link>
                    </div>
                  </div>
                  
                  {/* Favorite button */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="w-10 h-10 bg-white/30 backdrop-blur-sm border border-white/20 flex items-center justify-center rounded-full group-hover:bg-white/50 transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Type label */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="px-4 py-1 bg-[#AA0202] rounded-full shadow-md">
                      <span className="text-xs uppercase tracking-wider text-white font-medium">Residential</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Pagination dots */}
        <div className="flex justify-center space-x-3 mt-16">
          <div className="w-8 h-3 rounded-full bg-[#AA0202]"></div>
          <div className="w-3 h-3 rounded-full bg-[#4D4D4F]/30"></div>
          <div className="w-3 h-3 rounded-full bg-[#4D4D4F]/30"></div>
          <div className="w-3 h-3 rounded-full bg-[#4D4D4F]/30"></div>
        </div>
        
        {/* Bottom Decorative Line */}
        <div className="max-w-lg mx-auto mt-16">
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-[#AA0202]/40 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryProperties;
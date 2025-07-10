"use client"
import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import Hero from './_hero';
import AboutGrid from './_aboutGrid';
import JourneyTimeline from './_timeline';
import AwardsComponent from './_award';
import LuxuryServices from './_services';
import LuxuryProperties from './_latestproperties';
import Link from 'next/link';
import LeadershipPage from './_leadership';
import { Meet } from './_meet';
import { Specialization } from './_specialization';
import { Showcase } from './_showcase';
import { Info } from './_info';
import { Team } from './_team';
import LuxuryNavbar from '../(home)/_navbar';
import { Testimonial } from './_testimonials';
import { Explore } from './_explore';
import { Awards } from '../(home)/_awards';
import CornerTab from '../cornerTab';
// import Footer from '@/common/element/footer/footer';

const AboutPage = () => {

  return (
    <div className="bg-white">
      <Head>
        <title>About Us | Rabdan Developments</title>
        <meta name="description" content="Discover the story behind Rabdan Developments, redefining luxury living in Dubai." />
      </Head>
      
      {/* Sticky Navbar */}
      {/* <LuxuryNavbar /> */}
      
      {/* Hero Section with Parallax Video */}
      <Showcase />
      <Info />
      <Explore />
      <Specialization />
      <LeadershipPage />
      <Team />
      <Awards />
      <CornerTab />
      {/* <Testimonial /> */}
      {/* <AboutGrid/>
      <JourneyTimeline/> */}
      {/* <AwardsComponent/>
      <LuxuryTestimonials/>
      <LuxuryServices/> */}
      {/* <LuxuryProperties/>
       */}
      {/* <Footer/> */}
      
      
      
      </div>
  );
};

export default AboutPage;
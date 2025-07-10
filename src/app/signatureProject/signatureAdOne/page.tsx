import React from 'react'
import dynamic from "next/dynamic";
import { Carousel } from '@/common/carousel';
import AmenitiesList from '../amenitiesList';
import ContentAgentCard from '../contentAgentCard';

const MapView = dynamic(() => import("../MapView"), { ssr: false });

const slides = [
    "/images/Signature/adcp-1.jpg",
    "/images/Signature/adcp-2.jpg",
    "/images/Signature/adcp-3.jpg",
    "/images/Signature/adcp-4.jpg",
    "/images/Signature/adcp-5.jpg",
];

const title = "Signature Projects";
const subtitle = "AD One";

const SignatureAdOne = () => {
    return (
        <div className="w-full">
            <Carousel slides={slides} title={title} subtitle={subtitle} />
            <div className='flex w-full gap-5 mt-5 px-10'>
                <div className='flex flex-col gap-5 w-[70%]'>
                    <div className='w-3/5'>
                        <div className='flex w-full mt-5 gap-5'>
                            <button className="bg-[#9f3323]  text-white py-3 px-5 rounded-full font-bold text-[14px]">
                                Status - Available for Leasing
                            </button>
                        </div>

                        <h1 className='text-[#0f1821] text-[22px] font-semibold mt-5'>AD One | Luxury Apartments | Showrooms | Shops</h1>

                    </div>

                    <p className='font-light opacity-80 text-[#595d6a]'>Luxury living at its very best, AD One Tower is filled with unmatched conveniences, situated in the heart of Abu Dhabi’s Capital District and designed for a perfect living experience.</p>
                    <p className='font-light opacity-80 text-[#595d6a]'>Built with Chilean design and Arabic flair, AD One Tower houses an exclusive collection of chic Soho-style lofts; one, two and three-bedroom apartments; and elegant duplex penthouses, offering residents a stylish, cosmopolitan home in tasteful surroundings. Designed to inspire the senses, every apartment incorporates a careful application of imagination that celebrates modern living.</p>
                    <p className='font-light opacity-80 text-[#595d6a]'>Offering a lively and urban lifestyle, AD One Tower has been designed to ensure that many of the spacious apartments enjoy spectacular views across Abu Dhabi. Residents can also enjoy a range of amenities and facilities including an enormous gymnasium and indoor fitness suite, an outdoor sports track for joggers, a 25m swimming pool and adjoining children’s pool, as well as secure car parking and a grocery and café at podium and ground level.

                    </p>

                    <div className='flex w-full gap-10'>
                        <div>
                            <p className='text-[#595d6a]'>Property Type</p>
                            <h1 className='font-light opacity-80'>Apartment</h1>
                            <h1 className='font-light opacity-80'>Showroom</h1>
                        </div>
                        <div>
                            <p className='text-[#595d6a]'>Unit Type</p>
                            <h1 className='font-light opacity-80'>1, 2, 3 & 4 Bedrooms</h1>
                            <h1 className='font-light opacity-80'>3 showrooms</h1>
                        </div>
                        <div>
                            <p className='text-[#595d6a]'>Size</p>
                            <h1 className='font-light opacity-80'>689 to 2,314 Sq Ft</h1>
                            <h1 className='font-light opacity-80'>Various Sizes</h1>
                        </div>



                    </div>
                    <hr className='border-1 w-full my-5 border-gray' />
                    <AmenitiesList />
                </div>
                <div className='w-[30%]'><ContentAgentCard /></div>

            </div>


            <hr className='border-1 my-5 w-full border-gray' />
            <div className='p-5 bg-[#cbbda5] rounded-xl'>
                <h1 className='mb-5 font-semibold text-[22px]'>Know more about the Building</h1>
                <div className='flex w-full gap-10'>
                    <div>
                        <p className='text-[#595d6a]'>Nature</p>
                        <h1 className='font-bold text-[18px] text-[#1e2a45]'>Mixed Use (Residential and Commercial)</h1>
                    </div>
                    <div>
                        <p className='text-[#595d6a]'>Floors</p>
                        <h1 className='font-bold text-[18px] text-[#1e2a45]'>23</h1>
                    </div>
                    <div>
                        <p className='text-[#595d6a]'>Property Type</p>
                        <h1 className='font-bold text-[18px] text-[#1e2a45]'>Luxury Apartments, Showrooms, Shops</h1>
                    </div>
                    <div>
                        <p className='text-[#595d6a]'>Building Configuration</p>
                        <h1 className='font-bold text-[18px] text-[#1e2a45]'>4 basement parking + ground floor + 2 mezzanine floors + 23 floors + roof</h1>
                    </div>

                </div>
            </div>
            <hr className='border-1 my-5 w-full border-gray' />
            <div>
                <h1 className='text-[22px] font-semibold mt-10'>Explore the Location</h1>
                <div className='flex justify-between items-center'>
                    <p className='text-[32px] text-[#9f3323]'>Abu Dhabi</p>
                    <a
                        href="https://www.google.com/maps?q=Marasi+Dr,+Business+Bay,+Dubai,+United+Arab+Emirates"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 underline"
                    >
                        See on Google Map
                    </a>
                </div>

                <MapView />
            </div>

        </div>
    )
}

export default SignatureAdOne 

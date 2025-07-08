import React from 'react'
import Image from 'next/image';
import dynamic from "next/dynamic";

const MapView = dynamic(() => import("./MapView"), { ssr: false });


const ExploreGuideDetail = () => {
    return (
        <div className="w-full pt-20 p-10">
            <h1 className='SemiBold text-[24px] text-[#9f3323] text-center mt-5'>Signature Projects</h1>
            <div className='flex justify-center items-center'>
                <h1 className='SemiBold text-[32px] text-[#0f1821]'>AD One</h1>
                {/* <div>Icon</div> */}
            </div>
            <div className='w-full flex mt-5 h-[390px]'>



                <img
                    src="images/explore/exploreGuide/exploreGuide1.png"
                    alt="exploreGuide-1"
                    className="h-full w-full"
                />
                <div className='flex w-full'>
                    <img
                        src="images/explore/exploreGuide/exploreGuide3.png"
                        alt="exploreGuide-3"
                        className="h-full w-[50%]"
                    />
                    <img
                        src="images/explore/exploreGuide/exploreGuide2.png"
                        alt="exploreGuide-2"
                        className="h-full w-[50%]"
                    />

                </div>
            </div>



            <div className='flex w-full gap-5 mt-5 '>
                <div className='flex flex-col gap-5 w-[70%]'>
                    <div className='w-3/5'>
                        <div className='flex w-full mt-5 gap-5'>
                            <button className="bg-[#9f3323]  text-white py-3 px-5 rounded-full font-bold text-[14px]">
                                Status - Available for Leasing
                            </button>
                        </div>

                        <h1 className='text-[#0f1821] text-[22px] font-semibold mt-2'>AD One | Luxury Apartments | Showrooms | Shops</h1>

                    </div>

                    <p className='text-[#595d6a]'>Luxury living at its very best, AD One Tower is filled with unmatched conveniences, situated in the heart of Abu Dhabi’s Capital District and designed for a perfect living experience.</p>
                    <p className='text-[#595d6a]'>Built with Chilean design and Arabic flair, AD One Tower houses an exclusive collection of chic Soho-style lofts; one, two and three-bedroom apartments; and elegant duplex penthouses, offering residents a stylish, cosmopolitan home in tasteful surroundings. Designed to inspire the senses, every apartment incorporates a careful application of imagination that celebrates modern living.</p>
                    <p className='text-[#595d6a]'>Offering a lively and urban lifestyle, AD One Tower has been designed to ensure that many of the spacious apartments enjoy spectacular views across Abu Dhabi. Residents can also enjoy a range of amenities and facilities including an enormous gymnasium and indoor fitness suite, an outdoor sports track for joggers, a 25m swimming pool and adjoining children’s pool, as well as secure car parking and a grocery and café at podium and ground level.

</p>

                    <div className='flex w-full gap-10'>
                        <div>
                            <p className='text-[#595d6a]'>Property Type</p>
                            <h1 className='font-medium'>Apartment</h1>
                            <h1 className='font-medium'>Showroom</h1>
                        </div>
                        <div>
                            <p className='text-[#595d6a]'>Unit Type</p>
                            <h1 className='font-medium'>1, 2, 3 & 4 Bedrooms</h1>
                            <h1 className='font-medium'>3 showrooms</h1>
                        </div>
                        <div>
                            <p className='text-[#595d6a]'>Size</p>
                            <h1 className='font-medium'>689 to 2,314 Sq Ft</h1>
                            <h1 className='font-medium'>Various Sizes</h1>
                        </div>



                    </div>
                    <hr className='border-1 w-full my-5 border-gray' />
                    <div>
                        <h1 className='font-semibold text-[22px]'>Amenities that come with this property</h1>
                        <div className='flex flex-wrap gap-5 mt-5'>
                            <div className='flex flex-col  gap-2 w-60'>
                                <div className='flex gap-5'>

                                    <Image
                                        src="/images/explore/exploreGuide/icons/pool.svg"
                                        alt="pool"
                                        width={50}
                                        height={50}
                                        className='w-10 h-10 object-cover'
                                    />

                                    <p className='text-[#595d6a]'>Pool</p>
                                </div>
                                <div className='flex gap-5'>
                                    <Image
                                        src="/images/explore/exploreGuide/icons/Gym.svg"
                                        alt="pool"
                                        width={50}
                                        height={50}
                                        className='w-10 h-10 object-cover'
                                    />
                                    <p className='text-[#595d6a]'>Gym</p>
                                </div>
                                <div className='flex gap-5'>
                                    <Image
                                        src="/images/explore/exploreGuide/icons/Reception.svg"
                                        alt="pool"
                                        width={50}
                                        height={50}
                                        className='w-10 h-10 object-cover'
                                    />
                                    <p className='text-[#595d6a]'>Reception</p>
                                </div>
                                {/* <div className='flex gap-5'>
                                    <Image
                                        src="/images/explore/exploreGuide/icons/Terrace.svg"
                                        alt="pool"
                                        width={50}
                                        height={50}
                                        className='w-10 h-10 object-cover'
                                    />
                                    <p className='text-[#595d6a]'>Terrace</p>
                                </div> */}
                                {/* <div className='flex gap-5'>
                                    <Image
                                        src="/images/explore/exploreGuide/icons/LakeView.svg"
                                        alt="pool"
                                        width={50}
                                        height={50}
                                        className='w-10 h-10 object-cover'
                                    />
                                    <p className='text-[#595d6a]'>Lake View</p>
                                </div> */}
                            </div>
                            <div className='flex flex-col gap-2 w-60'>
                                {/* <div className='flex gap-5'>

                                    <Image
                                        src="/images/explore/exploreGuide/icons/SeaView.svg"
                                        alt="Sea View"
                                        width={50}
                                        height={50}
                                        className='w-10 h-10 object-cover'
                                    />

                                    <p className='text-[#595d6a]'>Sea View</p>
                                </div>
                                <div className='flex gap-5'>
                                    <Image
                                        src="/images/explore/exploreGuide/icons/WineCollar.svg"
                                        alt="Wine Collar"
                                        width={50}
                                        height={50}
                                        className='w-10 h-10 object-cover'
                                    />
                                    <p className='text-[#595d6a]'>Wine Collar</p>
                                </div> */}
                                <div className='flex gap-5'>
                                    <Image
                                        src="/images/explore/exploreGuide/icons/library.svg"
                                        alt="Library"
                                        width={50}
                                        height={50}
                                        className='w-10 h-10 object-cover'
                                    />
                                    <p className='text-[#595d6a]'>Library</p>
                                </div>
                                <div className='flex gap-5'>
                                    <Image
                                        src="/images/explore/exploreGuide/icons/gameRoom.svg"
                                        alt="Game Room"
                                        width={50}
                                        height={50}
                                        className='w-10 h-10 object-cover'
                                    />
                                    <p className='text-[#595d6a]'>Game Room</p>
                                </div>
                                <div className='flex gap-5'>
                                    <Image
                                        src="/images/explore/exploreGuide/icons/KidPlayArea.svg"
                                        alt="Kid Play Area"
                                        width={50}
                                        height={50}
                                        className='w-10 h-10 object-cover'
                                    />
                                    <p className='text-[#595d6a]'>Kid Play Area</p>
                                </div>
                            </div>

                            <div className='flex flex-col  gap-2 w-60'>
                                {/* <div className='flex gap-5'>

                                    <Image
                                        src="/images/explore/exploreGuide/icons/pool.svg"
                                        alt="pool"
                                        width={50}
                                        height={50}
                                        className='w-10 h-10 object-cover'
                                    />

                                    <p className='text-[#595d6a]'>Pool</p>
                                </div> */}
                                {/* <div className='flex gap-5'>
                                    <Image
                                        src="/images/explore/exploreGuide/icons/Gym.svg"
                                        alt="pool"
                                        width={50}
                                        height={50}
                                        className='w-10 h-10 object-cover'
                                    />
                                    <p className='text-[#595d6a]'>Gym</p>
                                </div> */}
                                <div className='flex gap-5'>
                                    <Image
                                        src="/images/explore/exploreGuide/icons/Reception.svg"
                                        alt="pool"
                                        width={50}
                                        height={50}
                                        className='w-10 h-10 object-cover'
                                    />
                                    <p className='text-[#595d6a]'>Reception</p>
                                </div>
                                <div className='flex gap-5'>
                                    <Image
                                        src="/images/explore/exploreGuide/icons/Terrace.svg"
                                        alt="pool"
                                        width={50}
                                        height={50}
                                        className='w-10 h-10 object-cover'
                                    />
                                    <p className='text-[#595d6a]'>Terrace</p>
                                </div>
                                <div className='flex gap-5'>
                                    <Image
                                        src="/images/explore/exploreGuide/icons/LakeView.svg"
                                        alt="pool"
                                        width={50}
                                        height={50}
                                        className='w-10 h-10 object-cover'
                                    />
                                    <p className='text-[#595d6a]'>Lake View</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                {/* right card */}
                <div className='w-[30%] h-fit p-5 mt-5 border-2 border-gray-2 rounded-xl bg-[#c2d6ef]'>
                    <h1 className='text-[22px] font-medium'>Schedule a call with an area specialist.</h1>
                    <div className='flex flex-col gap-5 mt-5'>
                        <div className='flex gap-5'>
                            <Image
                                src="/images/explore/exploreGuide/Agent.jpg"
                                alt="Description"
                                width={500}
                                height={300}
                                className=' w-20 h-20 rounded-full object-cover'
                            />
                            <div>
                                <h1 className='font-semibold'>Mohammad AL-Bake</h1>
                                <p className='text-[#6F6F6F]'>Million Homes Real Estate</p>
                                <div className='text-blue-600 text-[12px]'> icon Verified</div>
                            </div>
                        </div>

                        <input type="text" placeholder='Full Name' className='border-2 border-gray-2 p-3 w-full rounded-xl' />
                        <input type="email" placeholder='E-mail address' className='border-2  border-gray-2 p-3 w-full rounded-xl' />
                        <input type="text" placeholder='Number' className='border-2  border-gray-2 p-3 w-full rounded-xl' />
                        <textarea className='p-4 resize-none border-2 border-gray-2 rounded-xl' name="" id="" placeholder='You can type your message here, our agent will get back to you.'></textarea>
                        <button className='bg-[#9f3323] rounded-lg flex  gap-4 items-center justify-center text-white py-3 px-5 font-bold text-[14px]'>SUBMIT <Image
                            src="/images/explore/exploreGuide/icons/SubmitArrow.svg"
                            alt="Submit Arrow"
                            width={50}
                            height={50}
                            className='w-4 h-4 object-cover invert'
                        /> </button>
                        <hr className='border-1 w-full border-gray' />
                        <div className='flex gap-5 justify-center'>
                            <button className='flex gap-2 border-2 border-gray-2 p-3 text-[14px] text-[#1e2a45] rounded-xl'>WHATSAPP  <div>
                                <Image
                                    src="/images/explore/exploreGuide/icons/WhatsApp.svg"
                                    alt="WhatsApp"
                                    width={50}
                                    height={50}
                                    className='w-5 h-5 object-cover'
                                /> </div></button>
                            <button className='flex gap-2 border-2 border-gray-2 p-3 text-[14px] text-[#1e2a45] rounded-xl'>Call NOW <div>
                                <Image
                                    src="/images/explore/exploreGuide/icons/Call.svg"
                                    alt="Call"
                                    width={50}
                                    height={50}
                                    className='w-5 h-5 '
                                /></div></button>
                        </div>
                    </div>
                </div>


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
                        {/* <h1 className='font-bold text-[18px] text-[#1e2a45]'>+ 2 mezzanine floors + 23 floors + roof</h1> */}
                    </div>
                    {/* <div>
                        <p className='text-[#595d6a]'>Property Type</p>
                        <h1 className='font-bold text-[18px] text-[#1e2a45]'>Apartment</h1>
                    </div>
                    <div>
                        <p className='text-[#595d6a]'>Property Type</p>
                        <h1 className='font-bold text-[18px] text-[#1e2a45]'>Apartment</h1>
                    </div> */}



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

export default ExploreGuideDetail

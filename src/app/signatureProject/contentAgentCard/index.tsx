import React from 'react'
import Image from 'next/image'

const ContentAgentCard = () => {
    return (
        <div className=' h-fit p-5 mt-5 border-2 border-gray-2 rounded-xl bg-[#c2d6ef]'>
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
                        <p className='text-[#6F6F6F]'>Relaam Real Estate</p>
                        {/* <div className='text-blue-600 text-[12px]'> icon Verified</div> */}
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
    )
}

export default ContentAgentCard

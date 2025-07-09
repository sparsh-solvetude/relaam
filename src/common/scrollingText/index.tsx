import React from 'react'
import Marquee from 'react-fast-marquee'

const ScrollingText = () => {
    return (
        <div className="w-full overflow-hidden"
        >
            <Marquee
                speed={50}
                // gradient={true} 
                direction="right"
                className=" text-[32px] text-white gap-10"
            >
                <div className='flex px-10 items-center gap-4'>
                    <img src="https://www.adcp.ae/system/images/adcp-logo-white.svg" alt="logo" className="" />
                    <span className='mt-4 text-lg text-white ml-4'>is now</span>
                    <img src="/logo.webp" alt="logo" className="h-16" />
                </div>
                <div className='flex px-10 items-center gap-4'>
                    <img src="https://www.adcp.ae/system/images/adcp-logo-white.svg" alt="logo" className="" />
                    <span className='mt-4 text-lg text-white ml-4'>is now</span>
                    <img src="/logo.webp" alt="logo" className="h-16" />
                </div>
                <div className='flex px-10 items-center gap-4'>
                    <img src="https://www.adcp.ae/system/images/adcp-logo-white.svg" alt="logo" className="" />
                    <span className='mt-4 text-lg text-white ml-4'>is now</span>
                    <img src="/logo.webp" alt="logo" className="h-16" />
                </div>
                <div className='flex px-10 items-center gap-4'>
                    <img src="https://www.adcp.ae/system/images/adcp-logo-white.svg" alt="logo" className="" />
                    <span className='mt-4 text-lg text-white ml-4'>is now</span>
                    <img src="/logo.webp" alt="logo" className="h-16" />
                </div>


            </Marquee>
        </div>
    )
}

export default ScrollingText

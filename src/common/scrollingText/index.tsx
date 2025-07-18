import React from "react";
import Marquee from "react-fast-marquee";
import clsx from "clsx";

const ScrollingText = () => {
  const textItems = Array(4).fill("IS RELAAM");

  const headingClass = clsx(
    "text-white font-normal z-10 mix-blend-difference overflow-hidden",
    "opacity-80"
  );

  const headingStyle = {
    fontSize: "15rem",
    fontWeight: 200,
    lineHeight: 1,
  };

  return (
    <div className="w-full overflow-hidden">
      <Marquee speed={50} direction="right" className="text-white gap-10">
        <div className="flex px-10 items-center gap-20">
          {textItems.map((text, index) => (
            <h1 key={index} className={headingClass} style={headingStyle}>
              {text}
            </h1>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default ScrollingText;



// import React from 'react'
// import Marquee from 'react-fast-marquee'

// const ScrollingText = () => {
//     return (
//         <div className="w-full overflow-hidden"
//         >
//             <Marquee
//                 speed={50}
//                 // gradient={true}
//                 direction="right"
//                 className=" text-[32px] text-white gap-10"
//             >
//                 <div className='flex px-10 items-center gap-4'>
//                     <img src="https://www.adcp.ae/system/images/adcp-logo-white.svg" alt="logo" className="" />
//                     <span className='mt-4 text-lg text-white ml-4'>is now</span>
//                     <img src="/logo.webp" alt="logo" className="h-16" />
//                 </div>
//                 <div className='flex px-10 items-center gap-4'>
//                     <img src="https://www.adcp.ae/system/images/adcp-logo-white.svg" alt="logo" className="" />
//                     <span className='mt-4 text-lg text-white ml-4'>is now</span>
//                     <img src="/logo.webp" alt="logo" className="h-16" />
//                 </div>
//                 <div className='flex px-10 items-center gap-4'>
//                     <img src="https://www.adcp.ae/system/images/adcp-logo-white.svg" alt="logo" className="" />
//                     <span className='mt-4 text-lg text-white ml-4'>is now</span>
//                     <img src="/logo.webp" alt="logo" className="h-16" />
//                 </div>
//                 <div className='flex px-10 items-center gap-4'>
//                     <img src="https://www.adcp.ae/system/images/adcp-logo-white.svg" alt="logo" className="" />
//                     <span className='mt-4 text-lg text-white ml-4'>is now</span>
//                     <img src="/logo.webp" alt="logo" className="h-16" />
//                 </div>

//             </Marquee>
//         </div>
//     )
// }

// export default ScrollingText

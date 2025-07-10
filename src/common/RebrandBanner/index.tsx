'use client'

import { useState } from 'react'

export default function RebrandBanner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="w-full flex flex-col md:flex-row gap-6 md:gap-12 items-center justify-center bg-[#cbbda5] text-black px-4 py-6 md:py-3 text-center relative top-0">
      <img
        src="https://www.adcp.ae/system/images/adcp-logo-white.svg"
        alt="logo"
        className="h-24"
      />
      <span className="text-lg text-[#9f3323] md:mt-4">is now</span>
      <img
        src="/logo.webp"
        alt="logo"
        className="h-16"
      />
    </div>
  )
}



// // components/RebrandBanner.tsx
// 'use client'

// import { useState } from 'react'

// export default function RebrandBanner() {
//   const [visible, setVisible] = useState(true)

//   if (!visible) return null

//   return (
//     <div className=" w-full h-60 flex gap-12 items-center justify-center bg-[#cbbda5] text-black px-4 py-3 text-center relative top-0" style={{
//       // backgroundImage: '#cbbda5'
//     }}

// // linear-gradient(to right, #9f3323, #cbbda5
//     >

//       <img src="https://www.adcp.ae/system/images/adcp-logo-white.svg" alt="logo" className="h-24" />
//       <span className='mt-4 text-lg text-[#9f3323] ml-4'>is now</span>
//       <img src="/logo.webp" alt="logo" className="h-16" />
//       {/* <p className="text-sm md:text-base font-medium">
//         We’ve rebranded! Welcome to our new look.{' '}
//         <a href="/rebrand" className="underline font-semibold hover:text-yellow-600">
//           Learn more
//         </a>
//       </p> */}
//     </div>
//   )
// }



// // components/RebrandBanner.tsx
// 'use client'

// import { useState } from 'react'

// export default function RebrandBanner() {
//   const [visible, setVisible] = useState(true)

//   if (!visible) return null

//   return (
//     <div className="bg-yellow-200 text-black text-center py-2 px-4 shadow-md">
//       <p>
//         We’ve rebranded! Welcome to our new look.{" "}
//         <a href="/about-rebrand" className="underline font-semibold">Learn more</a>
//       </p>
//       <button
//         onClick={() => setVisible(false)}
//         className="absolute right-4 top-2 text-black font-bold"
//       >
//         ✕
//       </button>
//     </div>
//   )
// }

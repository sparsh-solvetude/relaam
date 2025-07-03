import React from 'react'

export const Item = ({title}: any) => {
  return (
    <div className="bg-dark-2 px-4 py-8 rounded-xl text-center flex flex-col items-center gap-1 mr-3 h-[26rem] overflow-hidden relative cursor-pointer border-2 border-transparent hover:border-[#9f3517]">
        <img src="/images/modern-house.jpg" alt="property" className="w-full h-full absolute left-0 top-0 object-cover rounded-xl" />
        <button className="absolute right-4 top-4 bg-dark p-1 rounded-full hover:bg-dark-2">
            <img src="/icons/arrow.svg" alt="heart" className="h-8 rotate-0" />
        </button>
        <div className="absolute left-4 bottom-4 right-4 z-10 bg-dark-2 p-4 rounded-xl flex flex-col items-start gap-0">
          <h3 className="text-lg font-bold ">Burj Khalifa View Villa</h3>
          <h4 className="text-2xl font-black text-[#9f3517]">$700,000</h4>
          <div className="flex gap-1 mt-1 items-center">
            <img src="/icons/location.svg" alt="Location" className="h-4" />
            <p className="text-xs opacity-60">Dubai, UAE</p>
            </div>
        </div>
    </div>
  )
}

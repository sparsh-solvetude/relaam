import Image from 'next/image'

const amenities = [
    { icon: "/images/explore/exploreGuide/icons/pool.svg", label: "Pool" },
    { icon: "/images/explore/exploreGuide/icons/Gym.svg", label: "Gym" },
    { icon: "/images/explore/exploreGuide/icons/Reception.svg", label: "Reception" },
    { icon: "/images/explore/exploreGuide/icons/library.svg", label: "Library" },
    { icon: "/images/explore/exploreGuide/icons/gameRoom.svg", label: "Game Room" },
    { icon: "/images/explore/exploreGuide/icons/KidPlayArea.svg", label: "Kid Play Area" },
    { icon: "/images/explore/exploreGuide/icons/Reception.svg", label: "Reception" },
    { icon: "/images/explore/exploreGuide/icons/Terrace.svg", label: "Terrace" },
    { icon: "/images/explore/exploreGuide/icons/LakeView.svg", label: "Lake View" },
]
 
const AmenitiesList = () => {
    return (
        <div>
            <h1 className='font-semibold text-[22px]'>Amenities that come with this property</h1>
            <div className='flex flex-wrap gap-2 md:gap-5 mt-5'>
                {amenities?.map((amenity, index) => (
                    <div key={index} className='flex gap-2 md:gap-5 w-40 md:w-52 items-center'>
                        <Image
                            src={amenity?.icon}
                            alt={amenity?.label}
                            width={50}
                            height={50}
                            className='w-10 h-10 object-cover'
                        />
                        <p className='text-[#595d6a]'>{amenity?.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AmenitiesList

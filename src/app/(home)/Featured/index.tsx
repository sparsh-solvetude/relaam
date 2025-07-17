import React from "react";

const Featured = () => {
  const properties = [
    {
      id: 1,
      image: "/images/brand_1.png",
      review:
        "Great experience and service Everyone was attentive and available .",
      name: "Luxury Villa in Dubai",
      location: "Dubai, UAE",
      price: "AED 50,000",
      bedrooms: "3 BEDROOM",
      apartment: "Apartment",
    },
    {
      id: 2,
      image: "/images/brand_1.png",
      review:
        "Great experience and service Everyone was attentive and available .",
      name: "Modern Apartment in Marina",
      location: "Dubai Marina, UAE",
      price: "AED 35,000",
      bedrooms: "3 BEDROOM",
      apartment: "Apartment",
    },
    {
      id: 3,
      image: "/images/brand_1.png",
      review:
        "Great experience and service Everyone was attentive and available .",
      name: "Elegant Villa in Abu Dhabi",
      location: "Abu Dhabi, UAE",
      price: "AED 42,000",
      bedrooms: "3 BEDROOM",
      apartment: "Apartment",
    },
  ];
  return (
    <div className="py-16 px-4 md:px-12 lg:px-32">
      <div className="text-black flex flex-col justify-center items-center text-center gap-2">
        <p className="text-sm tracking-widest text-[#9f3323] font-semibold uppercase mb-3">
          TESTIMONIALS
        </p>
        <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">
          IN THEIR WORDS
        </h1>
      </div>

      <div className=" flex flex-wrap gap-2 mt-10">
        {properties.map((property) => (
          <div key={property.id}>
            <div className="bg-white px-4 py-8  w-[340px]  flex flex-col items-center gap-1 mr-3 h-[24rem] overflow-hidden relative cursor-pointer border-2 border-transparent">
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-full absolute left-0 top-0 object-cover "
              />

              <div className="absolute top-0 p-4">
                <p>{property.review}</p>
              </div>
            </div>

            <div>
              <p className="text-[#9f3323] mt-2">JOH SMITH ARNOLD</p>
              {property.name} <br />
              {property.price}
              <p className="text-sm">
                {property.location} {property.bedrooms} {property.apartment}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;

// import React from "react";

// const Featured = () => {
//   const properties = [
//     {
//       id: 1,
//       image: "/images/atlantis.jpg",
//       review:
//         "Great experience and service Everyone was attentive and available .",
//       name: "JOHN SMITH ARNOLD",
//       title: "3 BEDROOM APARTMENT",
//       location: "AL REEM ISLAND",
//     },
//     {
//       id: 2,
//       image: "/images/atlantis.jpg",
//         review:
//         "Great experience and service Everyone was attentive and available .",
//       name: "SARAH MILLER",
//       title: "2 BEDROOM LOFT",
//       location: "DOWNTOWN DUBAI",
//     },
//     {
//       id: 3,
//       image: "/images/atlantis.jpg",
//         review:
//         "Great experience and service Everyone was attentive and available .",
//       name: "DAVID CLARK",
//       title: "4 BEDROOM VILLA",
//       location: "PALM JUMEIRAH",
//     },
//   ];
//   return (
//     <div className="py-16 px-4 md:px-12 lg:px-32">
//       <div className="text-black flex flex-col justify-center items-center text-center gap-2">
//         <h2 className="text-5xl font-bold mb-6 leading-base">
//           Featured Properties
//         </h2>
//         <p className="font-light opacity-80 max-w-4xl">
//           Discover our exclusive featured property that offers unparalleled
//           luxury and comfort. This stunning residence is designed to meet the
//           highest standards of modern living, providing a perfect blend of
//           elegance and functionality.
//         </p>
//       </div>

//       <div className=" flex flex-wrap gap-2 mt-10">
//         {properties.map((property) => (
//           <div key={property.id}>
//             <div className="bg-white px-4 py-8  w-[340px]  flex flex-col items-center gap-1 mr-3 h-[24rem] overflow-hidden relative cursor-pointer border-2 border-transparent">
//               <img
//                 src={property.image}
//                 alt={property.title}
//                 className="w-full h-full absolute left-0 top-0 object-cover "
//               />

//               <div className="absolute top-0 p-4">
//                 <p>{property.review}</p>
//               </div>
//             </div>

//             <div>
//               <p className="text-[#9f3323]">JOH SMITH ARNOLD</p>
//               {property.name} <br />
//               {property.title} <br />
//               {property.location}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Featured;

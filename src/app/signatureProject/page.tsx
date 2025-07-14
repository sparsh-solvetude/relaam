import React from "react";
import Image from "next/image";

const amenities = [
  {
    icon: "/images/Signature/greatDeal.jpg",
    price: "AED 65,000",
    details: [
      "2 Bedroom Apartment",
      "Covered Parking",
      "Swimming Pool and Gym",
      "Located in Al Saadah",
    ],
  },
  {
    icon: "/images/Signature/brandNew.jpg",
    price: "AED 65,000",
    details: [
      "1 Bedroom Apartment",
      "Covered Parking",
      "Kids’ Play Area and Gym",
      "Located in Al Raha Beach",
    ],
  },
  {
    icon: "/images/Signature/brandNew-1.jpg",
    price: "AED 52,000",
    details: [
      "1 Bedroom Apartment",
      "Covered Parking",
      "Swimming Pool and Gym",
      "Located in Khalifa",
    ],
  },
];

const SignatureProject = () => {
  return (
    <div>
      <div className="h-screen w-full">
        <Image
          src="/images/Signature/Signature_bg.jpg"
          alt="banner"
          width={1920}
          height={1080}
          className="h-screen w-full object-cover"
        />
        <div className="absolute top-0 left-0 w-full h-screen bg-black opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-screen">
          <div className="max-w-screen-2xl mx-auto px-4 sm:px-12 flex flex-col items-center justify-center h-screen pt-20 text-white text-center">
            <h1 className="text-[50px] font-bold text-theme-dark-green md:leading-base w-full  font-playfair">
              Signature Projects
            </h1>
            <p className="text-lg mt-4 md:mt-6 w-full lg:w-2/4 leading-tight items-center gap-2 hidden md:flex">
              ADCP’s signature projects offer a bespoke way of living that goes
              beyond the ordinary. While we manage over 51,000 rental units
              across the UAE, we also have a select number of signature projects
              available for rent.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row py-5 gap-10 w-full px-5 md:px-20">
        <div className="w-full">
          <Image
            src="/images/Signature/adcp-3.jpg"
            alt="banner"
            width={500}
            height={300}
            className="h-[350px] w-full mt-8 object-cover rounded-xl"
          />
        </div>
        <div className="w-full">
          <h2 className="text-[32px] mt-7 text-[#1e2a45]">AD One</h2>
          <p>
            Luxury living at its very best, AD One Tower is filled with
            unmatched conveniences, situated in the heart of Abu Dhabi’s Capital
            District and designed for a perfect living experience. AD One Tower
            houses an exclusive collection of chic Soho-style lofts; one, two
            and three-bedroom apartments; and elegant duplex penthouses,
            offering residents a stylish, cosmopolitan home in tasteful
            surroundings.{" "}
          </p>
          <a href="#" className="text-[#9f3323] mt-5 absolute">
            Read more
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row py-5 gap-10 w-full px-5 md:px-20">
        <div className="w-full">
          <h2 className="text-[32px] mt-7 text-[#1e2a45]">Vera Building</h2>
          <p>
            Located in Al Raha Beach in Abu Dhabi, VERA is a brand-new, modern
            building with splendid views of Al Raha Beach Canals. Designed to
            offer a stylish living experience with all the modern conveniences,
            VERA offers one and two-bedroom apartments with open plan living,
            large balconies and exclusive facilities.{" "}
          </p>
          <a href="#" className="text-[#9f3323] mt-5 absolute">
            Read more
          </a>
        </div>
        <div className="w-full">
          <Image
            src="/images/Signature/veraBuilding.jpg"
            alt="banner"
            width={500}
            height={300}
            className="h-[350px] w-full mt-8 object-cover rounded-xl"
          />
        </div>
      </div>

      <div className="px-5 md:px-10 py-10">
        <div className="text-black flex flex-col justify-center items-center text-center my-5">
          <h2 className="text-5xl font-bold mb-2 leading-base">
            Featured Properties
          </h2>
          <p className="font-light opacity-80 max-w-4xl text-[22px]">
            Discover a wide range of properties that suit your individual needs
          </p>
        </div>
        <div className="flex justify-center flex-wrap w-full gap-10">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-full md:w-96"
            >
              <div className="group w-full h-[25rem] rounded-xl text-center flex flex-col items-center relative cursor-pointer overflow-hidden">
                <div className="relative w-full h-full overflow-hidden rounded-xl">
                  <Image
                    src={amenity.icon}
                    alt={`Amenity ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 group-hover:scale-105 rounded-xl"
                  />
                </div>

                {/* Price Overlay */}
                <div className="absolute left-4 bottom-4 right-4 z-10 bg-white p-4 rounded-xl flex flex-col items-start">
                  <h1 className="text-[30px] text-[#0f1821]">
                    {amenity.price}
                  </h1>
                </div>
              </div>

              {/* Description List */}
              <div className="mt-4 text-left w-[350px] space-y-1">
                {amenity.details.map((line, i) => (
                  <p key={i} className="font-medium text-[#595d6a]">
                    • {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SignatureProject;

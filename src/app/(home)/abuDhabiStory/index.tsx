import React from 'react';
import Image from 'next/image';

const AbuDhabiStory = () => {
  return (
    <div>
      <section className="bg-white text-center py-16 px-4 md:px-12 lg:px-32 pt-24">
        <div className="mb-12">
          <p className="text-sm tracking-widest text-[#9f3323] font-semibold uppercase mb-3">Who We Are</p>
          <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-4">ABU DHABI’S #1</h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed tracking-wide uppercase">
            The Story Behind Abu Dhabi’s Largest <br className="hidden md:inline" />
            Property Partner
          </p>
        </div>

        <div className="flex gap-4 max-w-7xl mx-auto">
          {/* Large Image Left */}
          <div className="w-[60%] relative h-[410px]">
            <Image
              src="/images/burj-khalifa-view.jpg"
              alt="Living Room"
              fill
              className="object-cover shadow-lg"
              priority
            />
          </div>

          {/* Stacked Images Right */}
          <div className="flex flex-col gap-4 w-[40%]">
            <div className="relative h-[250px] w-full">
              <Image
                src="/images/atlantis.jpg"
                alt="Bedroom"
                fill
                className="object-cover shadow-lg"
              />
            </div>
            <div className="relative h-[250px] w-full right-16">
              <Image
                src="/images/burj-al-arab.jpg"
                alt="Bathroom"
                fill
                className="object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AbuDhabiStory;

import Link from "next/link";
import React from "react";

export const Footer = ({ properties = [] }) => {
  return (
    <div className="bg-dark-2 text-white pt-12 pb-6">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-between gap-16">
        <div className="w-full md:w-3/5 flex flex-col justify-between gap-16">
          <div>
            <Link href="/">
              <img src="/logo.webp" alt="logo" className="h-10 " />
            </Link>
            <p className="mt-8 opacity-80">
              Discover lucrative opportunities in property investment. Maximize
              returns with carefully selected, high-potential properties. Start
              investing today!
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href=""
              target="_blank"
            >
              <img
                src="/icons/social/facebook.svg"
                alt="facebook"
                className="h-10 w-10 bg-white p-1.5 rounded-full"
              />
            </Link>
            {/* <img
              src="/icons/social/x.svg"
              alt="twitter"
              className="h-10 w-10 bg-white p-1.5 rounded-full"
            /> */}
            <Link
              href=""
              target="_blank"
            >
              <img
                src="/icons/social/instagram.svg"
                alt="instagram"
                className="h-10 w-10 bg-white p-1.5 rounded-full"
              />
            </Link>
            <Link
              href=""
              target="_blank"
            >
              <img
                src="/icons/social/linkedin.svg"
                alt="linkedin"
                className="h-10 w-10 bg-white p-1.5 rounded-full"
              />
            </Link>
            <Link href="mailto:info@relaam.ae">
              <img
                src="/icons/social/mail.svg"
                alt="mail"
                className="h-10 w-10 bg-white p-1.5 rounded-full"
              />
            </Link>
          </div>
        </div>
        <div className="w-full md:w-2/5 flex">
          <div className="w-1/2">
            <h3 className="text-md font-light opacity-60">Quick Links</h3>
            <div className="mt-4 flex flex-col gap-2">
              <Link href="/" className="block text-white font-bold">
                Home
              </Link>
              <Link href="/about-us" className="block text-white font-bold">
                About Us
              </Link>
              <Link href="/blog" className="block text-white font-bold">
                Blogs
              </Link>
              <Link href="/event" className="block text-white font-bold">
                Events
              </Link>
              <Link
                href="/real-estate-agent-dubai"
                className="block text-white font-bold"
              >
                Agent
              </Link>
            </div>
          </div>
          <div className="w-1/2">
            <h3 className="text-md font-light opacity-60">Our Properties</h3>
            <div className="mt-4 flex flex-col gap-2">
              <Link
                href={`/property/ad-one`}
                className="block text-white font-bold"
              >
                AD One
              </Link>
              <Link
                href={`/property/vera-building`}
                className="block text-white font-bold"
              >
                Vera Building
              </Link>
              <Link
                href="/real-estate-dubai"
                className="block text-white font-bold"
              >
                View All
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 2xl:px-4 mt-12 text-center">
        <p className="text-sm font-light opacity-50">
          © 2025 Relaam. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

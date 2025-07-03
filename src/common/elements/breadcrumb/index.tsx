import Link from "next/link";
import React from "react";

export const Breadcrumb = ({ items }: any) => {
  return (
    <div className="bg-dark-2 text-white pt-6 pb-6 border-b border-dark">
      <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 flex flex-col md:flex-row justify-start gap-16">
        <div className="flex items-center gap-4">
          {items.map((item: any, index: number) => (
            <div key={index} className="flex items-center gap-3">
              <Link href={item.link} className="text-white font-bold hover:text-gray transition-all duration-100">
                {item.name}
              </Link>
              {index < items.length - 1 && (
                <img src="/icons/slide-arrow.svg" alt="arrow" className="h-4 rotate-180" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

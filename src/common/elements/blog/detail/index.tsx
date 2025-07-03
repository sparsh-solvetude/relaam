"use client";

import React from "react";
import { Item } from "../item";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Link from "next/link";
import Head from "next/head";
import { FAQ } from "../../faq";

export const Detail = ({
  title,
  description,
  content,
  author,
  cover,
  readTime,
  type,
  suggestion,
  faq = [],
}: any) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
      </Head>
      <div className="max-w-screen-xl mx-auto px-6 sm:px-8 2xl:px-4 py-28 text-white">
        <div className="flex  flex-col sm:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <h2 className="text-5xl font-bold mb-6">{title}</h2>
            <div className="flex gap-4">
              <img
                src={
                  process.env.NEXT_PUBLIC_STRAPI_URL +
                  author?.attributes?.Image?.data?.attributes?.url
                }
                alt="house"
                className="h-12 w-12 rounded-full object-cover"
              />
              <div className="flex flex-col text-white">
                <h3 className="font-bold text-xl">
                  {author?.attributes?.Name}
                </h3>
                <p className="text-xs font-light opacity-60">
                  {author?.attributes?.Profession}
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 flex flex-row-reverse md:flex-col items-center md:items-end justify-between">
            <button className="bg-dark-2 p-2 rounded-full hover:bg-dark">
              <img src="/icons/share.svg" alt="share" className="h-8" />
            </button>
            <div className="text-sm">
              <span className="text-[#9f3517]">{type}</span>
              <span className="opacity-60 mx-4"> | </span>
              {readTime} min read
            </div>
          </div>
        </div>
        <img
          src={cover}
          alt="city"
          className="w-full h-128 object-cover rounded-3xl mt-8"
        />
        <div className="mt-12 flex items-start flex-col md:flex-row gap-10">
          <div className="w-full md:w-2/3">
            <BlocksRenderer
              content={content}
              blocks={{
                paragraph: ({ children }) => <p className="mb-3 text-justify">{children}</p>,
                // image: ({ src, alt }: any) => (
                //   <img
                //     src={src}
                //     alt={alt}
                //     className="w-full h-96 object-cover rounded-xl mb-8"
                //   />
                // ),
                heading: ({ children, level }: any) => {
                  switch (level) {
                    case 1:
                      return (
                        <h1 className="text-4xl font-bold mt-8 mb-3 first:mt-0">
                          {children}
                        </h1>
                      );
                    case 2:
                      return (
                        <h2 className="text-3xl font-bold mt-8 mb-3 first:mt-0">
                          {children}
                        </h2>
                      );
                    case 3:
                      return (
                        <h3 className="text-2xl font-bold mt-7 mb-3 first:mt-0">
                          {children}
                        </h3>
                      );
                    case 4:
                      return (
                        <h4 className="text-lg font-bold mt-6 mb-3 first:mt-0">
                          {children}
                        </h4>
                      );
                    case 5:
                      return (
                        <h5 className="text-base font-bold mt-5 mb-3 first:mt-0">
                          {children}
                        </h5>
                      );
                    default:
                      return (
                        <h6 className="text-sm font-bold mt-4 mb-3 first:mt-0">
                          {children}
                        </h6>
                      );
                      break;
                  }
                },
                list: ({ children, ordered }: any) => {
                  if (ordered) {
                    return (
                      <ol className="list-decimal list-outside mb-4 pl-6 text-justify">
                        {children}
                      </ol>
                    );
                  }
                  return (
                    <ul className="list-disc list-outside mb-4 pl-6 text-justify">
                      {children}
                    </ul>
                  );
                },
                link: ({ children, href }: any) => (
                  <Link href={href}>{children}</Link>
                ),
                "list-item": ({ children }: any) => (
                  <li className="mb-2">{children}</li>
                ),
              }}
            />
            {faq?.length > 0 && <FAQ list={faq} />}
          </div>
          <div className="w-full md:w-1/3 flex flex-col gap-8">
            {suggestion && (
              <>
                <h3 className="text-3xl font-bold">More from our blog</h3>
                {suggestion.map((item: any, index: any) => (
                  <Link
                    href={"/press-coverage/" + item?.attributes?.Slug}
                    key={index}
                  >
                    <Item
                      title={item?.attributes?.Title}
                      slug={item?.attributes?.Slug}
                      image={
                        process.env.NEXT_PUBLIC_STRAPI_URL +
                        item?.attributes?.Cover?.data?.attributes?.url
                      }
                      date={item?.attributes?.createdAt}
                      time={`${item?.attributes?.ReadTime || 5} mins`}
                      type={item?.attributes?.Type}
                    />
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

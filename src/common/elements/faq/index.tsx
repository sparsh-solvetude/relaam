import React from "react";
import { Item } from "./item";

export const FAQ = ({ list }: any) => {
  return (
    <>
      <h2 className="text-3xl font-bold mb-6 leading-base">
        Frequently Asked Questions
      </h2>
      <div className="bg-dark-2 rounded-xl flex flex-col px-4 md:px-6 py-2">
        {list.map((faq: any, index: any) => (
          <Item
            key={index}
            question={faq?.Question}
            answer={faq?.Answer}
            lastItem={index === list.length - 1}
          />
        ))}
      </div>
    </>
  );
};

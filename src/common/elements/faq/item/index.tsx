"use client";
import clsx from "clsx";
import React, { useState } from "react";

export const Item = ({lastItem = false, question, answer}: {
  lastItem?: boolean;
  question: string;
  answer: string;
}) => {
  const [show, showSet] = useState(false);
  return (
    <div className={clsx("text-white gap-4 py-3 px-2", {
        'border-b border-gray': !lastItem
    })}>
      <div
        className="flex items-center justify-between text-xl sm:text-2xl cursor-pointer gap-4"
        onClick={() => showSet(!show)}
      >
        {question}
        <div className=" text-center">{show ? "-" : "+"}</div>
      </div>
      <div
        className={clsx("mt-3 mb-2 text-base font-light opacity-80 leading-6", {
          hidden: !show,
        })}
      >
        <p>
          {answer}
        </p>
      </div>
    </div>
  );
};

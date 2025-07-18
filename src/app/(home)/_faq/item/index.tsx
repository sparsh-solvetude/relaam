"use client";
import clsx from "clsx";
import React, { useState } from "react";

type ItemProps = {
  lastItem?: boolean;
  question: React.ReactNode;
  answer: React.ReactNode;
};

export const Item = ({ lastItem = false, question, answer }: ItemProps) => {
  const [show, showSet] = useState(false);

  return (
    <div
      className={clsx("text-black gap-4 py-3 px-2", {
        "border border-black": !lastItem,
      })}
    >
      <div
        className="flex items-center justify-between text-sm cursor-pointer gap-4"
        onClick={() => showSet(!show)}
      >
        {question}
        <div className="text-center mr-2 transition-transform duration-300">
          <svg
            className={clsx(
              "w-4 h-4 text-gray-400 transform transition-transform duration-300",
              {
                "rotate-180": show,
              }
            )}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div
        className={clsx("mt-3 text-sm font-light opacity-80 leading-6", {
          hidden: !show,
        })}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};

// "use client";
// import clsx from "clsx";
// import React, { useState } from "react";

// export const Item = ({lastItem = false}) => {
//   const [show, showSet] = useState(false);
//   return (
//     <div className={clsx("text-black gap-4 py-3 px-2", {
//         'border-b border-gray': !lastItem
//     })}>
//       <div
//         className="flex items-center justify-between text-xl sm:text-2xl cursor-pointer gap-4"
//         onClick={() => showSet(!show)}
//       >
//         How to get connected with Relaam?
//         <div className=" text-center text-[#9f3517]">{show ? "-" : "+"}</div>
//       </div>
//       <div
//         className={clsx("mt-3 text-sm font-light opacity-80 leading-6", {
//           hidden: !show,
//         })}
//       >
//         <p>
//           Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
//           elit et nisi tincidunt maximus. Duis at facilisis massa. Vestibulum ut
//           libero id libero varius pharetra vitae vitae massa. Nullam vulputate
//           fringilla tellus. Aliquam neque felis, tincidunt at placerat quis,
//           laoreet non odio. Quisque hendrerit id ex gravida vestibulum.
//           Curabitur non mi tortor.
//         </p>
//       </div>
//     </div>
//   );
// };

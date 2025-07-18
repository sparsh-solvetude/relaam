import React from "react";
import { Item } from "./item";

const faqData = [
  {
    question: "How to get connected with Relaam?",
    answer:
      "You can connect with Relaam by signing up on our website and filling out the onboarding form. Our team will reach out to guide you through the process.",
  },
  {
    question: "What services does Relaam offer?",
    answer:
      "Relaam offers recruitment, HR consulting, and staffing services tailored for startups and enterprises.",
  },
  {
    question: "Is there a free consultation available?",
    answer:
      "Yes, we offer a free 30-minute consultation to understand your needs and see how we can help.",
  },
  {
    question: "Where is Relaam located?",
    answer:
      "Relaam is a remote-first company with team members working across the globe.",
  },
  {
    question: "How can I become a partner?",
    answer:
      "You can become a partner by contacting us through our partner program page or emailing us at partnerships@relaam.com.",
  },
];

export const FAQ = () => {
  return (
    <div className="flex flex-col w-full items-center my-10 bg-[#f9f4f1] py-16">
      <div className="mb-12 w-3/5 opacity-70">
        <p className="text-sm tracking-widest text-[#9f3323] font-semibold text-center uppercase mb-3">
          Frequently Asked Questions
        </p>
        <h1 className="text-3xl md:text-5xl font-light text-gray-900 mb-4 text-center uppercase">
          WE’RE HERE TO HELP
        </h1>
        <p className="text-xl text-gray-700 uppercase text-center text-amber-950">
          FIND QUICK ANSWERS TO YOUR MOST COMMON QUESTIONS.
        </p>
      </div>
      <div className="flex flex-col gap-3 w-2/4 max-h-96 overflow-auto">
        {faqData.map((item, index) => (
          <Item key={index} question={item.question} answer={item.answer} />
        ))}
      </div>
    </div>
  );
};

// import React from "react";
// import { Item } from "./item";

// export const FAQ = () => {
//   return (
//     <>
//       <div className="max-w-screen-2xl mx-auto px-6 sm:px-12 py-28 grid grid-cols-1 md:grid-cols-2 gap-12">
//         <div className="px-0 text-black flex flex-col justify-start items-start gap-3">
//           <h2 className="text-5xl font-bold mb-6 leading-base">
//             Frequently Asked Questions
//           </h2>
//           <p className="font-light opacity-80">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet
//             elit et nisi tincidunt maximus. Duis at facilisis massa. Vestibulum
//             ut libero id libero varius pharetra vitae vitae massa. Nullam
//             vulputate fringilla tellus. Aliquam neque felis, tincidunt at
//             placerat quis, laoreet non odio. Quisque hendrerit id ex gravida
//             vestibulum. Curabitur non mi tortor.
//           </p>
//           <div className="w-20 h-1 bg-[#9f3323] mt-4 transition-all duration-300 group-hover:w-20"></div>
//         </div>
//         <div className="bg-white rounded-xl flex flex-col px-4 md:px-6 py-2 shadow-lg border border-[#9f3323]">
//           <Item />
//           <Item />
//           <Item />
//           <Item />
//           <Item lastItem />
//         </div>
//       </div>
//     </>
//   );
// };

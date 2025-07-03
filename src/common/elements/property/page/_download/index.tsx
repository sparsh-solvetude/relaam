import PhoneNumber from "@/app/(home)/_booking/phone";
import React, { useState } from "react";

export const Download = ({
  showSet,
  title = "Download",
  docLink = null,
}: any) => {
  const [phone, phoneSet] = useState("+971");
  const [showResult, showResultSet] = useState(false);

  const onSubmit = (e: any) => {
    e.preventDefault();

    console.log(e.target.name.value);
    console.log(e.target.email.value);
    console.log(e.target[2].value);

    try {
      fetch(process.env.NEXT_PUBLIC_STRAPI_URL + "/api/contact-forms", {
        method: "POST",
        body: JSON.stringify({
          data: {
            Name: e.target.name.value,
            Email: e.target.email.value,
            Phone: phone,
            // Phone: e.target[2].value,
            Type: "property",
            PageURL: window.location.href,
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }).then(() => {
        showResultSet(true);

        download();
        // showSet(false);
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  const download = () => {
    if (docLink) {
      window.open(docLink, "_blank");
    }
  };

  return (
    // pop up for booking
    <div className="fixed left-0 top-0 w-screen h-dvh bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-dark text-white w-full sm:w-[44rem] h-full sm:h-auto rounded-none sm:rounded-2xl px-8 py-16 flex flex-col items-center justify-center border border-dark-2 relative shadow-2xl">
        <button
          className="absolute top-4 right-4"
          onClick={() => showSet(false)}
        >
          <img src="/icons/close.svg" alt="close" className="h-6" />
        </button>
        {showResult ? (
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-3">Thank You!</h2>
            <p className="text-lg">
              Your download will start shortly. If not, please click the button
              below.
            </p>
            <button
              className="bg-[#9f3517] text-white px-8 py-2 mt-4 rounded-lg font-bold text-lg"
              onClick={download}
            >
              Download
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center">
              {title}
            </h2>
            <form
              className="flex flex-col items-center gap-6 mt-10 w-full px-0 md:px-10"
              onSubmit={onSubmit}
            >
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="w-full bg-dark-3 px-4 py-3 rounded-lg text-dark"
              />
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                className="w-full bg-dark-3 px-4 py-3 rounded-lg text-dark"
              />
              <PhoneNumber
              // phone={phone} phoneSet={phoneSet}
              />
              <button
                className="bg-[#9f3517] text-white px-8 py-2 mt-4 rounded-lg font-bold text-lg"
                type="submit"
              >
                Download Now
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

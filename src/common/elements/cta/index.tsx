'use client';

import React, { useState } from "react";
import {Booking} from "../booking";

export const Cta = () => {
  const [show, showSet] = useState(false);
  return (
    <>
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex flex-col rounded-l-2xl overflow-hidden shadow-md z-40">
        <button className="bg-gray p-2 pr-1 hover:bg-white">
          <img src="/icons/cta/call.svg" alt="phone" className="h-6 md:h-8" />
        </button>
        <button className="bg-gray p-2 pr-1 hover:bg-white">
          <img src="/icons/cta/whatsapp.svg" alt="chat" className="h-6 md:h-8" />
        </button>
        <button className="bg-gray p-2 pr-1 hover:bg-white" onClick={() => showSet(!show)}>
          <img src="/icons/cta/submit.svg" alt="email" className="h-6 md:h-8" />
        </button>
      </div>
      {show && <Booking showSet={showSet} />}
    </>
  );
};

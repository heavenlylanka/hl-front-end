"use client";
import React from "react";
import { Qwigley } from "next/font/google";
import Image from "next/image";
import NineArche from "../../public/assets/signup_bg.png";
// import Button from './ui/button'
import { Button2 } from "./ui/button2";
// import { FiSend } from 'react-icons/fi';
import { Icons } from "@/components/icons"

const QwigleyFont = Qwigley({
  weight: "400",
  subsets: ["latin"],
});

function SubmitForm() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-center bg-gray-200">
      <div className="text-center lg:text-start max-w-3xl mb-12 bg-green-100 lg:max-w-98">
        <h1
          className={`${QwigleyFont.className} text-[180px] leading-none mb-4 
        bg-gradient-to-r from-pink-500 via-yellow-500 to-yellow-300 text-transparent bg-clip-text`}
        >
          Sri Lanka
        </h1>

        <p className="text-lg lg:pr-20 text-black lg">
          A land where history whispers from ancient ruins, where nature paints
          with vibrant hues, and where warm smiles greet you at every turn.
          Embark on a journey through our island paradise and uncover
          experiences that will captivate your senses and touch your soul.
        </p>
      </div>

      {/* right form */}
      <div className="relative w-80 lg:w-auto h-auto items-center bg-blue-300">
        <form className="relative z-10 w-full lg:w-[400px] flex flex-col justify-center pt-6 lg:pt-8 bg-black bg-opacity-50 p-6 rounded-lg">
            
          <div className="flex flex-col gap-1 pt-4">
            <label className="text-[16px] font-medium text-white">Name</label>
            <input
              type="text"
              className="h-12 lg:h-[62px] rounded-lg border border-gray-300 text-gray-900 text-sm w-full p-3 lg:p-2.5"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col gap-1 pt-4">
            <label className="text-[16px] font-medium text-white">Email</label>
            <input
              type="email"
              className="h-12 lg:h-[62px] rounded-lg border border-gray-300 text-gray-900 text-sm w-full p-3 lg:p-2.5"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col gap-1 pt-4">
            <label className="text-[16px] font-medium text-white">
              Message
            </label>
            <textarea
              className="h-12 lg:h-[62px] rounded-lg border border-gray-300 text-gray-900 text-sm w-full p-3 lg:p-2.5"
              placeholder="Type your message here..."
              required
            />
          </div>

          <Button2
            variant="secondary"
            className="w-[100px] bg-[#59AE5B] text-white flex items-center mt-5"
          >
            Submit <Icons.doubleArrows className="h-6 w-6" />
          </Button2> 
        </form>
      </div>
    </div>
  );
}

export default SubmitForm;
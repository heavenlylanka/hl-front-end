//..src/app/components/Hero.tsx
"use client"; 

import React from "react";
import Image from "next/image";
import Link from "next/link"; // Import Link component
import heroBackground from "../../public/assets/hero_background.png";

function Hero() {
  return (
    <div className="relative bg-cover bg-center h-auto min-h-[650px] lg:min-h-[680px] mx-2 md:mx-3 rounded-3xl overflow-hidden mt-20">
      <Image
        src={heroBackground} 
        alt="Sri Lankan elephants in the wild"
        fill
        objectFit="cover"
        quality={100}
      />
      <div className="absolute inset-0 bg-black bg-opacity-20" />
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold text-center mb-4 px-4 drop-shadow-lg">
          <span className="block">CRAFTING</span>
          <span className="text-yellow-400">UNFORGETTABLE</span>
          <span className="block">JOURNEYS</span>
          <span className="block">TO SRI LANKA.</span>
        </h1>

        {/* Corner buttons */}
        <div className="mt-8 bg-white absolute bottom-0 right-0 px-14 py-6 rounded-tl-3xl">
          <h2 className="text-black text-3xl font-semibold mb-4">Heavenly Lanka Vacations</h2>
          <div className="flex space-x-4">
            <Link href="/signup" legacyBehavior>
              <a className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full transition duration-300">
                Get Registered
              </a>
            </Link>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-full transition duration-300">
              Find Out More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;

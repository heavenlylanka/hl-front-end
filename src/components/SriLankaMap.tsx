"use client";
import React from 'react';
import Image from 'next/image';
import srilankaMap from "../../public/assets/Map.png";
import { Qwigley } from 'next/font/google';


const QwigleyFont = Qwigley({
  weight : "400",
  subsets : ["latin"]
})

function SriLankaMap() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-row items-center">
      <div className="text-center max-w-3xl mb-12">
      
        <h1 className={`${QwigleyFont.className} text-6xl text-black`}>Sri Lanka</h1>
        <p className="text-3xl text-orange-400 mb-6">the golden paradise</p>
        <p className="text-lg text-black">
          Sri Lanka is blessed with breathtaking natural beauty,
          from its pristine beaches and turquoise waters to its
          lush rainforests and mountain ranges. The country is
          home to a diverse range of flora and fauna, including
          elephants, leopards, and hundreds of species of birds.
        </p>
      </div>
      <div className="relative w-[300px] h-[500px]">
        <Image
          src={srilankaMap}
          alt="Sri Lanka Collage"
          fill
          objectFit="contain"
        />
      </div>
    </div>
  )
}

export default SriLankaMap
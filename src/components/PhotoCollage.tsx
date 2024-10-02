"use client";
import React from 'react'
import { LayoutGrid } from "./ui/layout-grid";
import Sigiri from "../../public/assets/sigiri.png"
import SigiriArts from "../../public/assets/arts_sigiri.png"
import Fishermans from "../../public/assets/fishermans.png"
import TempleTooth from "../../public/assets/templeTooth.png"

function PhotoCollage() {

  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  )
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        The Majestic Sigiriya Fortres
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Rising above the jungle, the ancient rock fortress of Sigiriya offers a glimpse into 
      Sri Lanka's royal history. This UNESCO World Heritage site is a blend of stunning architecture 
      and breathtaking views, making it a must-visit for those seeking both adventure and culture.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        The Timeless Beauty of Sigiriya Frescoes
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Adorning the walls of Sigiriya are these centuries-old frescoes, painted with vibrant colors 
        that depict the lives and beauty of ancient royal courtiers. These delicate murals have stood 
        the test of time, offering a peek into the artistry of Sri Lanka's past.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Traditional Stilt Fishing in the Coastal Waters
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Experience the tranquility of Sri Lanka's southern coast as local fishermen practice the age-old 
        art of stilt fishing. With the soft hues of the sunrise or sunset as the backdrop, this unique 
        tradition is a picturesque reminder of the island's rich cultural heritage.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        The Sacred Temple of the Tooth Relic
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Nestled in the heart of Kandy, the Temple of the Sacred Tooth Relic is one of Sri Lanka's most revered 
        Buddhist sites. The temple's golden glow at night reflects its significance as a spiritual center, 
        where history, faith, and serenity come together.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail: Sigiri,
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail: SigiriArts,
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail: Fishermans,
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail: TempleTooth,
  },
];

export default PhotoCollage
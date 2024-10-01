"use client";
import React from 'react'
import { LayoutGrid } from "./ui/layout-grid";
import Sigiri from "../../public/assets/sigiri.png"
import SigiriArts from "../../public/assets/arts_sigiri.png"
import Fishermans from "../../public/assets/fishermans.png"
import TempleTooth from "../../public/assets/templeTooth.png"

function PhotoCollage() {
  const cards = [
    {
      id: 1,
      className: "md:col-span-2",
      thumbnail: Sigiri,
    },
    {
      id: 2,
      className: "col-span-1",
      thumbnail: SigiriArts,
    },
    {
      id: 3,
      className: "col-span-1",
      thumbnail: Fishermans,
    },
    {
      id: 4,
      className: "md:col-span-2",
      thumbnail: TempleTooth,
    },
  ];

  return (
    <div className="h-screen py-20 w-full">
      <LayoutGrid cards={cards} />
    </div>
  )
}

export default PhotoCollage
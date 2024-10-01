"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "../../../components/ui/images-slider";
import Image from "next/image";
import json_file from "../../../data/TripPackageDetails.json";
import { Tabs } from "../../../components/ui/tabs";

import PackageCard from "@/components/PackageCard";
import tigerImage from "../../../../public/assets/tiger.png";
import trainImage from "../../../../public/assets/train.png";
import beachImage from "../../../../public/assets/beach.png";

import Link from "next/link";

import {
  Truck,
  Home,
  UtensilsCrossed,
  Ticket,
  Users,
  Baby,
} from "lucide-react";

function Page({ params }) {
  const images = [
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];
  const DummyContent = () => {
    return (
      <Image
        src=""
        alt="dummy image"
        width="1000"
        height="1000"
        className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
      />
    );
  };

  const tabs = [
    {
      title: "Overview",
      value: "overview",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl 
        font-bold text-white bg-gradient-to-br from-[#EDEDED] to-[#EDEDED]"
        >
          <p className="text-orange-500">Overview</p>
        </div>
      ),
    },
    {
      title: "Itinerary",
      value: "itinerary",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl 
        font-bold text-white bg-gradient-to-br from-[#EDEDED] to-[#EDEDED]"
        >
          <p className="text-orange-500">Itinerary</p>
        </div>
      ),
    },
    {
      title: "Inclusion/Exclusion",
      value: "inclusion",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl 
        font-bold text-white bg-gradient-to-br from-[#EDEDED] to-[#EDEDED]"
        >
          <p className="text-orange-500">Inclusion/Exclusion</p>
        </div>
      ),
    },
    {
      title: "Map",
      value: "map",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl 
        font-bold text-white bg-gradient-to-br from-[#EDEDED] to-[#EDEDED]"
        >
          <p className="text-orange-500">Map</p>
        </div>
      ),
    },
    {
      title: "Hotels",
      value: "hotels",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl 
        font-bold text-white bg-gradient-to-br from-[#EDEDED] to-[#EDEDED]"
        >
          <p className="text-orange-500">Hotels</p>
        </div>
      ),
    },
    {
      title: "FAQs",
      value: "faqs",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl 
        font-bold text-white bg-gradient-to-br from-[#EDEDED] to-[#EDEDED]"
        >
          <p className="text-orange-500">FAQs</p>
        </div>
      ),
    },
  ];
  const InfoItem = ({ icon, title, description }) => (
    <div className="flex flex-col items-start p-4 bg-white rounded-lg shadow-md">
      <div className="flex items-center mb-2">
        {icon}
        <h3 className="ml-2 text-xl font-bold text-orange-500">{title}</h3>
      </div>
      <p className="text-gray-700">{description}</p>
    </div>
  );

  const infoItems = [
    {
      icon: <Truck className="w-6 h-6 text-orange-500" />,
      title: "Transportation",
      description:
        json_file?.tourPackages?.[params.id]?.tourInfo?.transportation,
    },
    {
      icon: <Home className="w-6 h-6 text-orange-500" />,
      title: "Accomodation",
      description:
        json_file?.tourPackages?.[params.id]?.tourInfo?.accommodation,
    },
    {
      icon: <UtensilsCrossed className="w-6 h-6 text-orange-500" />,
      title: "Meals",
      description: json_file?.tourPackages?.[params.id]?.tourInfo?.meals,
    },
    {
      icon: <Ticket className="w-6 h-6 text-orange-500" />,
      title: "Admission Fee",
      description: json_file?.tourPackages?.[params.id]?.tourInfo?.admissionFee,
    },
    {
      icon: <Users className="w-6 h-6 text-orange-500" />,
      title: "Guide",
      description: json_file?.tourPackages?.[params.id]?.tourInfo?.guide,
    },
    {
      icon: <Baby className="w-6 h-6 text-orange-500" />,
      title: "Minimum Age",
      description: json_file?.tourPackages?.[params.id]?.tourInfo?.minimumAge,
    },
  ];

  const packages = [
    {
      id: 1,
      title: "Sri Lanka Unveiled",
      duration: "14 Days - Premium",
      days: 10,
      peopleRange: "4 - 16",
      imageSrc: beachImage,
      color: "bg-yellow-400",
    },
    {
      id: 2,
      title: "Sri Lanka Unveiled",
      duration: "14 Days - Premium",
      days: 10,
      peopleRange: "4 - 16",
      imageSrc: trainImage,
      color: "bg-green-500",
    },
    {
      id: 3,
      title: "Sri Lanka Unveiled",
      duration: "14 Days - Premium",
      days: 10,
      peopleRange: "4 - 16",
      imageSrc: tigerImage,
      color: "bg-[#F57552]",
    },
  ];

  return (
    <div>
      <div>
        <ImagesSlider className="h-[40rem]" images={images}>
          <motion.div
            initial={{
              opacity: 0,
              y: -80,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="z-50 flex flex-col justify-center items-center"
          >
            <motion.p
              className="font-bold text-xl md:text-6xl text-center 
            bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4"
            >
              {json_file?.tourPackages?.[params.id]?.title}
            </motion.p>
            <button
              className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20
             text-white mx-auto text-center rounded-full relative mt-4"
            >
              <span>Book this trip</span>
              <div
                className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent
               via-emerald-500 to-transparent"
              />
            </button>
          </motion.div>
        </ImagesSlider>
      </div>
      {/* second section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {infoItems.map((item, index) => (
            <InfoItem key={index} {...item} />
          ))}
        </div>
      </div>

      {/* animated tabs */}
      <div>
        <div
          className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl
         mx-auto w-full  items-start justify-start my-40"
        >
          <Tabs tabs={tabs} />
        </div>
      </div>
      {/* suggestion packages */}
      <div className="text-left mb-4 pl-60">
        <h2 className="text-[#10465E] text-3xl justify-center">
          Related trips you might interested in
        </h2>
      </div>
      {/* package card */}
      <div className="flex flex-wrap justify-center gap-8 mb-6">
        {packages.map((pkg, index) => (
          <Link key={pkg.id} href={`/tourDetails/${pkg.id}`}>
            <PackageCard
              key={index}
              title={pkg.title}
              duration={pkg.duration}
              days={pkg.days}
              peopleRange={pkg.peopleRange}
              imageSrc={pkg.imageSrc}
              color={pkg.color}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Page;

"use client";
import PackageCard from "./PackageCard";
import tigerImage from "../../public/assets/tiger.png"
import trainImage from "../../public/assets/train.png"
import beachImage from "../../public/assets/beach.png"
import leftArrow from "../../public/assets/left_arrow.png"
import rightArrow from "../../public/assets/right_arrow.png"
import Image from "next/image";

function PopPackages() {
  const packages = [
    { title: "Sri Lanka Unveiled", duration: "14 Days - Premium", days: 10, peopleRange: "4 - 16", imageSrc: beachImage, color: "bg-yellow-400" },
    { title: "Sri Lanka Unveiled", duration: "14 Days - Premium", days: 10, peopleRange: "4 - 16", imageSrc: trainImage, color: "bg-green-500" },
    { title: "Sri Lanka Unveiled", duration: "14 Days - Premium", days: 10, peopleRange: "4 - 16", imageSrc: tigerImage, color: "bg-[#F57552]" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* packages heading and description */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-2 text-black">Our Popular Packages</h1>
        <p className="text-xl text-gray-600">From Down Under to Island Wonders</p>
      </div>

      {/* package card */}
      <div className="flex flex-wrap justify-center gap-8 mb-6">
        {packages.map((pkg, index) => (
          <PackageCard
            key={index}
            title={pkg.title}
            duration={pkg.duration}
            days={pkg.days}
            peopleRange={pkg.peopleRange}
            imageSrc={pkg.imageSrc}
            color={pkg.color}
          />
        ))}
      </div>
      
      {/* carossel buttons */}
      <div className="flex justify-center pb-4">
        <button className="mx-2">
          <Image src={leftArrow} alt="Previous" width={24} height={24} />
        </button>
        <button className="mx-2">
          <Image src={rightArrow} alt="Next" width={24} height={24} />
        </button>
      </div>

      {/* View All Trips Button */}
      <div className="flex justify-center items-center mb-8">
        <button className="bg-yellow-400 text-white px-4 py-2 rounded-full flex items-center">
          View All Trips
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

    </div>
  )
}

export default PopPackages
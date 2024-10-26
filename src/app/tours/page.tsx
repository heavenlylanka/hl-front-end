//tours page
"use client";
import PackageCard from "../../components/PackageCard";
import tigerImage from "../../../public/assets/tiger.png";
import trainImage from "../../../public/assets/train.png";
import beachImage from "../../../public/assets/beach.png";
import leftArrow from "../../../public/assets/left_arrow.png";
import rightArrow from "../../../public/assets/right_arrow.png";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Page() {
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
    {
      id: 4,
      title: "Sri Lanka Unveiled",
      duration: "14 Days - Premium",
      days: 10,
      peopleRange: "4 - 16",
      imageSrc: beachImage,
      color: "bg-yellow-400",
    },
    {
      id: 5,
      title: "Sri Lanka Unveiled",
      duration: "14 Days - Premium",
      days: 10,
      peopleRange: "4 - 16",
      imageSrc: trainImage,
      color: "bg-green-500",
    },
    {
      id: 6,
      title: "Sri Lanka Unveiled",
      duration: "14 Days - Premium",
      days: 10,
      peopleRange: "4 - 16",
      imageSrc: tigerImage,
      color: "bg-[#F57552]",
    },
  ];
  return (
    <div className="min-h-screen">
      <Navbar/>
    <div className="pt-32">
      <div className="flex flex-col text-center justify-center">
        <h1 className="text-4xl font-bold mb-4">
          Discover Our
          <span className="bg-[#59AE5B] text-white px-2 rounded-[25px] py-2 pl-3 ml-3">
            Unforgettable Tours
          </span>
        </h1>
        <p className="mb-8 mx-auto text-center max-w-[36rem]">
          Embark on extraordinary journeys with our carefully curated selection
          of tours. From thrilling adventures to relaxing retreats, we have
          something for every traveler.
        </p>
      </div>

      <div>
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
    </div>
    <Footer/>
    </div>
  );
}

export default Page;

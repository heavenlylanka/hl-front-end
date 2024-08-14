import React from 'react';
import Image from 'next/image';

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};
interface PackageCardProps {
  title: string;
  duration: string;
  days: number;
  peopleRange: string;
  imageSrc: StaticImageData;
  color: string;
}

const PackageCard: React.FC<PackageCardProps> = ({ title, duration, days, peopleRange, imageSrc, color }) => {
  return (
    <div className={`min-w-96 ${color} rounded-3xl overflow-hidden shadow-lg`}>
      <div className="p-4">
        <div className="relative h-48 rounded-2xl overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            objectFit="cover"
          />
        </div>
      </div>
      <div className="px-6 py-4">
        <h2 className="font-bold text-xl mb-2 text-white">{title}</h2>
        <p className="text-white text-lg font-semibold">{duration}</p>
        <p className="text-white">
          {days} Days • {peopleRange} Peoples
        </p>
      </div>
      <div className="px-6 pb-4">
        <button className="bg-white text-black font-bold py-2 px-4 rounded-full flex items-center">
          View Trip
          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
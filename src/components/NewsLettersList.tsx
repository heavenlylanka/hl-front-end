// components/NewsLettersList.tsx

import React from "react";
import { MdFlightLand } from "react-icons/md";

interface NewsLetterProps {
  name: string;
  date: string;
  email: string;
  description: string;
}

const NewsLettersList: React.FC = () => {
  const newsletters: NewsLetterProps[] = [
    {
      name: "Sudesh Thashmika",
      date: "26/01/2024",
      email: "thashmikax@gmail.com",
      description: "Hi! I'm Sudesh Thashmika from 23rd batch. Faculty of Engineering, University..."
    },
    {
        name: "Sudesh Thashmika",
        date: "26/01/2024",
        email: "thashmikax@gmail.com",
        description: "Hi! I'm Sudesh Thashmika from 23rd batch. Faculty of Engineering, University..."
    },
    {
        name: "Sudesh Thashmika",
        date: "26/01/2024",
        email: "thashmikax@gmail.com",
        description: "Hi! I'm Sudesh Thashmika from 23rd batch. Faculty of Engineering, University..."
    },
    // Add more newsletter data as needed
  ];

  return (
    <div className="bg-white p-4 border rounded-2xl space-y-4">
      {newsletters.map((newsletter, index) => (
        <div key={index} className="flex-col sm:flex sm:flex-row justify-between items-center pb-4 mb-4">
          <div>
            <h2 className="max-sm:pb-2 text-lg font-semibold">{newsletter.name}</h2>
            <p className="max-sm:pb-1 text-gray-500 text-[12px]">{newsletter.description.slice(0, 76)}...</p>
          </div>
          <div className="max-sm:pb-1 flex items-center gap-2 sm:px-6">
            <MdFlightLand  />
            <span>{newsletter.date}</span>
          </div>
          <div className="font-medium">{newsletter.email}</div>
        </div>
      ))}
    </div>
  );
};

export default NewsLettersList;

// components/NewsLettersList.tsx
"use client";

import React, { useEffect, useState } from "react";
import { MdFlightLand } from "react-icons/md";

interface NewsLetterProps {
  name: string;
  submittedAt: string;
  email: string;
  message: string;
}
const NewsLettersList: React.FC = () => {
  const [newsletters, setNewsletters] = useState<NewsLetterProps[]>([]);

  useEffect(() => {
    // Fetch newsletters from the backend API
    const fetchNewsletters = async () => {
      try {
        const response = await fetch("http://localhost:8080/admin/contact-messages"); 
        if (!response.ok) {
          throw new Error("Failed to fetch newsletters");
        }
        const data = await response.json();
        setNewsletters(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNewsletters();
  }, []);

  return (
    <div className="bg-white p-4 border rounded-2xl space-y-4">
      {newsletters.length > 0 ? (
        newsletters.map((newsletter, index) => (
          <div
            key={index}
            className="flex-col sm:flex sm:flex-row justify-between items-center pb-4 mb-4"
          >
            <div>
              <h2 className="max-sm:pb-2 text-lg font-semibold">{newsletter.name}</h2>
              <p className="max-sm:pb-1 text-gray-500 text-[12px]">
                {newsletter.message.slice(0, 76)}...
              </p>
            </div>
            <div className="max-sm:pb-1 flex items-center gap-2 sm:px-6">
              <MdFlightLand />
              <span>{newsletter.submittedAt.split("T")[0]}</span>
            </div>
            <div className="font-medium">{newsletter.email}</div>
          </div>
        ))
      ) : (
        <p>No newsletters available.</p>
      )}
    </div>
  );
};

export default NewsLettersList;

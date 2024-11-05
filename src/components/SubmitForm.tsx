"use client";
import React, { useState } from "react";
import { Qwigley } from "next/font/google";
import Image from "next/image";
import NineArche from "../../public/assets/signup_bg.png";
import { Button2 } from "./ui/button2";
import { Icons } from "@/components/icons";

const QwigleyFont = Qwigley({
  weight: "400",
  subsets: ["latin"],
});

// Define the interface for form data
interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

function SubmitForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("Message received successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setResponseMessage("Error occurred. Please check your connection.");
    }

    setIsSubmitting(false);
  };

  return (
    <div className="container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-center">
      <div className="text-center lg:text-start max-w-3xl mb-12 lg:max-w-98">
        <h1
          className={`${QwigleyFont.className} text-[180px] leading-none mb-4 
          bg-gradient-to-r from-pink-500 via-yellow-500 to-yellow-300 text-transparent bg-clip-text`}
        >
          Sri Lanka
        </h1>

        <p className="text-lg mx-4 lg:pr-20 text-black lg">
          A land where history whispers from ancient ruins, where nature paints
          with vibrant hues, and where warm smiles greet you at every turn.
          Embark on a journey through our island paradise and uncover
          experiences that will captivate your senses and touch your soul.
        </p>
      </div>

      {/* right form */}
      <div className="relative w-96 lg:w-auto h-auto items-center py-12 px-2 bg-cover flex justify-center bg-[url('/assets/submitform_bg.png')] rounded-3xl">
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-3xl"></div>
        <form onSubmit={handleSubmit} className="relative z-10 w-full lg:w-[400px] flex flex-col justify-center pt-6 lg:pt-8 p-6">
          <div className="flex flex-col gap-1 pt-4">
            <label className="text-[16px] font-medium text-white">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="h-12 rounded-lg border border-gray-300 text-gray-900 text-sm w-full p-3 lg:p-2.5"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col gap-1 pt-4">
            <label className="text-[16px] font-medium text-white">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="h-12 rounded-lg border border-gray-300 text-gray-900 text-sm w-full p-3 lg:p-2.5"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="flex flex-col gap-1 pt-4">
            <label className="text-[16px] font-medium text-white">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="h-12 lg:h-[62px] rounded-lg border border-gray-300 text-gray-900 text-sm w-full p-3 lg:p-2.5"
              placeholder="Type your message here..."
              required
            />
          </div>

          <Button2
            type="submit"
            variant="secondary"
            disabled={isSubmitting}
            className="w-[100px] bg-[#59AE5B] text-white flex items-center mt-5"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
            <Icons.doubleArrows className="h-6 w-6" />
          </Button2>

          {responseMessage && (
            <p className="mt-4 text-white text-sm">{responseMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}

export default SubmitForm;

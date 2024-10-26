import SignUpForm from '@/components/SignUpForm';
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="min-h-screen">
    <Navbar/>

    <div className="min-h-screen bg-cover bg-center bg-[url('/assets/signup_bg.png')] mx-4 mt-24 px-6 rounded-3xl flex flex-col lg:flex-row lg:items-start justify-between">
      
      <div className="pt-16 w-full lg:w-[614px] text-center lg:text-left">
        <h1 className="text-white text-4xl lg:text-5xl font-semibold">
          Join Our
        </h1>
        <div className="text-4xl lg:text-5xl font-medium text-white bg-[#F57552] rounded-[36px] px-6 py-2 mt-4">
          Travel Community
        </div>
        <p className="text-white text-lg lg:text-xl pt-6">
          Welcome to Heavenly Lanka Vacations! Create your account to unlock a world of travel opportunities and personalized experiences.
        </p>
      </div>

      <div className="w-full lg:w-auto mt-10 lg:mt-0 flex justify-center">
        <SignUpForm />
      </div>
      </div>
      <Footer/>

    </div>
  );
}

export default Page;

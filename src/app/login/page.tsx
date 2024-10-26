import LoginForm from '@/components/LoginForm';
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



const Page = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
  
    <div className="min-h-screen bg-cover bg-center bg-[url('/assets/login_bg.png')] mx-4 mt-24 px-6 rounded-3xl  flex flex-col-reverse lg:flex-row lg:items-start justify-between">
      
      <div className="w-full lg:w-auto flex justify-center mt-10 lg:mt-0">
        <LoginForm />
      </div>

      <div className="flex flex-col items-center lg:items-end pt-16 w-full lg:w-[475px] text-center lg:text-right">
        <h1 className="text-white text-4xl lg:text-5xl font-semibold">
          Welcome Back,
        </h1>
        <div className="text-4xl lg:text-5xl font-medium text-white bg-[#F57552] rounded-[36px] px-6 py-2 mt-4">
          Traveler!
        </div>
        <p className="text-white text-lg lg:text-xl pt-10 mt-10">
          Log in to your account to access your personalized travel dashboard.
        </p>
      </div>
      
    </div>
    <Footer/>
    </div>
  );
}

export default Page;

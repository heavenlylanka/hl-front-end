import { Button2 } from '@/components/ui/button2'
import React from 'react'
import { Icons } from "@/components/icons"
import Navbar from "@/components/Navbar";


const page = () => {
  return (
    <div className="min-h-screen">
      <Navbar/>
    <div className="mx-8 sm:mx-12 md:mx-20 lg:mx-24 xl:mx-56 2xl:mx-64
    my-20 md:my-24 px-6 md:px-8 lg:px-10 py-6 pb-10 border border-black rounded-[14px]">
        <h1 className='text-[20px] font-semibold'>Tour Details</h1>

        <form>
        {/* Personal Details */}
        <div className='pt-3'>
            <h2 className='text-[14px] font-semibold'>Personal Details</h2>
            <div className='flex flex-col gap-1 pt-4'>
                <label className='text-[14px]'>Full Name</label>
                <input
                  type="text"
                  className='h-12 mt-1 rounded-[14px] border border-gray-300 placeholder:text-[#ABABAB] text-sm w-full p-3 lg:p-2.5'
                  placeholder='Enter your full name'
                  required
                />
            </div>
            <div className='flex flex-col gap-1 pt-4'>
                <label className='text-[14px]'>Email Address</label>
                <input
                  type="text"
                  className='h-12 mt-1 rounded-[14px] border border-gray-300 placeholder:text-[#ABABAB] text-sm w-full p-3 lg:p-2.5'
                  placeholder='Enter your email address'
                  required
                />
            </div>
            <div className='flex flex-col gap-1 pt-4'>
                <label className='text-[14px]'>Phone Number</label>
                <input
                  type="text"
                  className='h-12 mt-1 rounded-[14px] border border-gray-300 placeholder:text-[#ABABAB] text-sm w-full p-3 lg:p-2.5'
                  placeholder='Enter your phone number'
                  required
                />
            </div>
        </div>

        {/* Address */}
        <div className='pt-5'>
            <h2 className='text-[14px] font-semibold'>Address</h2>
            <div className='flex flex-col gap-1 pt-4'>
                <label className='text-[14px]'>Apartment ,suit ,etc.</label>
                <input
                  type="text"
                  className='h-12 mt-1 rounded-[14px] border border-gray-300 placeholder:text-[#ABABAB] text-sm w-full p-3 lg:p-2.5'
                  placeholder='Enter your apartment ,suit ,etc.'
                  required
                />
            </div>
            <div className='flex flex-col gap-1 pt-4'>
                <label className='text-[14px]'>City</label>
                <input
                  type="text"
                  className='h-12 mt-1 rounded-[14px] border border-gray-300 placeholder:text-[#ABABAB] text-sm w-full p-3 lg:p-2.5'
                  placeholder='Enter your city'
                  required
                />
            </div>
            <div className='flex flex-col gap-1 pt-4'>
                <label className='text-[14px]'>State / province</label>
                <input
                  type="text"
                  className='h-12 mt-1 rounded-[14px] border border-gray-300 placeholder:text-[#ABABAB] text-sm w-full p-3 lg:p-2.5'
                  placeholder='Select your state / province'
                  required
                />
            </div>
            <div className='flex flex-col gap-1 pt-4'>
                <label className='text-[14px]'>Country</label>
                <input
                  type="text"
                  className='h-12 mt-1 rounded-[14px] border border-gray-300 placeholder:text-[#ABABAB] text-sm w-full p-3 lg:p-2.5'
                  placeholder='Select your country'
                  required
                />
            </div>
            <div className='flex flex-col gap-1 pt-4'>
                <label className='text-[14px]'>ZIP / postal code</label>
                <input
                  type="text"
                  className='h-12 mt-1 rounded-[14px] border border-gray-300 placeholder:text-[#ABABAB] text-sm w-full p-3 lg:p-2.5'
                  placeholder='Enter your apartment ,suit ,etc.'
                  required
                />
            </div>
        </div>

        {/* Tour Details */}
        <div className='pt-5'>
            <h2 className='text-[14px] font-semibold'>Tour Details</h2>
            <div className='flex flex-col gap-1 pt-4'>
                <label className='text-[14px]'>Package ID</label>
                <input
                  type="text"
                  className='h-12 mt-1 rounded-[14px] border border-gray-300 placeholder:text-[#ABABAB] text-sm w-full p-3 lg:p-2.5'
                  placeholder='Enter your package ID'
                />
            </div>
            <div className='flex flex-col gap-1 pt-4'>
                <label className='text-[14px]'>Travel Dates</label>
                <input
                  type="text"
                  className='h-12 mt-1 rounded-[14px] border border-gray-300 placeholder:text-[#ABABAB] text-sm w-full p-3 lg:p-2.5'
                  placeholder='Select your travel dates'
                />
            </div>
        </div>

        {/* Number of Peoples */}
        <div className='pt-5'>
            <h2 className='text-[14px] font-semibold'>Number of Peoples</h2>
            <div className='flex flex-col gap-1 pt-4'>
                <label className='text-[14px]'>Adults</label>
                <input
                  type="text"
                  className='h-12 mt-1 rounded-[14px] border border-gray-300 placeholder:text-[#ABABAB] text-sm w-full p-3 lg:p-2.5'
                  placeholder='Enter your apartment ,suit ,etc.'
                  required
                />
            </div>
            <div className='flex flex-col gap-1 pt-4'>
                <label className='text-[14px]'>Children</label>
                <input
                  type="text"
                  className='h-12 mt-1 rounded-[14px] border border-gray-300 placeholder:text-[#ABABAB] text-sm w-full p-3 lg:p-2.5'
                  placeholder='Enter your city'
                  required
                />
            </div>
        </div>

        {/* Special Requests */}
        <div className='pt-5'>
            <h2 className='text-[14px] font-semibold'>Special Requests</h2>
            <div className='flex flex-col gap-1 pt-4'>
                <label className='text-[14px]'>State your requrements</label>
                <input
                  type="text"
                  className='h-12 mt-1 rounded-[14px] border border-gray-300 placeholder:text-[#ABABAB] text-sm w-full p-3 lg:p-2.5'
                  placeholder='Enter your apartment ,suit ,etc.'
                />
            </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex flex-row items-center justify-between pt-12">
            
            <label htmlFor="terms" className="text-sm text-gray-600">
                I agree to the{' '}
                <a href="#" className="text-[#1175BC] hover:underline">
                Terms and Conditions
                </a>
            </label>
            <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            />
        </div>

        {/* Button */}
        <Button2
            variant="destructive"
            className="w-full h-12 bg-[#0B2838] text-white flex items-center rounded-[14px] mt-5">
            Next <Icons.doubleArrows className="h-6 w-6" />
        </Button2>

        </form>
    </div>
    </div>
  )
}

export default page
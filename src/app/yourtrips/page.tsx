import BookingList from '@/components/BookingList';
import { SidebarDemo } from '@/components/SidebarDemo'
import Link from "next/link";
import React from 'react'
import { TbArrowBack } from "react-icons/tb";


const page = () => {
  return (
    <div className='pt-6 my-12'>
        <SidebarDemo>
          <div className='mt-4 mx-8 md:w-full lg:mr-32 pt-4'>
            {/* Top */}
            <div className='flex items-center justify-between w-full'>
            <h1 className="text-[30px] font-medium">
              Booking History
            </h1>

            <form className="w-auto lg:w-[360px] hidden sm:block">   
              <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                </div>
              <input type="search" id="default-search" className="block w-full h-12 p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-xl bg-white" placeholder="Search" required />
              </div>
            </form> 

              <Link href="/" className='items-center gap-1 hidden md:flex'>
                  <TbArrowBack />
                  <h1 className=''>return to home</h1>      
              </Link>

            </div>

            {/* Middle */}
            <div className='flex mt-4 lg:mt-8 items-center border rounded-2xl pl-4'> 
              <h1>Sort by</h1>
              <select id="countries" className="h-12 font-semibold text-base rounded-lg block py-2.5 px-4 focus:outline-none bg-transparent">
                <option selected>Price</option>
                <option value="US">Date</option>
              </select>
            </div>

            {/* Bottom-Booking History list called */}
            <div className='mt-2'>
              <BookingList/>
            </div>

          </div>
        </SidebarDemo>
        
    </div>
  )
}

export default page
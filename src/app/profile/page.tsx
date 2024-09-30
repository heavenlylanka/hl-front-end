"use client"; // Add this line at the top
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SidebarDemo } from '@/components/SidebarDemo';
import Image from "next/image";
import { Button2 } from '@/components/ui/button2';



//test
const Page: React.FC = () => {
  // commet below section to implement front beacouse of not showing problem
  /*
  const [user, setUser] = useState<{ email: string; name: string } | null>(null);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          setError('You need to log in first');
          return;
        }

        const response = await axios.get('http://localhost:8080/api/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        setError('Failed to fetch user data');
      }
    };

    fetchUserData();
  }, []);

  if (error) {
    return <div className="text-red-500 text-center mt-4">{error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }
  */
//
  return (  
    <div className="pt-6 my-12">
      
      {/* 
      // comment below section to implement front beacouse of not showing problem

      <div className="w-full lg:w-[505px] bg-white border-2 rounded-3xl items-center flex flex-col justify-center p-6 lg:p-8 my-12 lg:my-[100px]">
        <h3 className="text-center text-2xl lg:text-[31px] font-semibold">Profile</h3>
        <div className="pt-6">
          
          
          <p>Email: {user.email}</p>
          <p>Name: {user.name}</p> 
            
          
        </div>
      </div>
      */}
      <SidebarDemo>
        <div className='flex-col mx-8 md:w-full lg:mr-32 pt-4'>
          <h1 className="text-[30px] font-medium">Edit Profile</h1>

          <div className='flex-col border border-gray-300 rounded-2xl p-4'>
            <h1 className='font-medium text-[20px]'>Avatar</h1>
            {/* bottom div contain logo and and button and paragraph of upper */}
            <div className='flex pt-4 items-center'>
              <div className="w-[85px] h-[85px] rounded-full overflow-hidden">
                <img src="/assets/user_logo.png" alt="Avatar"   />
              </div>
              <div className="flex-col ml-4">

              <Button2 className="bg-[#1175BC] h-[32px] mb-2 text-white text-[16px] px-4 py-2 rounded-full flex items-center">
                Change Image
                <img src="/assets/double_arrow_Icon.png" alt="Arrow Right" className="w-3 h-3 ml-2" />
              </Button2>

                <p className='text-[11px] w-9/12'>
                  At least 800px * 800px recommended.
                  JPG and PNG is allowed
                </p>
              </div>
            </div>
          </div>

          {/* Personal Info form */}

          <div className='flex-col mt-6 border border-gray-300 rounded-2xl p-4 
          lg:pr-28 xl:pr-64 2xl:pr-72
          '>
            <h1 className='font-medium text-[20px]'>Personal Info</h1>
            <div>
             
              <div className='flex flex-col gap-1 pt-4'>
                <label className='font-medium text-[#8E8E8E] text-[12px]'>First Name</label>
                <input
                  type="text"
                  className='h-12 lg:h-[48px] lg:text-[18px] rounded-xl border border-gray-300 text-gray-900 text-sm w-full p-3 lg:p-2.5'
                  /* 
                    defaultValue={user.firstName}
                  */
                  defaultValue="First Name"
                />
              </div>

              <div className='flex flex-col gap-1 pt-4'>
                <label className='font-medium text-[#8E8E8E] text-[12px]'>Last Name</label>
                <input
                  type="text"
                  className='h-12 lg:h-[48px] lg:text-[18px] rounded-xl border border-gray-300 text-gray-900 text-sm w-full p-3 lg:p-2.5'
                  /* 
                    defaultValue={user.lastName}
                  */
                  defaultValue="Last Name"
                />
              </div>

              <div className='flex flex-col gap-1 pt-4'>
                <label className='font-medium text-[#8E8E8E] text-[12px]'>Email</label>
                <input
                  type="text"
                  className='h-12 lg:h-[48px] lg:text-[18px] rounded-xl border border-gray-300 text-gray-900 text-sm w-full p-3 lg:p-2.5'
                  /* 
                    defaultValue={user.email}
                  */
                  defaultValue="Email"
                />
              </div>

              <div className='flex flex-col gap-1 pt-4'>
                <label className='font-medium text-[#8E8E8E] text-[12px]'>Phone</label>
                <input
                  type="text"
                  className='h-12 lg:h-[48px] lg:text-[18px] rounded-xl border border-gray-300 text-gray-900 text-sm w-full p-3 lg:p-2.5'
                  /* 
                    defaultValue={user.PhoneNumber}
                  */
                  defaultValue="Phone Number"
                />
              </div>

            </div>

            <Button2 className="bg-[#1175BC] h-[32px] mt-8 mb-2 text-white text-[16px] px-4 py-2 rounded-full flex items-center">
              Save Changes
              <img src="/assets/double_arrow_Icon.png" alt="Arrow Right" className="w-3 h-3 ml-2" />
            </Button2>
          </div>
        </div>
      </SidebarDemo>
    </div>
  );
};

export default Page;
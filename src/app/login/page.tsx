

import LoginForm from '@/components/LoginForm'
import React from 'react'

const page = () => {
  return (

    <div className=" min-h-screen bg-cover bg-center bg-[url('../assets/login_bg.jpg')] 
    mx-[10px] mt-24 px-[60px] rounded-[60px] mb-[300px] flex items-center justify-between
    ">

        <div className=''>
            <LoginForm/>
        </div> 
        
        <div className=' h-screen flex-col flex items-end pt-16 w-[475px]
        '>
            <h1 className='text-white text-[64px] font-semibold
            max-2xl:text-[52px]'>
                Welcome Back,
            </h1>
            <div className='text-[64px] font-medium text-white h-[96px] bg-[#F57552]
            rounded-[36px] flex justify-center px-5
            max-2xl:text-[52px] max-2xl:h-[76px] max-2xl:rounded-[28px]'>
                Traveler!
            </div>

            <p className='text-white text-[24px] pt-6  flex text-end'>
            Log in to your account to access your personalized travel dashboard.
            </p>
            
        </div>
</div>
  )
}

export default page
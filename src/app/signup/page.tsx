import SignUpForm from '@/components/SignUpForm'
import React from 'react'



const page = () => {
  return (

    <div className=" min-h-screen bg-cover bg-center bg-[url('../assets/signup_bg.jpg')] 
    mx-[10px] mt-24 px-[60px] rounded-[60px] mb-[300px] flex items-center justify-between
    ">
        
        <div className='h-screen pt-16 w-[614px]
        max-2xl:w-[492px]'>
            <h1 className='text-white text-[64px] font-semibold
            max-2xl:text-[52px]'>
                Join Our
            </h1>
            <div className='text-[64px] font-medium text-white h-[96px] bg-[#F57552]
            rounded-[36px] px-[26px]
            max-2xl:text-[52px] max-2xl:h-[76px] max-2xl:rounded-[28px]'>
                Travel Community
            </div>

            <p className='text-white text-[24px] pt-6'>
                Welcome to Heavenly Lanka Vacations! Create your account to unlock a world of travel opportunities and personalized experiences.
            </p>
            
        </div>
        <div className=''>
            <SignUpForm/>
        </div> 
  
    </div>

    

  
    


    
  )
}

export default page
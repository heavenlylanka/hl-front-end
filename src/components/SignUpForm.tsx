import React from 'react'

const SignUpForm = () => {
  return (
    <div className=' 2xl:w-[673px] bg-white border-2 rounded-3xl items-center flex flex-col justify-center py-[100px]
    max-2xl:w-[445px] max-2xl:py-[66px] max-xl:w-[445px]'>
    <h3 className='text-center text-[31px]'>Sign up to</h3>
    <span className='pt-2 text-center text-[16px]'>Heavenly Lanka Vacations</span>

    <div className='w-[480px] content-center flex flex-col justify-center
    max-2xl:w-[420px]'>
        
    <div className='flex flex-col gap-0 pt-5'>
        <span className='text-[16px]'>Email</span>
        <input type="text" className='my-2 h-[62px] rounded-lg border border-gray-600 text-gray-900 text-sm w-full p-2.5
        max-2xl:h-[50px]' placeholder='Enter your email'/>
    </div>

    <div className='flex flex-col gap-0 pt-5'>
        <span className='text-[16px]'>Username</span>
        <input type="text" className='my-2 h-[62px] rounded-lg border border-gray-600 text-gray-900 text-sm w-full p-2.5
        max-2xl:h-[50px]' placeholder='Enter your username'/>
    </div>

    <div className='flex flex-col gap-0 pt-5'>
        <span className='text-[16px]'>Password</span>
        <input type="text" className='my-2 h-[62px] rounded-lg border border-gray-600 text-gray-900 text-sm w-full p-2.5
        max-2xl:h-[50px]' placeholder='Enter your password'/>
    </div>

    <div className='flex flex-col gap-0 pt-5'>
        <span className='text-[16px]'>Confirm Password</span>
        <input type="text" className='my-2 h-[62px] rounded-lg border border-gray-600 text-gray-900 text-sm w-full p-2.5
        max-2xl:h-[50px]' placeholder='Confirm your password'/>
    </div>

    

    <button className=" h-[62px] text-white bg-black mt-8 border-none text-[16px] font-medium rounded-lg cursor-pointer
    max-2xl:h-[50px]">Register</button>
    </div>

    <div className='flex pt-4 text-[16px]'>
        <p className='font-light'>Already have an Account ?</p>
        <p className='font-semibold pl-1'>Log in</p>
    </div>
    
</div>
  )
}

export default SignUpForm
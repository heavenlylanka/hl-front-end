

import LoginForm from '@/components/LoginForm'
import React from 'react'

const page = () => {
  return (
    <div className='mx-10 pt-[100px] mb-[300px] flex-col content-center justify-center h-[50vw]'>
        <h1 className=''>Login page</h1>
        
        <LoginForm/>
  
    </div>
  )
}

export default page
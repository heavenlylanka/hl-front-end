import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import PayNowDetails from '@/components/PayNowDetails'
import React from 'react'

const Paynow = () => {
  return (
    <div className='flex flex-col items-center w-full'>
        <Navbar/>
        <div className='mx-4 mt-28 lg:mt-32 px-6 flex flex-col items-center md:w-full md:px-20 lg:w-[1000px]'>
            <h1 className='w-full font-semibold text-black text-opacity-50 text-center'>You have to make 10% advance of full payment for booking</h1>
            <div className='w-full'>
              <PayNowDetails
                  promotion={13.18}
                  taxesAndFees={0.99}
                  originalPrice={1000.0}
                  discountedPrice={13.18}/>
            </div>
        </div>       
        <Footer/>
    </div>
  )
}

export default Paynow
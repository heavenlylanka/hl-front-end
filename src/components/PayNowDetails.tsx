import React from 'react';
import Image from 'next/image';
import credit_card from '../../public/assets/credit_card.png';
import paid_greenmark from '../../public/assets/paid_greenmark.png';
import { Button2 } from './ui/button2';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const PayNowDetails: React.FC = () => {
  return (
    <div className="mt-3 rounded-lg space-y-8">
      {/* Package Details */}
      <div className="bg-[#D68631] bg-opacity-30 p-4 rounded-2xl flex justify-between items-center">
        <div className=''>
          <h2 className="text-black font-semibold">
            Cultural Sri Lanka 14 Days - Premium (Full Payment)
          </h2>
          <p className="text-[#6B6B6B] text-sm">May 12, 2024 - May 26, 2024</p>
        </div>
        <Image src={paid_greenmark} alt="paid_greenmark"  className="w-6 lg:w-8 mx-8" />
        <div className="text-right">
          <span className="block text-black font-semibold">US$1000.00</span>
          <span className="line-through text-[#6B6B6B]">US$13.18</span>
        </div>
      </div>

      {/* Payment Breakdown */}
      <div className="space-y-2 px-4">
        <div className="flex justify-between">
          <span className="text-[#6B6B6B]">Advance Payment</span>
          <span className="text-black font-semibold">US$300.00</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#6B6B6B]">Promotion</span>
          <span className="text-[#05A357] font-semibold">-US$13.18</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#6B6B6B] flex items-center justify-center gap-5">
            Taxes & Other fees    
            <span className="ml-1 text-white text-xs bg-[#6B6B6B] bg-opacity-60 rounded-full w-4 h-4 flex items-center justify-center">i</span>
          </span>
          <span className="text-black font-semibold">US$0.99</span>
        </div>
        <div className="flex justify-between font-bold text-black">
          <span>Total</span>
          <span>US$13.18</span>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-[#D9D9D9] p-4 rounded-2xl flex items-center justify-between">
        <div className="flex items-center justify-between w-full">
          <div className="w-16 flex items-center">
            <Image src={credit_card} alt="Credit_Card" className="w-full" />
          </div>
          <span className="">Select Payment Method</span>
        </div>
      </div>
      {/* Pay now Button */}
      <div className='flex justify-end'>
        <Button2
            variant="secondary"
            className="w-auto bg-[#59AE5B]  text-white flex items-center justify-center"
            >
            Pay Now <MdKeyboardDoubleArrowRight className='h-5 w-5'/>
        </Button2>
      </div>
         
    </div>
  );
};

export default PayNowDetails;

import React from 'react';
import Image from 'next/image';
import credit_card from '../../public/assets/credit_card.png';
import paid_greenmark from '../../public/assets/paid_greenmark.png';
import { Button2 } from './ui/button2';
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { PayPalButtons,PayPalScriptProvider} from '@paypal/react-paypal-js';

interface PayNowDetailsProps {
    promotion: number;
    taxesAndFees: number;
    originalPrice: number;
    discountedPrice: number;
  }

const PayNowDetails: React.FC<PayNowDetailsProps> = ({  
    promotion,
    taxesAndFees,
    originalPrice,
    discountedPrice,
  }) => {
    const advancePayment = originalPrice * 0.1;
    const total = advancePayment - promotion + taxesAndFees;

    const intialOptions={
      "clientId": "AZIcZTr8KHiNqTkscw2Sbn8eZ1FYU3sg_D6v3QVjMXzTFcCUxuVMnMpyeHRYdcktv9W-u0oRQmjezS0B",
      currency:"USD",
      intent:"capture"
  };

  const createOrder=(data:any,actions:any)=>{
      return actions.order.create({
          purchase_units:[{
              amount:{
                  currency_code:"USD",
                  value:"1"
              }
          }]
      });
  }

      const onApprove=(data:any,actions:any)=>{
          return actions.order.capture().then(function(details:any){
              console.log(details);
          });
      }
     
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
          <span className="block text-black font-semibold">{`US$${originalPrice.toFixed(2)}`}</span>
          <span className="line-through text-[#6B6B6B]">{`US$${discountedPrice.toFixed(2)}`}</span>
        </div>
      </div>

      {/* Payment Breakdown */}
      <div className="space-y-2 px-4">
        <div className="flex justify-between">
          <span className="text-[#6B6B6B]">Advance Payment</span>
          <span className="text-black font-semibold">{`US$${advancePayment.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#6B6B6B]">Promotion</span>
          <span className="text-[#05A357] font-semibold">{`-US$${promotion.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#6B6B6B] flex items-center justify-center gap-5">
            Taxes & Other fees    
            <span className="ml-1 text-white text-xs bg-[#6B6B6B] bg-opacity-60 rounded-full w-4 h-4 flex items-center justify-center">i</span>
          </span>
          <span className="text-black font-semibold">{`US$${taxesAndFees.toFixed(2)}`}</span>
        </div>
        <div className="flex justify-between font-bold text-black">
          <span>Total</span>
          <span>{`US$${total.toFixed(2)}`}</span>
        </div>
      </div>

      <div className='items-center'>
      <PayPalScriptProvider options={intialOptions}>
            <PayPalButtons 
            style={{"layout":"vertical"}}
            createOrder={(data:any,actions:any)=>createOrder(data,actions)}
            onApprove={(data:any,actions:any)=>onApprove(data,actions)}
            />
        </PayPalScriptProvider>
      </div>
      {/* Pay now Button */}
      
         
    </div>
  );
};

export default PayNowDetails;

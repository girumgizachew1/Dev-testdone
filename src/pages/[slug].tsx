import React, { useEffect } from 'react';
import { useState } from 'react';
import type { Cart } from 'swell-js';
import swell from 'swell-js';

import CustomerForm from '@/components/form';
import ShippmentForm from '@/components/shippment';
import PaymentForm from '@/components/payment';

import Loader from '@/components/loading';
import OrderSummary from '@/components/order_summary';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = ({ checkout_id }: { checkout_id: string }) => {
  swell.init(
    process.env.NEXT_SWELL_PUBLIC_STORE as string,
    process.env.NEXT_SWELL_PUBLIC_API_TOKEN as string
  );


  
  // Initialize the client first

  const [loading, setLoading] = useState<boolean>(false);
  const [cart, setCart] = useState<Cart | any>(null);
  useEffect(() => {
    setLoading(true);
    // @ts-ignore
    swell.cart.recover(checkout_id).then((e: any) => {
      setCart({ ...e });
    });
    setLoading(false);
  }, []);

   // Use state variables to track the current step
   const [currentStep, setCurrentStep] = useState(1);

   // Function to navigate to the next step
   const handleNext = () => {
     setCurrentStep(currentStep + 1);
   };
 
   // Function to navigate to the previous step
   const handlePrev = () => {
     setCurrentStep(currentStep - 1);
   };

   
  // Render the appropriate step based on the current step
  let stepContent;
  switch (currentStep) {
    case 1:
      stepContent = (
        <div className=''>
          {/* Customer information form */}
          <CustomerForm />
          <div className='flex justify-between mt-5'>
          <button  
            className="h-12 w-24 text-xs font-medium text-custom-200"
            >Return To home</button>
          <button
            className="h-12 w-48 rounded bg-custom-200 text-xs font-medium text-white" 
            onClick={handleNext}>Continue to Shipping</button>
        </div>
        </div>
      );
      break;
    case 2:
      stepContent = (
        <div>
          {/* Shipping information form */}
          <ShippmentForm />
          <div className='flex justify-between mt-5'>
          <button 
          className="h-12 w-24 text-xs font-medium text-custom-200"
          onClick={handlePrev}>Back</button>
          <button 
          className="h-12 w-48 rounded bg-custom-200 text-xs font-medium text-white" 
          onClick={handleNext}>Continue To Payment</button>
        </div>
        </div>
      );
      break;
    case 3:
      stepContent = (
        <div>
          {/* Payment form */}
          <PaymentForm />
          <div className='flex justify-between mt-5'>
          <button 
          className="h-12 w-24 text-xs font-medium text-custom-200"
          onClick={handlePrev}>Back</button>
          <button 
          className="h-12 w-48 rounded bg-custom-200 text-xs font-medium text-white" 
          onClick={handleNext}>Complete Order</button>
        </div>
        </div>
      );
      break;
    default:
      stepContent = null;
  }

  return (
    <Main
      meta={
        <Meta
          title="Next.js checkout Presentation"
          description="Next js checkout is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      {loading && (
        <div
          id="loading-screen"
          className="fixed top-0 left-0 z-50 block  h-full w-full bg-white"
        >
          <span className="relative top-1/2 my-0 mx-auto block h-0 w-0  opacity-75">
            <Loader />
          </span>
        </div>
      )}

      <div className="relative bg-white">
        <div className="mx-auto grid min-h-screen grid-cols-12 ">
          <div className="mx-auto mr-6  py-6 sm:py-12 lg:col-span-4 lg:col-start-4 bg-white p-10">
            <div className="ml-auto w-full">
              <img className='content-center	 p-2 w-80 h-24 object-center'  src='/assets/images/logo.jpg' alt='logo' ></img>
              <div className='mt-3' >
                <hr className=" w-full border-gray-400" />
                {/* Circles for eachstep */}
                <div className="flex justify-between items-center -mt-3 ">
                <div className={`w-6 h-6 rounded-full ${ currentStep >= 1 ? 'bg-gray-800' : 'bg-gray-300' }`}/>
                <div className={`w-6 h-6 rounded-full ${ currentStep >= 2 ? 'bg-gray-800' : 'bg-gray-300' }`}/>
                <div className={`w-6 h-6 rounded-full ${ currentStep >= 3 ? 'bg-gray-800' : 'bg-gray-300' }`}/>
                </div>


                  {/* Header with navigation links */}
                    <ul className="flex justify-between items-center text-lg font-medium">
                        <li
                          className={`cursor-pointer ${
                            currentStep === 1 ? 'text-gray-900' : 'text-gray-500'
                          }`}
                        >
                          Customer
                        </li>
                          <li
                            className={`cursor-pointer ${
                              currentStep === 2 ? 'text-gray-900' : 'text-gray-500'
                            }`}
                          >
                            Shipping
                          </li>
                          <li
                            className={`cursor-pointer ${
                              currentStep === 3 ? 'text-gray-900' : 'text-gray-500'
                            }`}
                          >
                            Payment
                          </li>
                    </ul>
                </div>
     {/* Header with navigation links */}
          <div>
            {stepContent}
          </div>
            </div>
          </div>
          {cart !== null && <OrderSummary {...cart} />}
        </div>
      </div>
    </Main>
  );
};

export async function getServerSideProps(context: any) {
  return {
    props: {
      checkout_id: context.query.slug,
    },
  };
}

export default Index;

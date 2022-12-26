import React from 'react'
import  { useState , useEffect } from "react";
import Swell from 'swell-js';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function payment() {
  const currentStepaccepted = useSelector(state => state.currentStep);
  const dispatch = useDispatch();

  const handleback = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); 
  dispatch({ type: 'SET_INPUT_VALUES',value11: currentStepaccepted-1 }); 
  
}

const handleSubmit = (event: { preventDefault: () => void; }) => {
  event.preventDefault(); 
dispatch({ type: 'SET_INPUT_VALUES',value11: currentStepaccepted+1 }); 

}
 

  const [paymentMethod, setPaymentMethod] = useState("");

  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setPaymentMethod(event.target.value);
  };

  useEffect(() => {
    Swell.payment.createElements({
      paypal: {
        elementId: '#paypal-button',
        style: {
          layout: 'horizontal',
          color: 'blue',
          shape: 'rect',
          label: 'buynow',
          tagline: false,
        },
        onSuccess: () => {
          Swell.cart.submitOrder();
        },
        onError: (error: any) => {
          console.log('onError', error);
        },
      },
    });
   
  
  
  }, []);




  return (
    <div className="w-full">
    <div className="flex items-center">
       <div className="w-5 h-5 rounded-full bg-gray-900 text-white text-center flex items-center justify-center">
          <i className="fas fa-check"></i>
        </div>
      <span className="ml-2 text-base">Customer Information</span>
    </div>
    <table className="table-auto w-full border mt-4">
    <thead>
      <tr className="text-left text-sm">
        <td className="px-4 py-2">Contact</td>
        <td className="px-4 py-2">John Doe</td>
        <td className="px-4 py-2"><button className='text-xs text-custom-200' >change</button></td>

      </tr>
    </thead>
    <tbody>
      <tr  className="border-t text-left text-sm" >
        <td className="px-4 py-2">Shipping Address</td>
        <td className="px-4 py-2">123 Main Street</td>
        <td className="px-4 py-2"><button className='text-xs text-custom-200' >change</button></td>
      </tr>
    </tbody>
    <tbody>
      <tr  className="border-t text-left text-sm" >
        <td className="px-4 py-2">method</td>
        <td className="px-4 py-2">-express Shipping <br></br> -standard shipping </td>
        <td className="px-4 py-2"><button className='text-xs text-custom-200' >change</button></td>
      </tr>
    </tbody>
  </table>

    <div className='w-full h-fit bg-custom-100 mt-6 rounded-md flex flex-row space-x-3 p-2' >
      <img src='/assets/images/truck.png' className='w-7 h-7 ml-3' alt='track' ></img>
      <h1 className='text-xs text-center' >please note your order has been split into 2 deliveries </h1>  
      </div>
    
    <div className="flex items-center mt-6">
       <div className="w-5 h-5 rounded-full bg-gray-900 text-white text-center flex items-center justify-center">
          <i className="fas fa-check"></i>
        </div>
      <span className="ml-2 text-base">Payment</span>
    </div>

    <table className="table-auto w-full border mt-4">
    <thead>
      <tr className="text-left text-sm">
        <td className="px-4 py-2">All transaction are secure and encrypted </td>
      </tr>
    </thead>
    </table>


    <div>
          <div id="paypal-button"></div>
    </div>
    <div className='flex justify-between mt-5'>
          <button 
          className="h-12 w-24 text-xs font-medium text-custom-200"
          onClick={handleback}>Back</button>
          <button 
          className="h-12 w-48 rounded bg-custom-200 text-xs font-medium text-white" 
          onClick={handleSubmit}>Complete Order</button>
        </div>

  </div>
  )
}

export default payment
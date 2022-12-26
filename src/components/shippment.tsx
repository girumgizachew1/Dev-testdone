import  { useState } from "react";
import React  from 'react'
import Splitdelivery from "./splitdelivery";
import type { CartItem, ListResult } from 'swell-js';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



function shippment({ items,}: {  items: Array<CartItem>;  discount_total: number;  total: number;  sub_total: number; tax_total: number;promotions: ListResult<any>; grand_total: number;}) {
  
  const [instruction, setInstruction] = useState('');
  const dispatch = useDispatch();

  const currentStepaccepted = useSelector(state => state.currentStep);
  const firstNamestate = useSelector(state => state.firstName);
  const lastNamestate  = useSelector(state => state.lastName);
  const companystate   = useSelector(state => state.company);
  const addressstate   = useSelector(state => state.address);
  const apartmentstate = useSelector(state => state.apartment);
  const emailstate     = useSelector(state => state.email);
  const zipcodestate  = useSelector(state => state.zipcode);
  const statestate   = useSelector(state => state.state);
  const citystate   = useSelector(state => state.city);
  const countrystate = useSelector(state => state.country);
  const phonestate     = useSelector(state => state.phonenumber);

 
  const handleback = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); 
  dispatch({ type: 'SET_INPUT_VALUES',value11: currentStepaccepted-1, value1: firstNamestate, value2: lastNamestate, value3: companystate, value4: addressstate, value5: apartmentstate,
  value6: zipcodestate, value7: statestate, value8: citystate, value9: countrystate, value10: phonestate , value12: emailstate  }); 
  
}

const handleSubmit = (event: { preventDefault: () => void; }) => {
  event.preventDefault(); 
dispatch({ type: 'SET_INPUT_VALUES',value11: currentStepaccepted+1 , value13: instruction , value1: firstNamestate, value2: lastNamestate, value3: companystate, value4: addressstate, value5: apartmentstate,
value6: zipcodestate, value7: statestate, value8: citystate, value9: countrystate, value10: phonestate , value12: emailstate 
 }); 

}



   // Use state variables to track the current step

   // Function to navigate to the next step
 


 
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
          <td className="px-4 py-2">{firstNamestate} {lastNamestate} <br></br> {emailstate}</td>
          <td className="px-4 py-2"><button onClick={handleback} className='text-xs text-custom-200' >change</button></td>

        </tr>
      </thead>
      <tbody>
        <tr  className="border-t text-left text-sm" >
          <td className="px-4 py-2">Shipping Address</td>
          <td className="px-4 py-2">{countrystate} {statestate} {citystate} <br></br> {addressstate} {companystate} {apartmentstate}</td>
          <td className="px-4 py-2"><button onClick={handleback} className='text-xs text-custom-200' >change</button></td>
        </tr>
      </tbody>
    </table>
    
    <div className="flex items-center mt-4">
         <div className="w-5 h-5 rounded-full bg-gray-900 text-white text-center flex items-center justify-center">
            <i className="fas fa-check"></i>
          </div>
        <span className="ml-2  text-base">Select Shipping detail and dates</span>
    </div>


    {items?.map((e: any, key) => (
            <Splitdelivery length={items.length} index={key+1} key={key} {...e} />
          ))}


    

    <div className="mb-4">
      <label htmlFor="delivery-instructions" className="block text-sm mb-2">
        Please provide delivery instructions if any
      </label>
      <input
        type="text"
        id="delivery-instructions"
        name="delivery-instructions"
        placeholder="Instructions"
        className="appearance-none border w-full py-2 px-3 rounded-md leading-tight focus:outline-none focus:shadow-outline-blue text-sm"
        value={instruction}
        onChange={(event) => setInstruction(event.target.value)}
      
      />
    </div>
    <div className='flex justify-between mt-5'>
          <button 
          onClick={handleback}
          className="h-12 w-24 text-xs font-medium text-custom-200">
            Back
          </button>
          <button 
          onClick={handleSubmit}
          className="h-12 w-48 rounded bg-custom-200 text-xs font-medium text-white" 
          >Continue To Payment</button>
      </div>



    </div>
  )
}

export default shippment
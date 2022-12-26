import React from 'react'

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function payment() {
  const dispatch = useDispatch();


  
  const currentStepaccepted = useSelector(state => state.currentStep);
  const firstNamestate = useSelector(state => state.firstName);
  const lastNamestate  = useSelector(state => state.lastName);
  const companystate   = useSelector(state => state.company);
  const addressstate   = useSelector(state => state.address);
  const apartmentstate = useSelector(state => state.apartment);
  const emailstate     = useSelector(state => state.email);
  const zipcodestate  = useSelector(state =>  state.zipcode);
  const statestate   = useSelector(state =>   state.state);
  const citystate   = useSelector(state =>    state.city);
  const countrystate = useSelector(state =>   state.country);
  const phonestate     = useSelector(state => state.phonenumber);
  const instructionstate     = useSelector(state => state.instruction);



 
  const handleback = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); 
  dispatch({ type: 'SET_INPUT_VALUES',value11: currentStepaccepted-1, value1: firstNamestate, value2: lastNamestate, value3: companystate, value4: addressstate, value5: apartmentstate,
  value6: zipcodestate, value7: statestate, value8: citystate, value9: countrystate, value10: phonestate , value12: emailstate  }); 
  
}
const handlebacktocustomer = (event: { preventDefault: () => void; }) => {
  event.preventDefault(); 
dispatch({ type: 'SET_INPUT_VALUES',value11: currentStepaccepted-2, value1: firstNamestate, value2: lastNamestate, value3: companystate, value4: addressstate, value5: apartmentstate,
value6: zipcodestate, value7: statestate, value8: citystate, value9: countrystate, value10: phonestate , value12: emailstate  }); 

}

const handleSubmit = (event: { preventDefault: () => void; }) => {
  event.preventDefault(); 
dispatch({ type: 'SET_INPUT_VALUES',value11: currentStepaccepted+1 , value13: instructionstate , value1: firstNamestate, value2: lastNamestate, value3: companystate, value4: addressstate, value5: apartmentstate,
value6: zipcodestate, value7: statestate, value8: citystate, value9: countrystate, value10: phonestate , value12: emailstate 
 }); 

}


 
;

  

 


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
        <td className="px-4 py-2">{emailstate}</td>
        <td className="px-4 py-2"><button onClick={handlebacktocustomer}  className='text-xs text-custom-200' >change</button></td>

      </tr>
    </thead>
    <tbody>
      <tr  className="border-t text-left text-sm" >
        <td className="px-4 py-2">Shipping Address</td>
        <td className="px-4 py-2">{countrystate} {statestate} {citystate} <br></br> {addressstate} {companystate} {apartmentstate}</td>
        <td className="px-4 py-2"><button onClick={handlebacktocustomer} className='text-xs text-custom-200' >change</button></td>
      </tr>
    </tbody>
    <tbody>
      <tr  className="border-t text-left text-sm" >
        <td className="px-4 py-2">method</td>
        <td className="px-4 py-2">-express Shipping <br></br> -standard shipping </td>
        <td className="px-4 py-2"><button onClick={handleback} className='text-xs text-custom-200' >change</button></td>
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
      <button>paypal</button>
    </div>


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
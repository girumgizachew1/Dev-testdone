import  { useState } from "react";
import React  from 'react'
import Splitdelivery from "./splitdelivery";
function shippment() {
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
    </table>
    
    <div className="flex items-center mt-4">
         <div className="w-5 h-5 rounded-full bg-gray-900 text-white text-center flex items-center justify-center">
            <i className="fas fa-check"></i>
          </div>
        <span className="ml-2  text-base">Select Shipping detail and dates</span>
    </div>
    <Splitdelivery/>
    <Splitdelivery/>


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
      />
    </div>



    </div>
  )
}

export default shippment
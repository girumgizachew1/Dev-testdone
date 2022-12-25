import React from 'react'
import  { useState } from "react";

function splitdelivery() {
    const [standardSelected, setStandardSelected] = useState(true);
    const [expressSelected, setExpressSelected] = useState(false);
  
  return (
    
    <div>
    <div className="mb-4 py-3">
      <div className="text-sm text-custom-200 mb-4">Delivery 1 of 3</div>
      <div
      className="text-custom-200 border border-custom-200 w-fit h-fit px-4 my-2 text-sm"
    >
      item 1
    </div>
      <div className="flex items-center border bg-custom-200 text-white mb-2 flex-row px-2">
        <label
          className="text-sm w-full rounded-md shadow-sm block py-2 px-3 text-left cursor-pointer leading-5 "
          htmlFor="standard-shipping"
        >
          <input
            id="standard-shipping"
            name="delivery-option"
            type="checkbox"
            checked={standardSelected}
            onChange={() => {
              setStandardSelected(true);
              setExpressSelected(false);
            }}
            className="mr-2 leading-tight"
          />
         Standard Shipping
          
        </label>
        <div className='text-sm' >free</div>

      </div>

      <div className="flex items-center border bg-custom-100 mb-2 flex-row px-2">
        <label
          className="text-sm w-full rounded-md shadow-sm block py-2 px-3 text-left cursor-pointer leading-5 "
          htmlFor="express-shipping"
        >
          <input
            id="express-shipping"
            name="delivery-option"
            type="checkbox"
            checked={expressSelected}
            onChange={() => {
              setStandardSelected(false);
              setExpressSelected(true);
            }}
            className="mr-2 leading-tight"
          />
          Express Shipping
        </label>
        <div className='text-sm' >free</div>
      </div>
    </div>



    </div>
  )
}

export default splitdelivery
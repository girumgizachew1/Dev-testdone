import React from 'react'
import  { useState } from "react";
import type { Product, ProductVariant } from 'swell-js';
import { getPrice } from '@/utils/product';
import { useSelector, useDispatch } from 'react-redux';


function splitdelivery({
  product,
  price,
  variant,
  index, 
  length
}: {
  item: object;
  product: Product;
  variant: ProductVariant;
  price: number;
  length: number;
  index: number;

}) { 
  
  const price1=10
  const price2=20
  const shipmentOptions = useSelector((state: State) => state.shipmentOptions);
  console.log(shipmentOptions)
  const [expressOptionSelected, setExpressOptionSelected] = useState(false);
  const [standardOptionSelected, setStandardOptionSelected] = useState(false);
  const dispatch = useDispatch();

  const handleExpressOptionChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setExpressOptionSelected(event.target.checked);
    setStandardOptionSelected(false)
    dispatch({
      type: 'UPDATE_SHIPMENT_OPTION',
      payload: {
        productId: product.id,
        productname: product.id,
        shipmentType: 'express',
      },
    });
  }

  const handleStandardOptionChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setStandardOptionSelected(event.target.checked);
    setExpressOptionSelected(false)

    dispatch({
      type: 'UPDATE_SHIPMENT_OPTION',
      payload: {
        productId: product.id,
        productname: product.id,
        shipmentType: 'standard',
      },
      
    });
  }

  
  return (
    
    <div>
    <div className="mb-4 py-3">
      <div className="text-sm text-custom-200 mb-4">Delivery {index} of {length}</div>
      <div
      className="text-custom-200 border border-custom-200 w-fit h-fit px-4 my-2 text-sm"
    >
      {product.name}
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
            checked={standardOptionSelected}
            onChange={handleStandardOptionChange}
            className="mr-2 leading-tight"
          />
         Standard Shipping
          
        </label>
        <div className='text-sm' >{price1}$</div>

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
            checked={expressOptionSelected}
            onChange={handleExpressOptionChange}
            className="mr-2 leading-tight"
          />
          Express Shipping
        </label>
        <div className='text-sm' >{price2}$</div>
      </div>
    </div>
  </div>
  )
}

export default splitdelivery
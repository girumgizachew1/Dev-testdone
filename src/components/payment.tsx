import React from 'react'

function payment() {
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
      <span className="ml-2 text-base">Customer Information</span>
    </div>

  </div>
  )
}

export default payment
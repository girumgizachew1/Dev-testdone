



export default function CheckoutForm() {
  return (
    <div className="md:flex ">
      <div className="w-full">
        <div className="flex flex-row justify-between" >
         <span className="text-sm font-medium text-gray-900">
          Customer Information
        </span>
        <div className="space-x-3">
          <span className="text-sm text-gray-600">
              Already have an account
           </span>
           <span className="text-xs font-medium text-custom-200">
            Log out
          </span>
        </div>
        

        </div>
        

        <div className="relative pb-5">
          <input
            type="text"
            name="mail"
            className="mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none"
            placeholder="E-mail"
          />
          
          <div className="mt-4 flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="h-3 w-3 rounded border-gray-300 bg-gray-100 text-xs text-blue-600 placeholder:text-zinc-500 focus:outline-none focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 "
            />
            <label htmlFor="default-checkbox" className="ml-1 text-xs">
              Keep me up to date with news and special offers
            </label>
          </div>
        </div>

        <span className="text-sm font-medium text-gray-900">
          Shipping Address
        </span>

        <div className="grid md:grid-cols-2 md:gap-2">
          <input
            type="text"
            name="mail"
            className="mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none"
            placeholder="First name*"
          />
          <input
            type="text"
            name="mail"
            className="mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none"
            placeholder="Last name*"
          />{' '}
        </div>
        <input
          type="text"
          name="mail"
          className="mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none"
          placeholder="Company (optional)"
        />
        <input
          type="text"
          name="mail"
          className="mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none"
          placeholder="Address*"
        />
        <input
          type="text"
          name="mail"
          className="mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none"
          placeholder="Apartment, suite, etc. (optional)"
        />
        <div className="grid md:grid-cols-3 md:gap-2">
          <input
            type="text"
            name="mail"
            className="mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none"
            placeholder="Zipcode*"
          />{' '}
          <input
            type="text"
            name="mail"
            className="mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none"
            placeholder="City*"
          />
          <input
            type="text"
            name="mail"
            className="mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none"
            placeholder="State*"
          />{' '}
        </div>
        <input
          type="text"
          name="mail"
          className="mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none"
          placeholder="Country*"
        />
        <input
          type="text"
          name="mail"
          className="mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none"
          placeholder="Phone Number*"
        />
        <div className="mt-4 flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="h-3 w-3 rounded border-gray-300 bg-gray-100 text-xs text-blue-600 placeholder:text-zinc-500 focus:outline-none focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 "
            />
            <label htmlFor="default-checkbox" className="ml-1 text-xs">
              Save My information for next time
            </label>
          </div>
      
      </div>
    </div>
  );
}

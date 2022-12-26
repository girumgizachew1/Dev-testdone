import { useState  } from "react"
import react from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';



export default function CheckoutForm() {

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
 
  
  const [email, setEmail] = useState(emailstate);
  const [firstName, setFirstName] = useState(firstNamestate);
  const [lastName, setLastName] = useState(lastNamestate);
  const [company, setCompany] = useState(companystate);
  const [address, setAddress] = useState(addressstate);
  const [apartment, setApartment] = useState(apartmentstate);
  const [zipCode, setZipCode] = useState(zipcodestate);
  const [city, setCity] = useState(citystate);
  const [state, setState] = useState(statestate);
  const [country, setCountry] = useState(countrystate);
  const [phone, setPhone] = useState(phonestate);
  console.log(emailstate)




  const currentStepaccepted = useSelector(state => state.currentStep);

  const [currentStep, setCurrentStep] = useState(1);

  const dispatch = useDispatch();

  const [validity, setValidity] = useState({
    field1: true,
    field2: true,
    field3: true,
    field4: true,
    field5: true,
    field6: true,
    field7: true
  });
  // Function to navigate to the previous step
  const handleSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault(); 
    
    console.log(currentStep)

    // Validate the form data
    if ( email=== '' || firstName === '' || lastName === '' || address === '' || zipCode === ''  || city === '' || state === '' ) {
      setValidity({
        field1: firstName !== '',
        field2: lastName !== '',
        field3: address !== '',
        field4: email !== '',
        field5: zipCode !== '',
        field6: city !== '',
        field7: state !== ''
      });
    } else {
      setValidity({
        field1: true,
        field2: true,
        field3: true,
        field4: true, 
        field5: true,
        field6: true,
        field7: true, 
     
 
      });    // Dispatch an action to update the state with the form data
      dispatch({ type: 'SET_INPUT_VALUES', value1: firstName, value2: lastName, value3: company, value4: address, value5: apartment,
      value6: zipCode, value7: state, value8: city, value9: country, value10: phone, value11: 1+currentStep , value12: email     
    }); 
    }
  
    // Navigate to the next step or send the data to the server
    
  };

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
            placeholder="email"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
            className={`mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none ${!validity.field1 ? 'border-red-500' : ''}`}
            />
                        { validity.field1 === false && <label className="text-red-500 text-xs italic">Required</label>}
                    {' '}
          
          <div className="mt-4 flex items-center">
            <input
              id="default-checkbox"
              type="checkbox"
              className="h-3 w-3 rounded border-gray-300 bg-gray-100 text-xs text-blue-600 placeholder:text-zinc-500 focus:outline-none focus:ring-2 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 "
              value=""
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
              <div className="flex flex-col">
                <input
                  type="text"
                  name="mail"
                  placeholder="First name*"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  className={`mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none ${!validity.field1 ? 'border-red-500' : ''}`}
                  />
                              { validity.field1 === false && <label className="text-red-500 text-xs italic">Required</label>}
                          {' '}
              </div>
              <div className="flex flex-col">  
                  <input
                    name="mail"
                    type="text"
                    value={lastName}
                    placeholder="Last name*"
                    onChange={e => setLastName(e.target.value)}
                    className={`mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none ${!validity.field2 ? 'border-red-500' : ''}`}
                    />
                    { validity.field2 === false && <label className="text-red-500 text-xs italic">Required</label>}
                {' '}
            </div>
        </div>


        <input
          type="text"
          name="mail"
          className="mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none"
          placeholder="Company (optional)"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />


        <input
          type="text"
          name="mail"
          placeholder="Address*"
          value={address}
          onChange={(event) => setAddress(event.target.value)}
          className={`mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none ${!validity.field3 ? 'border-red-500' : ''}`}
          />
          { validity.field3 === false && <label className="text-red-500 text-xs italic">Required</label>}
      {' '}

        <input
          type="text"
          name="mail"
          className="mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none"
          placeholder="Apartment, suite, etc. (optional)"
          value={apartment}
          onChange={(event) => setApartment(event.target.value)}
        />

        <div className="grid md:grid-cols-3 md:gap-2">
         <div className="flex flex-col" >
          <input
            type="text"
            name="mail"
            placeholder="Zipcode*"
            value={zipCode}
            onChange={(event) => setZipCode(event.target.value)}
            className={`mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none ${!validity.field5 ? 'border-red-500' : ''}`}
            />
            { validity.field5 === false && <label className="text-red-500 text-xs italic">Required</label>}
        {' '}
         </div>

         <div className="flex flex-col" >
          <input
            type="text"
            name="mail"
          placeholder="City*"
            value={city}
            onChange={(event) => setCity(event.target.value)}
            className={`mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none ${!validity.field6 ? 'border-red-500' : ''}`}
            />
            { validity.field6 === false && <label className="text-red-500 text-xs italic">Required</label>}
        {' '}
           </div>

           <div className="flex flex-col" >
          <input
            type="text"
            name="mail"
            placeholder="State*"
            value={state}
            onChange={(event) => setState(event.target.value)}
            className={`mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none ${!validity.field7 ? 'border-red-500' : ''}`}
            />
            { validity.field7 === false && <label className="text-red-500 text-xs italic">Required</label>}
        {' '}
          </div>

        
        </div>
        <input
          type="text"
          name="mail"
          placeholder="Country*"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          className={`mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none ${!validity.field6 ? 'border-red-500' : ''}`}
          />
          { validity.field6 === false && <label className="text-red-500 text-xs italic">Required</label>}
      {' '}
        
        <input
          type="text"
          name="mail"
          placeholder="Phone Number*"
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          className={`mt-3 h-9 w-full rounded border px-2 text-xs placeholder:text-zinc-500 focus:border-gray-500 focus:outline-none ${!validity.field6 ? 'border-red-500' : ''}`}
          />
          { validity.field6 === false && <label className="text-red-500 text-xs italic">Required</label>}
      {' '}

      
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
          <div className='flex justify-between mt-5'>
          <button  
            className="h-12 w-24 text-xs font-medium text-custom-200"
            >Return To home</button>
          <button
            className="h-12 w-48 rounded bg-custom-200 text-xs font-medium text-white" 
            onClick={handleSubmit}>Continue to Shipping</button>
        </div>
      
      </div>
    </div>
  );
}

import { createStore } from 'redux';


const initialState = {
  
  firstName: '',
  lastName: '',
  company: '',
  address: '',
  apartment: '',
  zipcode: '',
  state: '',
  city: '',
  country: '',
  phonenumber: '',
  currentStep: 1,
  email: '',
  instruction: '',
  shipmentOptions: {}
};



function reducer(state: typeof initialState = initialState, action: any): typeof initialState {
  switch (action.type) {
    case 'SET_INPUT_VALUES':
      return { ...state, firstName: action.value1, lastName: action.value2, company: action.value3, address: action.value4, 
        apartment: action.value5, zipcode: action.value6, state: action.value7, city: action.value8, country: action.value9, phonenumber: action.value10, currentStep: action.value11, email: action.value12, instruction: action.value13   };
    
    case 'UPDATE_SHIPMENT_OPTION':
          const { productId, shipmentType } = action.payload;
          
          return {
            ...state,
            shipmentOptions: {
              ...state.shipmentOptions,
              [productId]: {
                ...state.shipmentOptions[productId],
                shipmentType,
              },
            },
          };
      
   
        default:
      return state;
  }
}









const store = createStore(reducer);

export default store;
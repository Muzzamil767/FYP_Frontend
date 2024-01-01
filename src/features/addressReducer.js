// src/reducers/addressReducer.js

const initialState = {
    shippingAddress: null,
  };
  
  const addressReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'STORE_SHIPPING_ADDRESS':
        return {
          ...state,
          shippingAddress: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default addressReducer;
  
// rootReducer.js

import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"; // Import your existing cartSlice
import authReducer from "./authSlice"; // Import your existing authSlice
import orderReducer from "./orderSlice"; // Import the new orderSlice
import cartReducer2 from "./cartReducer";
import addressReducer from "./addressReducer";
import prescriptionReducer from "./prescription/prescritionSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    order: orderReducer,
    cart2: cartReducer2,
    address: addressReducer,
    prescription: prescriptionReducer,
  },
});

export default store;

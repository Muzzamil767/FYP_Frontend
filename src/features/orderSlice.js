// orderSlice.js

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartData: [],
  shippingAddress: null,
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    setCartData: (state, action) => {
      state.cartData = action.payload;
    },
    setShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
    },
  },
});

export const { setCartData, setShippingAddress } = orderSlice.actions;
export default orderSlice.reducer;

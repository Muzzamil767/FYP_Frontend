import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.find((item) => item._id === action.payload._id);

      if (existingItem) {
        // If the item is already in the cart, return a new array with the updated quantity
        return state.map((item) =>
          item._id === existingItem._id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // If the item is not in the cart, generate a unique ID and add it to the cart
        const newItem = {
          ...action.payload,
          quantity: 1,
          id: `${action.payload._id}_${Date.now()}`, // Generate a unique ID
        };

        return [...state, newItem];
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.find((item) => item.id === id);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
    clearCart: () => [], // Return a new array to clear the cart
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

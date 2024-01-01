// cartReducer.js
const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      // Handle adding to cart logic
      return [...state, action.payload];

    case "REMOVE_FROM_CART":
      // Handle removing from cart logic
      return state.filter((item) => item.id !== action.payload.id);

    case "UPDATE_CART_ITEM_QUANTITY":
      // Handle updating cart item quantity
      return state.map((item) =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );

    case "SET_CART_DETAILS":
      // Set the entire cart array
      return action.payload;

    default:
      return state;
  }
};

export default cartReducer;

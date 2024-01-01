// cartActions.js
export const addToCart = (item) => ({
    type: "ADD_TO_CART",
    payload: item,
  });
  
  export const removeFromCart = (itemId) => ({
    type: "REMOVE_FROM_CART",
    payload: { id: itemId },
  });
  
  export const updateCartItemQuantity = ({ id, quantity }) => ({
    type: "UPDATE_CART_ITEM_QUANTITY",
    payload: { id, quantity },
  });
  
  export const setCartDetails = (cartItems) => ({
    type: "SET_CART_DETAILS",
    payload: cartItems,
  });
  
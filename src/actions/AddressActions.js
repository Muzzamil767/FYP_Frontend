export const storeShippingAddress = (addressData) => {
    return {
      type: 'STORE_SHIPPING_ADDRESS',
      payload: addressData,
    };
  };
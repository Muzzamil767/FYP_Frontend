// Import necessary libraries and components
import { useSelector } from 'react-redux';
import Payment from './Payment';

// In your parent component or container component
const CheckoutContainer = () => {
  // Use the useSelector hook to access cart and address from the Redux store
  const cartItems = useSelector((state) => state.cart); // assuming 'cart' is the slice name in your Redux store
  const address = useSelector((state) => state.address); // assuming 'address' is the slice name in your Redux store

  // Render the Payment component and pass cart and address as props
  return <Payment cartItems={cartItems} address={address} />;
};

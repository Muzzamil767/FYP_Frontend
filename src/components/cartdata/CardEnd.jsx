import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../features/cartSlice'; // Replace with the actual path to your cart slice

import Navbar1 from '../navbar1/Navbar1';
import Navbar2 from '../navbar2/Navbar2';
import Footer1 from '../footer1/Footer1';
import Footer2 from '../footer2/Footer2';

const CardEnd = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const clearCartAndLocalStorage = () => {
    // Clear the cart in Redux
    dispatch(clearCart());
    
   
  };

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-sm-0"></div>
          <div className="col-lg-9 col-sm-12">
            <div className="card-end-main">
              <h1>Congratulations!</h1>
              <h3>Your order is Confirmed</h3>
              <h6>Thank you for shopping from SmartRx.</h6>
              <p>You will receive a Confirmation Call later.</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-10"></div>
          <div className="col-lg-2">
            <Link to="/" className="end-button">
              <button
                onClick={clearCartAndLocalStorage}
                className="btn  address-proceed end-button"
              >
                Back to main
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default CardEnd;

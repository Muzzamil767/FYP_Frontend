

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateCartItemQuantity } from "../../features/cartSlice";
import "./Cart.css";
import del from "./images/trash-2.svg";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";
import { setCartDetails } from "../../features/cartActions";

import Navbar1 from "../navbar1/Navbar1";
import Navbar2 from "../navbar2/Navbar2";
import Footer1 from "../footer1/Footer1";
import Footer2 from "../footer2/Footer2";
import Login from "../login/Login";

const Cart = ({ cartItems, isLoggedIn, setCartDetails }) => {
  console.log("Cart Items:", cartItems);
  //const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // Access isLoggedIn state from Redux
  const navigateTo = useNavigate();
  //const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const cartItemsWithInitialQuantity = cartItems.map((item) => ({
    ...item,
    quantity: item.quantity !== undefined ? item.quantity : 1,
  }));

  const handleIncrement = (itemId) => {
    dispatch(
      updateCartItemQuantity({
        id: itemId,
        quantity: getUpdatedQuantity(itemId, 1), // Increase the quantity by 1
      })
    );
  };
  
  const handleDecrement = (itemId) => {
    dispatch(
      updateCartItemQuantity({
        id: itemId,
        quantity: getUpdatedQuantity(itemId, -1), // Decrease the quantity by 1
      })
    );
  };
  
  // Helper function to get the updated quantity
  const getUpdatedQuantity = (itemId, change) => {
    const item = cartItems.find((item) => item.id === itemId);
    const currentQuantity = item ? item.quantity || 0 : 0;
    return Math.max(1, currentQuantity + change); // Ensure the quantity is at least 1
  };
  
 
  const handleDeleteItem = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const handleProceed = () => {
    if (!isLoggedIn) {
      alert("Please log in first");
      navigateTo("/login");
    } else if (cartItems.length === 0) {
      alert("Your Cart is Empty. Please add something");
    } else {
      // Dispatch action to update cart details in Redux
      setCartDetails(cartItems);
      navigateTo("/address");
    }
  };
  console.log( cartItems.price);
  
  return (
    <>
      
      
      { isLoggedIn ?  (
        <>
        <Navbar1 />
      <Navbar2 />
        <div className="container">
          <h1
            style={{
              marginTop: "20px",
              marginBottom: "30px",
              fontWeight: "bolder",
            }}
          >
            Cart Products{" "}
          </h1>
          <div className="row">
            <div className="col-lg-8 col-sm-12 col-md-12 cart-left1">
              <h4 style={{ marginTop: "20px", marginBottom: "20px" }}>
                Medicine and Other products
              </h4>
              <hr />

              {cartItems.length === 0 ? (
                <h2
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontWeight: "bolder",
                    marginTop: "30px",
                  }}
                  className="cart-empty-message"
                >
                  Your cart is empty.
                </h2>
              ) : (
                
                  
                    <div className="cart-items">
                      {cartItems.map((item, index) => (
                        <div className="cart-item" key={index}>
                          <div className="row">
                            <div className="col-lg-6 d-flex">
                              <img src={item.image} className="cart-img" />
                              <p
                                className="cart-description1"
                                onClick={() => console.log("Item ID:", item.id)}
                              >
                                {item.description}
                              </p>
                            </div>
                            <div className="col-lg-6 ">
                              <div className="d-flex">
                                <p
                                  style={{ color: "black", fontWeight: "350" }}
                                >
                                  Quantity:{" "}
                                  <button
                                    style={{ border: "none" }}
                                    onClick={() => handleDecrement(item.id)}
                                  >
                                    {" "}
                                    -{" "}
                                  </button>{" "}
                                  <input
                                    type="number"
                                    value={item.quantity}
                                    readOnly
                                    style={{
                                      width: "20%",
                                      textAlign: "center",
                                    }}
                                  />{" "}
                                  <button
                                    onClick={() => handleIncrement(item.id)}
                                    style={{ border: "none" }}
                                  >
                                    {" "}
                                    +{" "}
                                  </button>
                                </p>
                                <p className="cart-price">Rs{item.price*item.quantity }</p>
                                <button
                                  onClick={() => handleDeleteItem(item.id)}
                                  className="btn btn-danger btn-small"
                                  style={{ height: "50%", marginTop: "70px" }}
                                >
                                  <img src={del} />
                                </button>
                              </div>
                            </div>
                          </div>

                          <hr />
                        </div>
                      ))}
                    </div>
                
                
              )}
            </div>

            <div className="col-lg-4 col-sm-12 col-md-12">
              <div className="right-cart1 container">
                <h3 className="right-cart1-title">Order Summary</h3>
                <hr />
                <p style={{ color: "black", fontWeight: "350" }}>
                  <span style={{ marginRight: "190px" }}>SubTotal</span>{" "}
                  <span>Rs: {totalAmount}</span>
                </p>
                <p style={{ color: "black", fontWeight: "350" }}>
                  <span style={{ marginRight: "190px" }}>Delivery Fee</span>{" "}
                  <span>Rs:1</span>
                </p>
                <hr />
                <p style={{ color: "black", fontWeight: "350" }}>
                  <span style={{ marginRight: "150px" }}>Total amount</span>{" "}
                  <span>Rs: {totalAmount+1}</span>
                </p>
              </div>
              <button className="btn  cart-proceed" onClick={handleProceed}>
                Proceed
              </button>
            </div>
          </div>
       
      </div>
      <Footer1 />
      <Footer2 />
      </>
        
     )  : (
        <Login />
      )}
      
    </>
      )
};

const mapStateToProps = (state) => ({
  cartItems: state.cart,
  isLoggedIn: state.auth.isLoggedIn,
});

export default connect(mapStateToProps, { setCartDetails })(Cart);
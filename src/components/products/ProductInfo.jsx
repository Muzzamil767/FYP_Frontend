import React from "react";
import "./ProductInfo.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cartSlice";
import Toast from "react-bootstrap/Toast";
import { toast } from "react-toastify";

const ProductInfo = ({ cardData, closeModal }) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart);

  const handleAddToCart = () => {
    const isItemAlreadyInCart = cartItems.some(
      (item) => item._id == cardData._id
    );

    if (isItemAlreadyInCart) {
      // If the item is already in the cart, show an alert
      toast.error("Already Exist in Cart!");
    } else {
      // If the item is not in the cart, add it to the cart
      dispatch(addToCart(cardData));
      console.log(`this is cardData ${JSON.stringify(cardData)}`);
      console.log("Added to cart:", cardData.name);
      console.log("Added to cart ID:", cardData._id);
    }
  };

  return (
    <>
      <div className="modal">
        <div className="modal-content">
          <span
            className="close"
            style={{ fontSize: "xx-large" }}
            onClick={closeModal}
          >
            &times;
          </span>
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-sm-12">
                {" "}
                <img
                  className="modal-image"
                  src={cardData.image.url}
                  alt="image here"
                />
              </div>
              <div className="col-lg-7 col-sm-12">
                <h2 className="modal-title">{cardData.name}</h2>
                <p className="modal-description1" style={{ color: "black" }}>
                  {cardData.description}
                </p>
                <p className="modal-description2">
                  Brand: {cardData.description2}
                </p>
                <p className="modal-price">Price: Rs:{cardData.price}</p>
                <hr />
                <h4>Expert Advise:</h4>
                <ul>
                  <li>Take Medicines with meal or Water.</li>
                  <li>Take Medicines after contact with Doctor.</li>
                  <li>Please drink water to prevent dehydration</li>
                  <li>Please avoid Alcohol for good health</li>
                </ul>
                <button
                  className="btn btn-warning btn-lg "
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductInfo;

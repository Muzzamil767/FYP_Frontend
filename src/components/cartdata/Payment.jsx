import React, { useState } from "react";
import "./Payment.css";
import { Link, useHistory } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect, useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
import {
  faArrowLeft,
  faPlus,
  faHome,
  faEnvelope,
  faMobile,
} from "@fortawesome/free-solid-svg-icons";
import Footer1 from "../footer1/Footer1";
import Footer2 from "../footer2/Footer2";
import Navbar1 from "../navbar1/Navbar1";
import Navbar2 from "../navbar2/Navbar2";
import { toast } from "react-toastify";
import axios from "axios";
const Payment = ({ cartDetails, userId }) => {
  const [paymentOption, setPaymentOption] = useState("");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });

  const { shippingAddress } = useSelector((state) => state.address);
  let orderItems = useSelector((state) => state.cart2);

  const handlePaymentOptionChange = (event) => {
    setPaymentOption(event.target.value);
  };

  const handleCardInputChange = (event) => {
    const { name, value } = event.target;
    setCardDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const isCardDetailsValid = () => {
    const { cardNumber, expiryDate, cvv } = cardDetails;
    return (
      cardNumber.trim() !== "" && expiryDate.trim() !== "" && cvv.trim() !== ""
    );
  };

  const handleConfirmOrder = async () => {
    // Validate payment option
    if (!paymentOption) {
      toast.error("Please select a payment option.");
      return;
    }

    // Additional validation for debit card
    if (paymentOption === "debitCard" && !isCardDetailsValid()) {
      toast.error(
        "Please fill in all card details before confirming the order."
      );
      return;
    }

    orderItems = orderItems.map((item) => {
      return { ...item, images: "Dummy Image" };
    });

    // Prepare data for the API request
    const orderData = {
      orderItems,
      shippingInfo: shippingAddress,
    };

    try {
      // Make an HTTP POST request to the API endpoint
      const { data } = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/order/new`,
        orderData,
        {
          withCredentials: true,
        }
      );

      // Handle the success case (you can also handle the response data if needed)
      toast.success("Order placed successfully!");
    } catch (error) {
      // Handle the error case
      console.error("Error placing order:", error.response.data.message);
      toast.error("Error placing order. Please try again later.");
    }
  };

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="container">
        <Link to="/address">
          <div className="d-flex" style={{ color: "blue", fontSize: "larger" }}>
            <FontAwesomeIcon icon={faArrowLeft} />
            <h6 style={{ marginLeft: "10px", fontSize: "large" }}>
              Back to Cart
            </h6>
          </div>{" "}
        </Link>
        <h1>CheckOut</h1>
        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <div className="payment-main">
              <div className="row">
                <div className="col-lg-9 col-sm-9">
                  <h4>Shipping Address</h4>
                </div>
                <div
                  className="col-lg-3 col-sm-3 d-flex"
                  style={{ marginTop: "20px", color: "blue" }}
                >
                  {/*<FontAwesomeIcon
                    icon={faPlus}
                    style={{ marginTop: "15px", marginRight: "10px" }}
                  />*/}
                  <p style={{ color: "blue" }}>Add Address</p>
                </div>
              </div>
              <hr />
              <h3 style={{ textAlign: "left", marginLeft: "10px" }}>
                Payment Option
              </h3>

              <div className="payment-checkbox">
                <div style={{ marginBottom: "1px" }}>
                  <input
                    type="radio"
                    name="paymentOption"
                    value="cashOnDelivery"
                    checked={paymentOption === "cashOnDelivery"}
                    onChange={handlePaymentOptionChange}
                  />
                  <label htmlFor="cashOnDelivery">Cash On delivery</label>
                </div>
                <br />

                <br />
              </div>
            </div>
          </div>
          {/* ... */}
          <div className="col-lg-4 col-sm-12">
            <div className="address-right">
              <h5>How to Upload Your Prescription?</h5>
              <div>
                <p>
                  Do not crop out any part of the prescription image. Avoid
                  unclear or blurred image of your prescription. Include details
                  of your doctor, patient and clinic visit date.
                </p>
                <p>
                  Medicines will only be dispensed against a valid prescription.
                </p>
              </div>
            </div>

            {paymentOption === "debitCard" && !isCardDetailsValid() && (
              <Alert variant="danger">
                Please fill in all card details before confirming the order.
              </Alert>
            )}
            <div>
              <Link to="/cardEnd">
                <button
                  onClick={handleConfirmOrder}
                  className={`btn prescription-proceed btn-lg ${
                    !paymentOption ||
                    (paymentOption === "debitCard" && !isCardDetailsValid())
                      ? "disabled"
                      : ""
                  }`}
                  disabled={
                    !paymentOption ||
                    (paymentOption === "debitCard" && !isCardDetailsValid())
                  }
                >
                  Confirm Order
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
};

const mapStateToProps = (state) => ({
  cartDetails: state.cart.cartDetails,
  shippingAddress: state.address.shippingAddress,
  userId: state.auth.userId, // Assuming you have userId in your auth state
});

// Connect the component to Redux
export default connect(mapStateToProps)(Payment);

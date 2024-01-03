import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar2.css";
import { useSelector, useDispatch } from "react-redux";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
// import { logout } from "../../features/authSlice";

import toast from "react-hot-toast";
import { logout, reset } from "../../features/auth/authSlice";

const Navbar2 = () => {
  // const isLoggedIn = localStorage.getItem("loggedIn") === "true";
  const navigateTo = useNavigate();
  const dispatch = useDispatch();
  const cartItems = JSON.parse(localStorage.getItem("cartData")) || [];
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  // const {user} = useSelector((state) => state.auth);
  const { user, isSuccess, successMessage, isError, errorMessage } =
    useSelector((state) => state.authentication);
  // Calculate the number of items in the cart
  const cartItemCount = cartItems.length;
  const handleLogout = () => {
    // Remove the token from local storage on logout
    localStorage.removeItem("authToken");

    // Dispatch the logout action to update the Redux state
    dispatch(logout());

    // Redirect to the login page after logout
    navigateTo("/login");
  };
  const handleCartClick = () => {
    // Your custom logic for handling the click event
    if (!user) {
      toast.error("First LoggedIn");
    }
    // You can add more logic here, such as opening a cart modal or navigating to the cart page
  };

  return (
    <>
      <Navbar
        expand="lg"
        className="bg-light "
        style={{
          padding: "30px",
          position: "sticky",
          top: "0",
          zIndex: "1000",
        }}
      >
        <Container fluid>
          <Link
            to="/"
            className="navbar-links navbar-brand"
            style={{
              color: "#02b9b1",
              fontStyle: "italic",
              fontWeight: "bolder",
            }}
          >
            SmartRX
          </Link>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            style={{ backgroundColor: "white" }}
          />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link
                to="/"
                className="mx-2 navbar-links"
                style={{ color: "#072264", fontSize: "larger" }}
              >
                Home
              </Link>
              <Link
                to="/products"
                className="mx-2 navbar-links"
                style={{ color: "#072264", fontSize: "large" }}
              >
                Products
              </Link>
              <Link
                to="/aboutUs"
                className="mx-2 navbar-links"
                style={{ color: "#072264", fontSize: "large" }}
              >
                About Us
              </Link>
              <Link
                to="/contactUs"
                className="mx-2 navbar-links"
                style={{ color: "#072264", fontSize: "large" }}
              >
                Contact Us
              </Link>
              <button className="nav2-button1">
                {" "}
                <Link
                  to="/appointment"
                  className="mx-2 navbar-links"
                  style={{ color: "#072264", fontSize: "large" }}
                >
                  For Appointment
                </Link>
              </button>
            </Nav>
            <div className="search-login-info d-flex align-items-center">
              {user ? (
                <NavDropdown
                  title={
                    <div className="login-info mx-1">
                      <div className="user-icon">
                        <img
                          src={user.avatar.url}
                          style={{
                            height: 70,
                            width: 70,
                            borderRadius: "50%",
                          }}
                        ></img>
                      </div>
                      <Link
                        className="login-name navbar-links"
                        style={{ fontSize: "larger", marginBottom: "-20px" }}
                      >
                        {user.name}
                      </Link>
                    </div>
                  }
                  id="basic-nav-dropdown"
                  style={{ color: "black", marginRight: "20px" }}
                  className="custom-dropdown"
                >
                  {" "}
                  <NavDropdown.Item>
                    <Link to="/loginUpdate">Update</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                    <Link to="/passwordUpdate">Password Change</Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#" onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <div className="login-info mx-3">
                  <FontAwesomeIcon icon={faUser} className="user-icon" />
                  <Link
                    to="/login"
                    className="login-name navbar-links"
                    style={{ fontSize: "larger" }}
                  >
                    Login
                  </Link>
                </div>
              )}
              <div onClick={handleCartClick}>
                <Link to="/cart" aria-label="Go to shopping cart">
                  {cartItemCount > 0 ? (
                    <span className="cart-badge">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        style={{ fontSize: "larger", color: "black" }}
                        className="mx-1"
                      />
                      <span className="badge bg-danger ">{cartItemCount}</span>
                    </span>
                  ) : (
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      style={{ fontSize: "larger", color: "black" }}
                      className="mx-1"
                    />
                  )}
                </Link>
              </div>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navbar2;

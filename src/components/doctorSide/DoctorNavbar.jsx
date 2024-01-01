import React, { useEffect } from "react";
import "./DoctorNavbar.css";
//import React from 'react';
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { logout, reset } from "../../features/auth/authSlice";
import toast from "react-hot-toast";

const DoctorNavbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSuccess, successMessage, isError, errorMessage } = useSelector(
    (state) => state.authentication
  );

  const logoutHandler = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (isSuccess && successMessage) {
      navigate("/");
      toast.success(successMessage);
    }

    if (isError && errorMessage) {
      toast.error(errorMessage);
    }
    dispatch(reset());
  }, [isSuccess, successMessage, isError, errorMessage]);

  return (
    <Navbar
      expand="lg"
      className="bg-light"
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
          <Container
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link
              to="/doctorMain"
              className="mx-2 navbar-links"
              style={{ color: "#072264", fontSize: "larger" }}
            >
              All Appointments
            </Link>
            <Link
              to="/doctorAccepted"
              className="mx-2 navbar-links"
              style={{ color: "#072264", fontSize: "large" }}
            >
              Accepted
            </Link>
            <Link>
              <button className="btn btn-primary" onClick={logoutHandler}>
                Logout
              </button>
            </Link>
          </Container>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default DoctorNavbar;

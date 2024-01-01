import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './AdminNavbar.css';

const AdminNavbar = () => {
  return (
    <>
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
                to="/adminMain"
                className="mx-2 navbar-links"
                style={{ color: "#072264", fontSize: "larger" }}
              >
                Dashboard
              </Link>
              <Link
                to="/adminProduct"
                className="mx-2 navbar-links"
                style={{ color: "#072264", fontSize: "large" }}
              >
                Products
              </Link>
              <Link
                to="/adminOrder"
                className="mx-2 navbar-links"
                style={{ color: "#072264", fontSize: "large" }}
              >
                Orders
              </Link>
              <Link
                to="/adminCustomer"
                className="mx-2 navbar-links"
                style={{ color: "#072264", fontSize: "large" }}
              >
                Customer
              </Link>
              <Link
                to="/prescriptionPage"
                className="mx-2 navbar-links"
                style={{ color: "#072264", fontSize: "large" }}
              >
                Prescription Page
              </Link>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default AdminNavbar;

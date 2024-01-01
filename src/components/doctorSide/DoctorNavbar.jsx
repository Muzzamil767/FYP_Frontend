import React from 'react'
import './DoctorNavbar.css'
//import React from 'react';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const DoctorNavbar = () => {
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
         
        </Container>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default DoctorNavbar

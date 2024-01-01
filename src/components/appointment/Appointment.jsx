import React, { useState, useEffect } from "react";
import "./Appointment.css";
import Navbar1 from "../navbar1/Navbar1";
import Navbar2 from "../navbar2/Navbar2";
import Footer1 from "../footer1/Footer1";
import Footer2 from "../footer2/Footer2";

const Appointment = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch('/api/v1/doctor/all')
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success && responseData.doctors) {
          setDoctors(responseData.doctors);
          console.log(responseData.doctors); // Check if the data is logged correctly
        } else {
          console.error('Invalid API response:', responseData);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Image</th>
              <th>Specialization</th>
              <th>Timing</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor) => (
              <tr key={doctor._id}>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>
                  {/* Assuming doctor.avatar.url is the image URL */}
                  <img src={doctor.avatar.url} alt="Doctor" />
                </td>
                <td>{doctor.specialization}</td>
                <td>{doctor.timings}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Appointment;

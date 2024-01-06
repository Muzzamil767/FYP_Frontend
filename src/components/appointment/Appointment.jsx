import React, { useState, useEffect } from "react";
import "./Appointment.css";
import Navbar1 from "../navbar1/Navbar1";
import Navbar2 from "../navbar2/Navbar2";
import Footer1 from "../footer1/Footer1";
import Footer2 from "../footer2/Footer2";
import Loader from "../SharedComponents/Loader";

import { useDispatch, useSelector } from "react-redux";
import { getAllDoctors } from "../../features/doctor/doctorSlice";
import { Link } from "react-router-dom";

const Appointment = () => {
  const dispatch = useDispatch();
  const { isLoading, doctors } = useSelector((state) => state.doctor);

  useEffect(() => {
    dispatch(getAllDoctors());
  }, []);
  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="container mt-5">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th>Picture</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Specialization</th>
                  <th>Timing</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {doctors.map((doctor) => (
                  <tr key={doctor._id}>
                    <td>
                      {/* Assuming doctor.avatar.url is the image URL */}
                      <img
                        src={doctor.avatar.url}
                        style={{ height: 70, width: 70, borderRadius: "50%" }}
                        alt="Doctor"
                      />
                    </td>
                    <td>{doctor.name}</td>
                    <td>{doctor.email}</td>
                    <td>{doctor.specialization}</td>
                    <td>{doctor.timings}</td>
                    <td>
                      <button className="btn btn-sm btn-primary">
                        View Details
                      </button>
                    </td>
                    <td>
                      <Link
                        to={`/bookAppointment/${doctor._id}`}
                        className="btn btn-sm btn-secondary"
                      >
                        Book Appointment{" "}
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Appointment;

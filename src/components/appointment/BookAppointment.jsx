import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import Navbar1 from "../navbar1/Navbar1";
import Navbar2 from "../navbar2/Navbar2";
import Footer1 from "../footer1/Footer1";
import Footer2 from "../footer2/Footer2";
import Loader from "../SharedComponents/Loader";

import {
  bookAppointment,
  reset,
} from "../../features/appointment/appointmentSlice";

const BookAppointment = () => {
  const [message, setMessage] = useState("");
  const { doctorId } = useParams();

  const dispatch = useDispatch();
  const { isLoading, isSuccess, isError, successMessage, errorMessage } =
    useSelector((state) => state.appointment);

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      message,
      doctorId,
    };

    dispatch(bookAppointment(data));
  };

  useEffect(() => {
    if (isSuccess && successMessage) {
      toast.success(successMessage);
    }

    if (isError && errorMessage) {
      toast.error(errorMessage);
    }

    dispatch(reset());
  }, [isSuccess, successMessage, isError, errorMessage]);

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="container my-5">
        <h1 className="text-center">Appointment Booking Form</h1>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <form onSubmit={submitHandler}>
              <div className="form-group">
                <label htmlFor="message">
                  Enter your reason for appointment
                </label>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="form-control"
                  placeholder="Reason of Appointment"
                  required
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button className=" btn btn-primary" type="submit">
                Book Appointment
              </button>
            </form>
          </>
        )}
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default BookAppointment;

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  acceptAppointment,
  getAllAppointments,
  rejectAppointment,
  reset,
} from "../../features/appointment/appointmentSlice";

import Loader from "../SharedComponents/Loader";

import DoctorNavbar from "./DoctorNavbar";
import toast from "react-hot-toast";

const DoctorMain1 = () => {
  const {
    isLoading,
    allAppointments,
    isSuccess,
    successMessage,
    isError,
    errorMessage,
  } = useSelector((state) => state.appointment);
  const dispatch = useDispatch();

  const acceptHandler = (id) => {
    dispatch(acceptAppointment(id));
  };

  const rejectHandler = (id) => {
    dispatch(rejectAppointment(id));
  };

  useEffect(() => {
    if (isSuccess && successMessage) {
      dispatch(reset());
      toast.success(successMessage);
    }

    if (isError && errorMessage) {
      dispatch(reset());
      toast.error(errorMessage);
    }

    dispatch(getAllAppointments());
  }, [isError, isSuccess, successMessage, errorMessage]);

  return (
    <div>
      <DoctorNavbar />
      <div className="container my-5">
        <h1 className="text-center">Your Appointments</h1>
        {isLoading ? (
          <Loader />
        ) : allAppointments.length === 0 ? (
          <h1 className="text-center">No Appointments</h1>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Message</th>
                <th>Status</th>
                <th>Date</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {allAppointments.map((appoint) => (
                <tr key={appoint._id}>
                  <td>
                    <img
                      src={appoint.patient.avatar.url}
                      alt="image"
                      style={{
                        height: 70,
                        width: 70,
                        borderRadius: "50%",
                      }}
                    />
                  </td>
                  <td>{appoint.patient.name}</td>
                  <td>{appoint.patient.email}</td>
                  <td>{appoint.message}</td>
                  <td>
                    <span
                      className={`badge bg-${
                        appoint.status === "pending"
                          ? "warning"
                          : appoint.status === "accepted"
                          ? "success"
                          : "danger"
                      }`}
                    >
                      {appoint.status}
                    </span>
                  </td>
                  <td>{appoint.createdAt.substring(0, 10)}</td>

                  {appoint.status === "pending" ? (
                    <>
                      <td>
                        <button
                          className="btn btn-sm btn-success"
                          onClick={() => acceptHandler(appoint._id)}
                        >
                          Accept
                        </button>
                      </td>
                      <td>
                        <button
                          className="btn btn-sm btn-danger"
                          onClick={() => rejectHandler(appoint._id)}
                        >
                          Reject
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td></td>
                      <td></td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DoctorMain1;

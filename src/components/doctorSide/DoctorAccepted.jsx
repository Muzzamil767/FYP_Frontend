import React, { useEffect } from "react";
import DoctorNavbar from "./DoctorNavbar";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptedAppointments,
  markAsDone,
  reset,
} from "../../features/appointment/appointmentSlice";
import Loader from "../SharedComponents/Loader";
import toast from "react-hot-toast";

const DoctorAccepted = () => {
  const {
    isLoading,
    activeAppointments,
    isSuccess,
    successMessage,
    isError,
    errorMessage,
  } = useSelector((state) => state.appointment);
  const dispatch = useDispatch();

  const markDoneHandler = (id) => {
    dispatch(markAsDone(id));
  };

  useEffect(() => {
    if (isSuccess && successMessage) {
      toast.success(successMessage);
      dispatch(reset());
    }

    if (isError && errorMessage) {
      toast.error(errorMessage);
      dispatch(reset());
    }

    dispatch(acceptedAppointments());
  }, [isError, isSuccess, successMessage, errorMessage]);

  return (
    <div>
      <DoctorNavbar />
      <div className="container mt-5">
        <h1 className="text-center">Active Appointments</h1>
        {isLoading ? (
          <Loader />
        ) : activeAppointments.length === 0 ? (
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
              </tr>
            </thead>
            <tbody>
              {activeAppointments.map((appoint) => (
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

                  <td>
                    <button
                      className="btn btn-sm btn-info"
                      onClick={() => markDoneHandler(appoint._id)}
                    >
                      Mark as Done
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default DoctorAccepted;

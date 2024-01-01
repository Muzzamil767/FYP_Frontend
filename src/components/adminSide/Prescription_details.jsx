import React, { useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import { Table } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { getAllPrescriptions } from "../../features/prescription/prescritionSlice";
import Loader from "../SharedComponents/Loader";

const Prescription_details = () => {
  const dispatch = useDispatch();
  const { isLoading, prescriptions } = useSelector(
    (state) => state.prescription
  );

  useEffect(() => {
    dispatch(getAllPrescriptions());
  }, []);

  return (
    <div>
      <AdminNavbar />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <div className="container-1">
            <div className="row cards">
              {prescriptions.map((card) => (
                <div key={card._id} className="col-lg-3 col-sm-12">
                  <div className="card-11">
                    <img
                      src={card.image.url}
                      alt={card.name}
                      className="card-image"
                    />
                    <a href="#" className="card-title1">
                      {card.patient.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Prescription_details;

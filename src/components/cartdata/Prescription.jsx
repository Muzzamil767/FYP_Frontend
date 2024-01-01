import React, { useState, useEffect } from "react";
import "./Prescription.css";
import img1 from "./images/prescr-rx.png";
import img2 from "./images/prescr-phone.png";
import img3 from "./images/prescr-box.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
//import { useNavigation } from "@react-navigation/native";
import { Link } from "react-router-dom";
import Home from "../home/Home";
import Footer1 from "../footer1/Footer1";
import Footer2 from "../footer2/Footer2";
import Navbar1 from "../navbar1/Navbar1";
import Navbar2 from "../navbar2/Navbar2";
import toast from "react-hot-toast";

import { useDispatch, useSelector } from "react-redux";
import {
  reset,
  uploadPrescripton,
} from "../../features/prescription/prescritionSlice";
import Loader from "../SharedComponents/Loader";

const Prescription = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [state, setState] = useState(0);

  const dispatch = useDispatch();
  const { isLoading, isSuccess, successMessage, isError, errorMessage } =
    useSelector((state) => state.prescription);

  //const navigation = useNavigation();
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleDoneClick = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);

      dispatch(uploadPrescripton(formData));
    }
  };
  const handleRemoveImage = () => {
    setSelectedFile(null);
  };

  useEffect(() => {
    if (isError && errorMessage) {
      console.log("error occurred");
      toast.error(errorMessage);
    }

    if (isSuccess && successMessage) {
      console.log("successfully added image");
      toast.success(successMessage);
    }

    dispatch(reset());
  }, [isError, isSuccess, errorMessage, successMessage]);

  return isLoading ? (
    <Loader />
  ) : (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-sm-12">
            <div className="prescription-main">
              <h2
                style={{
                  textAlign: "center",
                  marginBottom: "40px",
                  marginTop: "30px",
                  fontWeight: "bolder",
                }}
              >
                Order Medicines using Prescription
              </h2>

              <div className="container">
                <div className="row prescription-icon">
                  <div className="col-lg-2 col-sm-2"></div>
                  <div className="col-lg-3 col-sm-3">
                    <img style={{ width: "40%" }} src={img1} />
                    <p>Upload a Valid prescription</p>
                  </div>
                  <div className="col-lg-3 col-sm-3">
                    <img style={{ width: "40%" }} src={img2} />
                    <p>Recieve a call</p>
                  </div>
                  <div className="col-lg-3 col-sm-3">
                    <img style={{ width: "40%" }} src={img3} />
                    <p>Recieve the order at doorstep</p>
                  </div>
                </div>
              </div>
              <hr />
              <div className="upload-pic">
                <h5>Upload Prescription</h5>
                <p>To place order please upload Prescription Picture.</p>
                <div className="prescription-upload">
                  <label htmlFor="file-upload">
                    <FontAwesomeIcon icon={faUpload} className="upload-icon" />
                    <p>Browse file</p>
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleFileUpload}
                  />
                  <div
                    style={{
                      maxWidth: "100%",
                      maxHeight: "200px",
                      overflow: "hidden",
                    }}
                  >
                    {selectedFile && (
                      <div>
                        <FontAwesomeIcon
                          icon={faTimesCircle}
                          className="remove-icon"
                          onClick={handleRemoveImage}
                        />
                        <img
                          src={URL.createObjectURL(selectedFile)}
                          alt="Selected"
                          style={{ width: "100%", height: "auto" }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="prescription-right">
              <h5>How to Upload Your Prescription?</h5>
              <div>
                <p>
                  Do not crop out any part of the prescription image. Avoid
                  unclear or blurred image of your prescription. Include details
                  of your doctor, patient and clinic visit date.
                </p>
                <p>
                  Medicines will only be dispensed against a valid prescription.
                </p>
              </div>
            </div>
            <button
              onClick={handleDoneClick}
              className="btn btn-primary prescription-proceed"
            >
              Done
            </button>
          </div>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default Prescription;

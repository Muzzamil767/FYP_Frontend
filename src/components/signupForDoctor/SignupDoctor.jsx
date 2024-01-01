import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setDoctor } from "../../features/DoctorSlicesignUp";
import "./SignupDoctor.css";
import Footer1 from "../footer1/Footer1";
import Footer2 from "../footer2/Footer2";
import Navbar1 from "../navbar1/Navbar1";
import Navbar2 from "../navbar2/Navbar2";
import { registerDoctor, reset } from "../../features/auth/authSlice";
import toast from "react-hot-toast";
import Loader from "../SharedComponents/Loader";

const SignupDoctor = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isLoading, isSuccess, successMessage, isError, errorMessage } =
    useSelector((state) => state.authentication);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    qualification: "",
    specialization: "",
    bio: "",
    timings: "",
    avatar: { public_id: "", url: "", imageFile: null },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("password", formData.password);
    formDataToSend.append("qualification", formData.qualification);
    formDataToSend.append("specialization", formData.specialization);
    formDataToSend.append("bio", formData.bio);
    formDataToSend.append("timings", formData.timings);
    formDataToSend.append("file", formData.avatar.imageFile);

    dispatch(registerDoctor(formDataToSend));

    // Reset form data after dispatching to Redux if required
    setFormData({
      name: "",
      email: "",
      password: "",
      qualification: "",
      specialization: "",
      bio: "",
      timings: "",
      avatar: { public_id: "", url: "", imageFile: null },
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      avatar: { ...formData.avatar, imageFile: file },
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Add validation or specific handling if required for doctor signup fields
  };

  useEffect(() => {
    if (isSuccess && successMessage) {
      toast.success(successMessage);
    }

    if (isError && errorMessage) {
      toast.error(errorMessage);
    }

    if (user) {
      navigate("/doctorMain");
    }

    dispatch(reset());
  }, [isSuccess, isError, successMessage, errorMessage]);

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="signup-page">
        <div className="signup-container">
          <h1>Sign Up For Doctor</h1>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="avatarImage">Avatar Image</label>
                  <input
                    type="file"
                    id="avatarImage"
                    name="avatarImage"
                    onChange={handleImageChange}
                  />
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Qualification</label>
                  <input
                    type="text"
                    id="qualification"
                    name="qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Specialization</label>
                  <input
                    type="text"
                    id="specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Bio</label>
                  <input
                    type="text"
                    id="bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Timming</label>
                  <input
                    type="text"
                    id="timings"
                    name="timings"
                    value={formData.timings}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="signup-btn"
                  style={{ backgroundColor: "#02b9b1" }}
                >
                  Sign Up
                </button>
              </form>
            </>
          )}
          <div className="login-link">
            Already a member? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default SignupDoctor;

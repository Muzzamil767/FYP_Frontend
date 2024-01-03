import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setUser, setError, clearError } from "../../features/authSlice"; // Import your authSlice actions
import "./Login.css";
import Footer1 from "../footer1/Footer1";
import Footer2 from "../footer2/Footer2";
import Navbar1 from "../navbar1/Navbar1";
import Navbar2 from "../navbar2/Navbar2";
import { loginDoctor, reset } from "../../features/auth/authSlice";
import Loader from "../SharedComponents/Loader";

const DoctorLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const error = useSelector((state) => state.auth.error);
  const { isLoading, user, isSuccess, successMessage, isError, errorMessage } =
    useSelector((state) => state.authentication);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginDoctor({ email, password }));

    // try {
    //   const response = await fetch('/api/v1/login', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   if (response.ok) {
    //     const { user, token } = await response.json();

    //     // Save the token in local storage
    //     localStorage.setItem('authToken', token);

    //     // Dispatch the setUser action to update the login state in Redux
    //     dispatch(setUser(user));

    //     // Use navigateTo to redirect to the desired page after successful login
    //     navigateTo('/');
    //   } else {
    //     console.error('Login failed:', response.statusText);

    //     // Dispatch the setError action on login failure
    //     dispatch(setError(response.statusText));
    //   }
    // } catch (error) {
    //   console.error('Network error:', error.message);

    //   // Dispatch the setError action for network errors
    //   dispatch(setError('Network error'));
    // }
  };

  useEffect(() => {
    if (user) {
      navigate("/doctorMain");
    }

    if (isError && errorMessage) {
      toast.error(errorMessage);
    }

    dispatch(reset());
  }, [user, isError, successMessage, errorMessage, dispatch]);

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="login-page">
        <div className="login-container">
          <h1>Login As Doctor</h1>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <form onSubmit={handleLogin}>
                {error && <p className="error">{error}</p>}
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="password-input">
                    <input
                      type="password"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                      required
                    />
                    <p className="forgot-password">Forgot Password?</p>
                  </div>
                </div>
                <button className="login-btn" type="submit">
                  Login
                </button>
              </form>
            </>
          )}
          <p className="not-member">
            Not a member?{" "}
            <Link className="sign-up-link" to="/signUp">
              Sign up
            </Link>
          </p>
          <p className="not-member">
            Not a Register as a Doctor?{" "}
            <Link className="sign-up-link" to="/signUpDoctor">
              Sign up Doctor
            </Link>
          </p>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default DoctorLogin;

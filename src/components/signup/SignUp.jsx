import React, { useState } from 'react';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { setError, clearError } from '../../features/authSlice'; // Import your authSlice actions
import './SignUp.css';
import Footer1 from '../footer1/Footer1';
import Footer2 from '../footer2/Footer2';
import Navbar1 from '../navbar1/Navbar1';
import Navbar2 from '../navbar2/Navbar2';

const SignUp = () => {
  const dispatch = useDispatch(); // Initialize useDispatch
  const navigateTo = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [image, setImage] = useState("");

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      // Validate full name (letters and spaces only)
      if (/^[A-Za-z\s]*$/.test(value)) {
        setFormData({ ...formData, [name]: value });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const selectImageHandler = (e) => {
    const file = e.target.files[0];

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onloadend = () => {
      setImage(file);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};


    const userData = new FormData();

    const {name,  email , password} = formData;



    if (!name) {
      validationErrors.name = 'Full Name is required';
    } else if (!/^[A-Za-z\s]+$/.test(formData.name)) {
      validationErrors.name = 'Only letters and spaces are allowed';
    }
    if (!email) {
      validationErrors.email = 'Email is required';
    }
    if (!password) {
      validationErrors.password = 'Password is required';
    }

    if(!image){
      validationErrors.password = 'Image is required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        userData.append("name", name);
         userData.append("email", email);
        userData.append("password", password);
        userData.append("file", image);
        const response = await fetch('/api/v1/register', {
          method: 'POST',
          body: userData,
        });

        const userInformation = await response.json();
        console.log(userInformation);




        if (response.ok) {
          
          // Use navigateTo to redirect to the login page after successful signup
          navigateTo('/login');
        } else {
          console.error('Signup failed:', response.statusText);

          // Dispatch the setError action
          dispatch(setError(response.statusText));
          // Display error messages or take appropriate actions
        }
      } catch (error) {
        console.error('Network error:', error.message);
        // Handle network errors or other exceptions
      }
    }
  };

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="signup-page">
        <div className="signup-container">
          <h1>Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <p className="error">{errors.name}</p>}
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
              {errors.email && <p className="error">{errors.email}</p>}
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
              {errors.password && <p className="error">{errors.password}</p>}
            </div>
            <div className='form-group'>
              <label htmlFor='file'>Profile Picture</label>
              <input type='file' accept="image/jpeg, image/png, img/gif"
                placeholder="Select Profile Photo" onChange={selectImageHandler}></input>
            </div>

            <button type="submit" className="signup-btn" style={{ backgroundColor: '#02b9b1' }}>
              Sign Up
            </button>
          </form>
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

export default SignUp;

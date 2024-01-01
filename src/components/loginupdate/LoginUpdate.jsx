import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './LoginUpdate.css';
import Footer1 from '../footer1/Footer1';
import Footer2 from '../footer2/Footer2';
import Navbar1 from '../navbar1/Navbar1';
import Navbar2 from '../navbar2/Navbar2';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const LoginUpdate = () => {
  const user = useSelector((state) => state.auth.user);
  const navigateTo = useNavigate(); // Initialize useNavigate

  const [formData, setFormData] = useState({
    name: user ? user.name : '', // Initialize with user data if available
    email: user ? user.email : '', // Initialize with user data if available
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {};

    if (!formData.name) {
      validationErrors.name = 'Name is required';
    }

    if (!formData.email) {
      validationErrors.email = 'Email is required';
    } else if (!/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(formData.email)) {
      validationErrors.email = 'Invalid email format';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        const response = await fetch('/api/v1/me/update', {
          method: 'PUT', // Use PUT method for updating user data
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const updatedUser = await response.json();
          console.log('User updated:', updatedUser);

          setSuccessMessage('User information updated successfully');

          // Navigate to the home route (/) after successful update
          navigateTo('/');
        } else {
          console.error('Update failed:', response.statusText);
          // Handle update failure and set appropriate error message
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
          <h1>Update Profile</h1>
          {successMessage && <p className="success">{successMessage}</p>}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
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

            <button
              type="submit"
              className="signup-btn"
              style={{ backgroundColor: '#02b9b1' }}
            >
              Save
            </button>
          </form>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
};

export default LoginUpdate;

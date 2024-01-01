import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setError, clearError } from '../../features/authSlice'; // Import your authSlice actions
import './PasswordUpdate.css'; // Create the CSS file for styling
import Navbar1 from '../navbar1/Navbar1';
import Navbar2 from '../navbar2/Navbar2';
import Footer1 from '../footer1/Footer1';
import Footer2 from '../footer2/Footer2';

const PasswordUpdate = () => {
  const dispatch = useDispatch();
  const navigateTo = useNavigate();
  const user = useSelector((state) => state.auth.user);

  console.log(user);

  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState(''); // Add confirmNewPassword state

  const error = useSelector((state) => state.auth.error);

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      // Passwords do not match
      dispatch(setError('Passwords do not match'));
      return;
    }

    try {
      const response = await fetch('/api/v1/password/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.token}`, // Include the user's token for authentication
        },
        body: JSON.stringify({ oldPassword, newPassword, confirmNewPassword }), // Send confirmNewPassword
      });

      if (response.ok) {
        // Password successfully updated
        // You can handle success as needed, e.g., redirect to a profile page
        navigateTo('/');
      } else {
        const responseData = await response.json(); // Parse response data

        if (responseData.error) {
          // Display the error message from the API response
          dispatch(setError(responseData.error));
        } else {
          // Fallback error message for other error cases
          dispatch(setError('An error occurred while updating the password.'));
        }
      }
    } catch (error) {
      console.error('Network error:', error.message);

      // Dispatch the setError action for network errors
      dispatch(setError('Network error'));
    }
  };

  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className="update-password-page">
        <div className="update-password-container">
          <h1>Update Password</h1>
          <form onSubmit={handleUpdatePassword}>
            {error && <p className="error">{error}</p>}
            <div className="form-group">
              <label htmlFor="oldPassword">Old Password</label>
              <input
                type="password"
                id="oldPassword"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                placeholder="Enter your old password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword">New Password</label>
              <input
                type="password"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter your new password"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="confirmNewPassword">Confirm New Password</label>
              <input
                type="password"
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                placeholder="Confirm your new password"
                required
              />
            </div>
            <button className="update-password-btn" type="submit">
              Update Password
            </button>
          </form>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
};
export default PasswordUpdate

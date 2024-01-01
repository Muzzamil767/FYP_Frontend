import React, { useState } from 'react';
import './Address.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { storeShippingAddress } from '../../actions/AddressActions';
import { faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import Navbar1 from '../navbar1/Navbar1';
import Navbar2 from '../navbar2/Navbar2';
import Footer1 from '../footer1/Footer1';
import Footer2 from '../footer2/Footer2';

const Address = ({ storeShippingAddress }) => {
  const navigateTo = useNavigate();
  const dispatch = useDispatch(); // Get the dispatch function using the hook

  const [shippingAddress, setShippingAddress] = useState({
    address: '',
    city: '',
    country: '',
    pincode: '',
    phonenumber: '',
    state: '',
  });
  const [validForm, setValidForm] = useState(false);
  const [formComplete, setFormComplete] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setShippingAddress((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Call handleValidation after each input change to update validForm state
    handleValidation();
  };

  const handleValidation = () => {
    const { address, phonenumber, state, city, country, pincode } = shippingAddress;
    if (
      address.trim() !== '' &&
      phonenumber.trim() !== '' &&
      state.trim() !== '' &&
      city.trim() !== '' &&
      country.trim() !== '' &&
      pincode.trim() !== ''
    ) {
      setFormComplete(true);
    } else {
      setFormComplete(false);
    }
  };

  const handleProceed = (event) => {
    if (!formComplete) {
      event.preventDefault();
      toast.error('Please fill in all fields before proceeding.');
    } else {
      // Dispatch the action to store the shipping address in Redux
      dispatch(storeShippingAddress(shippingAddress));

      // Navigate to the next page
      navigateTo('/payment');
    }
  };


  return (
    <>
      <Navbar1 />
      <Navbar2 />
      <div className='container'>
        <Link to="/cart">
          <div className='d-flex' style={{ color: 'blue', fontSize: 'larger' }}>
            <FontAwesomeIcon icon={faArrowLeft} style={{ marginTop: '10px' }} />
            <h6 style={{ marginLeft: '10px', marginTop: '10px', fontSize: 'large' }}>Back to Cart</h6>
          </div>
        </Link>
        <h1>CheckOut</h1>
        <div className='row'>
          <div className='col-lg-12 col-sm-12 col-md-12'>
            <div className='address-main'>
              <div className='row'>
                <div className='col-lg-9 col-sm-9'>
                  <h4>Shipping Address</h4>
                </div>
                <div className='col-lg-3 col-sm-3 d-flex' style={{ marginTop: '20px', color: 'blue' }}>
                  <FontAwesomeIcon icon={faPlus} style={{ marginTop: '15px', marginRight: '10px' }} />
                  <p style={{ color: 'blue' }}>Add Address</p>
                </div>
              </div>
              <hr />
              <ul className='address-list'>
                <li>
                  <div className='form-group'>
                    <label>Address:</label>
                    <input
                      type='text'
                      name='address'
                      value={shippingAddress.address}
                      onChange={handleInputChange}
                      onBlur={handleValidation}
                      required
                    />
                  </div>
                </li>
                <li>
                  <div className='form-group'>
                    <label>City:</label>
                    <input
                      type='text'
                      name='city'
                      value={shippingAddress.city}
                      onChange={handleInputChange}
                      onBlur={handleValidation}
                      required
                    />
                  </div>
                </li>
                <li>
                  <div className='form-group'>
                    <label>State:</label>
                    <input
                      type='text'
                      name='state'
                      value={shippingAddress.state}
                      onChange={handleInputChange}
                      onBlur={handleValidation}
                      required
                    />
                  </div>
                </li>
                <li>
                  <div className='form-group'>
                    <label>Country:</label>
                    <input
                      type='text'
                      name='country'
                      value={shippingAddress.country}
                      onChange={handleInputChange}
                      onBlur={handleValidation}
                      required
                    />
                  </div>
                </li>
                <li>
                  <div className='form-group'>
                    <label>Pin Code:</label>
                    <input
                      type='number'
                      name='pincode'
                      value={shippingAddress.pincode}
                      onChange={handleInputChange}
                      onBlur={handleValidation}
                      required
                    />
                  </div>
                </li>
                <li>
                  <div className='form-group'>
                    <label>Phone Number:</label>
                    <input
                      type='number'
                      name='phonenumber'
                      value={shippingAddress.phonenumber}
                      onChange={handleInputChange}
                      onBlur={handleValidation}
                      required
                    />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <Link to='/payment'>
            <button className='btn address-proceed btn-lg' onClick={handleProceed}>
              Proceed
            </button>
          </Link>
        </div>
      </div>
      <Footer1 />
      <Footer2 />
    </>
  );
};

// Connect the component to Redux and dispatch the action
export default connect(null, { storeShippingAddress })(Address);

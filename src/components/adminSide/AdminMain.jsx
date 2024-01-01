import React, { useState, useEffect } from "react";
import AdminNavbar from "./AdminNavbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button } from "react-bootstrap";
import "./AdminMain.css";
import CreateProduct from "./CreateProduct";
import {
  faUser,
  faStar,
  faUsers,
  faShoppingCart,
  faDollarSign,
  faBox,
} from "@fortawesome/free-solid-svg-icons";

const AdminMain = () => {
  const [data, setData] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [order, setOrder] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    stock: 0,
    price: 0,
    category: '',
  });
  const [isDataSent, setIsDataSent] = useState(false);

  useEffect(() => {
    // Fetch data from your API to display existing products
    fetch('/api/v1/products')
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success && responseData.products) {
          console.log('Products Array:', responseData.products);
          setData(responseData.products);
        } else {
          console.error('Invalid API response:', responseData);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    // Fetch data from your API to display existing products
    fetch('/api/v1/admin/users', {
      method: 'GET', // Specify the GET request method
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success && responseData.users) {
          console.log('Products Array:', responseData.users);
          setCustomer(responseData.users);
        } else {
          console.error('Invalid API response:', responseData);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  //for the orders 
  useEffect(() => {
    fetch('/api/v1/admin/orders', {
      method: 'GET', // Specify the GET request method
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          
          setOrder(responseData.orders);
  
          // Initialize DataTables here after data is fetched
         
        } else {
          console.error('Invalid API response:', responseData);
        }
      })
      .catch((error) => {
        console.error('Error fetching login data:', error);
      });
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDataSent(false); // Reset the data sent state when the modal is closed
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch('/api/v1/admin/product/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          console.log('Product created successfully:', data.product);
          setIsDataSent(true);
          setFormData({
            name: '',
            description: '',
            stock: 0,
            price: 0,
            category: '',
            user:" "
          });
        } else {
          console.error('Product creation failed:', data.error);
        }
      })
      .catch((error) => {
        console.error('Error while creating product:', error);
      });
  };
  console.log(`the total customer are ${customer.length}`)

  console.log(`the total orders are ${order.length}`)
  

  return (
    <div>
    <AdminNavbar />
    <div className="container">
      <button className="new-product btn btn-secondary btn-lg" onClick={openModal}>
        + Create New Product
      </button>
      {isModalOpen && (
        <div className="container">
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <h2 style={{ textAlign: "center", justifyContent: "center", margin: "30px" }}>
                Create New Products
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <input id="description" name="description" value={formData.description} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="stock">Stock</label>
                  <input type="number" id="stock" name="stock" value={formData.stock} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input type="number" id="price" name="price" value={formData.price} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label htmlFor="user">User</label>
                  <input type="text" id="user" name="user" value={formData.user} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <input type="text" id="category" name="category" value={formData.category} onChange={handleChange} />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            </div>
          </div>
        </div>
      )}
      {isDataSent && (
        <div className="alert alert-success">
          Product data has been successfully sent to the database!
        </div>
      )}
        <div className="container-2 main-boxes">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="boxes-1">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 left-1">
                    <FontAwesomeIcon
                      icon={faUsers}
                      style={{
                        fontSize: "20px",
                        marginLeft: "20px",
                        border: "1px solid white",
                        padding: "15px",
                        color: "white",
                        borderRadius: "90%",
                        backgroundColor: "darkBlue",
                      }}
                    />
                    <p>Show Details</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 right-1">
                    <h6>Total Customers</h6>
                    <h3>{customer.length}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="boxes-2">
              <div className="row">
                  <div className="col-lg-6 col-sm-6 left-2">
                    <FontAwesomeIcon
                      icon={faBox}
                      style={{
                        fontSize: "20px",
                        marginLeft: "20px",
                        border: "1px solid white",
                        padding: "15px",
                        color: "white",
                        borderRadius: "90%",
                        backgroundColor: "green",
                      }}
                    />
                    <p>Show Details</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 right-2">
                    <h6>Total Products</h6>
                    <h3>{data.length}</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="boxes-3">
              <div className="row">
                  <div className="col-lg-6 col-sm-6 left-3">
                    <FontAwesomeIcon
                      icon={faDollarSign}
                      style={{
                        fontSize: "20px",
                        marginLeft: "20px",
                        border: "1px solid white",
                        padding: "15px",
                        color: "white",
                        borderRadius: "90%",
                        backgroundColor: "yellowgreen",
                      }}
                    />
                    <p>Show Details</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 right-3">
                    <h6>Total Orders</h6>
                    <h3>{order.length}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*  Row2 */}
        <div className="container main-boxes">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="boxes-4">
                <div className="row">
                  <div className="col-lg-6 col-sm-6 left-1">
                    <FontAwesomeIcon
                      icon={faStar}
                      style={{
                        fontSize: "20px",
                        marginLeft: "20px",
                        border: "1px solid white",
                        padding: "15px",
                        color: "white",
                        borderRadius: "90%",
                        backgroundColor: "orange",
                      }}
                    />
                    <p>Show Details</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 right-1">
                    <h6>Total Stats</h6>
                    <h3>60</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12">
              <div className="boxes-5">
              <div className="row">
                  <div className="col-lg-6 col-sm-6 left-2">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      style={{
                        fontSize: "20px",
                        marginLeft: "20px",
                        border: "1px solid white",
                        padding: "15px",
                        color: "white",
                        borderRadius: "90%",
                        backgroundColor: "red",
                      }}
                    />
                    <p>Show Details</p>
                  </div>
                  <div className="col-lg-6 col-sm-6 right-2">
                    <h6>Remainning Products</h6>
                    <h3>28</h3>
                  </div>
                </div>
              </div>
            </div>
           
          </div>
        </div>
        {/* Row 3 */}
       
      </div>
    
    </div>
    
    
  );
};
export default AdminMain;

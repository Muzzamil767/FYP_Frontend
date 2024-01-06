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
import axios from "axios";

const AdminMain = () => {
  const [data, setData] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [order, setOrder] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    stock: 0,
    price: 0,
    category: "",
  });
  const [isDataSent, setIsDataSent] = useState(false);

  const [image, setImage] = useState("");

  useEffect(() => {
    // Fetch data from your API to display existing products
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/products`)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success && responseData.products) {
          console.log("Products Array:", responseData.products);
          setData(responseData.products);
        } else {
          console.error("Invalid API response:", responseData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    // Fetch data from your API to display existing products
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/admin/users`, {
        withCredentials: true,
      })
      .then((responseData) => {
        if (responseData.data.success && responseData.data.users) {
          console.log("Products Array:", responseData.data.users);
          setCustomer(responseData.data.users);
        } else {
          console.error("Invalid API response:", responseData);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  //for the orders
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/admin/orders`, {
        withCredentials: true,
      })
      .then((responseData) => {
        if (responseData.data.success) {
          setOrder(responseData.data.orders);

          // Initialize DataTables here after data is fetched
        } else {
          console.error("Invalid API response:", responseData);
        }
      })
      .catch((error) => {
        console.error("Error fetching login data:", error);
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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onloadend = () => {
      setImage(file);
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("stock", formData.stock);
    data.append("price", formData.price);
    data.append("category", formData.category);
    data.append("file", image);

    axios
      .post(`${process.env.REACT_APP_API_URL}/api/v1/admin/product/new`, data, {
        withCredentials: true,
      })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        if (data.success) {
          console.log("Product created successfully:", data.product);
          setIsDataSent(true);
          setFormData({
            name: "",
            description: "",
            stock: 0,
            price: 0,
            category: "",
            user: " ",
          });
        } else {
          console.error("Product creation failed:", data.error);
        }
      })
      .catch((error) => {
        console.error("Error while creating product:", error);
      });
  };
  console.log(`the total customer are ${customer.length}`);

  console.log(`the total orders are ${order.length}`);

  return (
    <div>
      <AdminNavbar />
      <div className="container">
        <button
          className="new-product btn btn-secondary btn-lg"
          onClick={openModal}
        >
          + Create New Product
        </button>
        {isModalOpen && (
          <div className="container">
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <h2
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    margin: "30px",
                  }}
                >
                  Create New Products
                </h2>
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
                  </div>

                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                      id="description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="stock">Stock</label>
                    <input
                      type="number"
                      id="stock"
                      name="stock"
                      value={formData.stock}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input
                      type="number"
                      id="price"
                      name="price"
                      value={formData.price}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="user">User</label>
                    <input
                      type="text"
                      id="user"
                      name="user"
                      value={formData.user}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <input
                      type="text"
                      id="category"
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="category">Product Image</label>
                    <input
                      type="file"
                      id="category"
                      name="category"
                      onChange={handleImageUpload}
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
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
      </div>
    </div>
  );
};
export default AdminMain;

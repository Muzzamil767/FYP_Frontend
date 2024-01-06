import React, { useEffect, useState } from "react";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.min.css";
import $ from "jquery";
import "./Adminproduct.css";
import "datatables.net";
import AdminNavbar from "./AdminNavbar";
import "./Adminproduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import axios from "axios";

const AdminProduct = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedProductData, setEditedProductData] = useState({
    name: "",
    description: "",
    stock: 0,
    category: "",
    price: 0,
  });

  const [image, setImage] = useState("");

  useEffect(() => {
    // Initialize DataTable
    $("#example").DataTable({
      responsive: true,
      paging: true,
      pageLength: 8,
      bLengthChange: false,
    });
  }, []);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/v1/products`)
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success && responseData.products) {
          setData(responseData.products);
          setIsLoading(false);
        } else {
          console.error("Invalid API response:", responseData);
          setIsLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  const handleDeleteProduct = (productId) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .delete(
          `${process.env.REACT_APP_API_URL}/api/v1/admin/product/${productId}`,
          {
            withCredentials: true,
          }
        )
        .then((responseData) => {
          if (responseData.data.success) {
            console.log("Product deleted successfully");
            setData((prevData) =>
              prevData.filter((product) => product._id !== productId)
            );
          } else {
            console.error("Failed to delete product:", responseData.error);
          }
        })
        .catch((error) => {
          console.error("Error while deleting product:", error);
        });
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);

    fileReader.onloadend = () => {
      setImage(file);
    };
  };

  const handleEditProduct = (productId) => {
    setEditProductId(productId);
    const productToEdit = data.find((product) => product._id === productId);
    setEditedProductData({
      name: productToEdit.name,
      description: productToEdit.description,
      stock: productToEdit.stock,
      category: productToEdit.category,
      price: productToEdit.price,
    });
    setIsModalOpen(true);
  };

  const handleSaveProduct = (e) => {
    // Send a PUT request with the edited product data
    e.preventDefault();
    const formData = new FormData();

    formData.append("name", editedProductData.name);
    formData.append("description", editedProductData.description);
    formData.append("stock", editedProductData.stock);
    formData.append("price", editedProductData.price);
    formData.append("category", editedProductData.category);
    formData.append("file", image);

    axios
      .put(
        `${process.env.REACT_APP_API_URL}/api/v1/admin/product/${editProductId}`,
        formData,
        {
          withCredentials: true,
        }
      )
      .then((responseData) => {
        if (responseData.data.success) {
          console.log("Product updated successfully");
          // Update the data in your state
          const updatedData = data.map((product) =>
            product._id === editProductId
              ? { ...product, ...editedProductData }
              : product
          );
          setData(updatedData);
          setEditProductId(null);
          setIsModalOpen(false);
        } else {
          console.error("Failed to update product:", responseData.error);
        }
      })
      .catch((error) => {
        console.error("Error while updating product:", error);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset the data sent state when the modal is closed
  };

  return (
    <div>
      <AdminNavbar />
      <div className="container product-table">
        <table id="example" className="display" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>id</th>
              <th>Name</th>
              <th>Title</th>
              <th>Stock</th>
              <th>Category</th>
              <th>Price</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <tr key={index}>
                <td>{product._id}</td>
                <td>{product.name}</td>
                <td>{product.description}</td>
                <td>{product.stock}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    onClick={() => handleDeleteProduct(product._id)}
                    style={{
                      color: "red",
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />
                  </button>

                  <button
                    onClick={() => handleEditProduct(product._id)}
                    style={{
                      color: "green",
                      border: "none",
                      background: "none",
                      cursor: "pointer",
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} style={{ color: "green" }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container">
        {editProductId !== null && (
          <div className="modal">
            <div className="modal-content">
              <h2
                style={{
                  textAlign: "center",
                  justifyContent: "center",
                  margin: "30px",
                }}
              >
                Edit Product
              </h2>
              <form onSubmit={handleSaveProduct}>
                <div className="form-group">
                  <label>Name: </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={editedProductData.name}
                    onChange={(e) =>
                      setEditedProductData({
                        ...editedProductData,
                        name: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Description: </label>
                  <input
                    type="text"
                    name="description"
                    placeholder="Title"
                    value={editedProductData.description}
                    onChange={(e) =>
                      setEditedProductData({
                        ...editedProductData,
                        description: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>total stock:</label>
                  <input
                    type="number"
                    name="stock"
                    placeholder="Stock"
                    value={editedProductData.stock}
                    onChange={(e) =>
                      setEditedProductData({
                        ...editedProductData,
                        stock: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Category:</label>
                  <input
                    type="text"
                    name="category"
                    placeholder="Category"
                    value={editedProductData.category}
                    onChange={(e) =>
                      setEditedProductData({
                        ...editedProductData,
                        category: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label>Price:</label>
                  <input
                    type="number"
                    name="price"
                    placeholder="Price"
                    value={editedProductData.price}
                    onChange={(e) =>
                      setEditedProductData({
                        ...editedProductData,
                        price: e.target.value,
                      })
                    }
                    required
                  />
                </div>
                <br />
                <div className="form-group">
                  <label htmlFor="category">Product Image</label>
                  <input
                    type="file"
                    id="category"
                    name="category"
                    onChange={handleImageUpload}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-lg">
                  Save
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminProduct;

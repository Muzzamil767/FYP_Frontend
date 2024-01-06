import React, { useEffect, useState } from "react";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import "datatables.net-responsive-dt/css/responsive.dataTables.min.css";
import "datatables.net";
import $ from "jquery"; // Import jQuery
import AdminNavbar from "./AdminNavbar";
import "./AdminOrder.css";
import axios from "axios";
const AdminOrder = () => {
  const [orderData, setOrderData] = useState([]);
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/admin/orders`, {
        withCredentials: true,
      })
      .then((responseData) => {
        if (responseData.data.success) {
          setOrderData(responseData.data.orders);

          // Initialize DataTables here after data is fetched
          $("#example").DataTable({
            responsive: true,
            paging: true,
            pageLength: 8,
          });
        } else {
          console.error("Invalid API response:", responseData);
        }
      })
      .catch((error) => {
        console.error("Error fetching login data:", error);
      });
  }, []); // Empty dependency array means it runs once on component mount

  // Conditional rendering when loginData is not yet available
  if (orderData === undefined) {
    return <div>Loading...</div>;
  }

  console.log(`what is in this ${orderData._id}`);
  return (
    <div>
      <AdminNavbar />
      <div className="container customer-table">
        <table id="example" className="display" style={{ width: "100%" }}>
          <thead>
            <tr>
              <th>id</th>
              <th>Items</th>
              <th>userId</th>
              <th>Total Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {orderData.length > 0 ? (
              orderData.map((data, index) => (
                <tr key={index}>
                  <td>{data._id}</td>
                  <td>
                    {/* Rendering order items */}
                    <ul>
                      {data.orderItems.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          Name: {item.name}, Quantity: {item.quantity}, Price:{" "}
                          {item.price}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>{data.userId}</td>
                  <td>{data.totalPrice}</td>
                  <td>{data.orderStatus}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4">Loading...</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default AdminOrder;

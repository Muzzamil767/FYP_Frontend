import React, { useEffect, useState } from 'react';
import 'datatables.net-dt/css/jquery.dataTables.min.css';
import 'datatables.net-responsive-dt/css/responsive.dataTables.min.css';
import 'datatables.net';
import $ from 'jquery'; // Import jQuery
import AdminNavbar from './AdminNavbar';
import './AdminCustomer.css';

const AdminCustomer = () => {
  const [loginData, setLoginData] = useState([]);
  useEffect(() => {
    fetch('/api/v1/admin/users', {
      method: 'GET', // Specify the GET request method
    })
      .then((response) => response.json())
      .then((responseData) => {
        if (responseData.success) {
          
          setLoginData(responseData.users);
  
          // Initialize DataTables here after data is fetched
          $('#example').DataTable({
            responsive: true,
            paging: true,
            pageLength: 8,
          });
        } else {
          console.error('Invalid API response:', responseData);
        }
      })
      .catch((error) => {
        console.error('Error fetching login data:', error);
      });
  }, []); // Empty dependency array means it runs once on component mount

  // Conditional rendering when loginData is not yet available
  if (loginData === undefined) {
    return <div>Loading...</div>;
  }

console.log(`what is in this ${loginData}`)
  return (
    <div>
    <AdminNavbar />
    <div className="container customer-table">
    <table id="example" className="display" style={{ width: '100%' }}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>Role</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {loginData.length > 0 ? (
            loginData.map((data, index) => (
              <tr key={index}>
                <td>{data._id}</td>
                <td>{data.name}</td>
                <td>{data.role}</td>
                <td style={{ textDecoration: 'none' }}>
                  <a
                    href={`mailto:${data.email}`}
                    style={{
                      textDecoration: 'none',
                      color: 'orange',
                      fontSize: '16px',
                    }}
                    className="email-customer"
                  >
                    {data.email}
                  </a>
                </td>
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

export default AdminCustomer;

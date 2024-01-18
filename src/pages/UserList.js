// src/pages/UserList.js
import React, { useState, useEffect } from 'react';
import { Table, Button, Pagination, InputGroup, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEdit, faTrashAlt, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5); // Number of users to display per page
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch user data or use your API call logic here
    // Example: fetch('your_api_endpoint')
    //   .then(response => response.json())
    //   .then(data => setUsers(data));

    // For demonstration purposes, using dummy data
    const dummyUsers = [
      { id: 1, name: 'John Doe1', email: 'john@example.com', profilePic: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', mobile: '123-456-7890', userType: 'Admin', department: 'IT' },
      { id: 2, name: 'Jane Doe', email: 'jane@example.com', profilePic: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', mobile: '987-654-3210', userType: 'User', department: 'HR' },
      { id: 3, name: 'Jane Doe', email: 'jane@example.com', profilePic: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', mobile: '987-654-3210', userType: 'User', department: 'HR' },
      { id: 4, name: 'Jane Doe', email: 'jane@example.com', profilePic: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', mobile: '987-654-3210', userType: 'User', department: 'HR' },
      { id: 5, name: 'Jane Doe', email: 'jane@example.com', profilePic: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', mobile: '987-654-3210', userType: 'User', department: 'HR' },
      { id: 6, name: 'Jane Doe', email: 'jane@example.com', profilePic: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', mobile: '987-654-3210', userType: 'User', department: 'HR' },
      { id: 7, name: 'Jane Doe', email: 'jane@example.com', profilePic: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', mobile: '987-654-3210', userType: 'User', department: 'HR' },
      { id: 8, name: 'Jane Doe', email: 'jane@example.com', profilePic: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', mobile: '987-654-3210', userType: 'User', department: 'HR' },
      { id: 9, name: 'Jane Doe', email: 'jane@example.com', profilePic: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', mobile: '987-654-3210', userType: 'User', department: 'HR' },
      { id: 10, name: 'Jane Doe', email: 'jane@example.com', profilePic: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', mobile: '987-654-3210', userType: 'User', department: 'HR' },
      { id: 11, name: 'Jane Doe', email: 'jane@example.com', profilePic: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', mobile: '987-654-3210', userType: 'User', department: 'HR' },
      { id: 12, name: 'Jane Doe', email: 'jane@example.com', profilePic: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', mobile: '987-654-3210', userType: 'User', department: 'HR' },
      { id: 13, name: 'Jane Doe', email: 'jane@example.com', profilePic: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', mobile: '987-654-3210', userType: 'User', department: 'HR' },
      { id: 14, name: 'Jane Doe', email: 'jane@example.com', profilePic: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', mobile: '987-654-3210', userType: 'User', department: 'HR' },
      { id: 15, name: 'Jane Doe', email: 'jane@example.com', profilePic: 'https://t4.ftcdn.net/jpg/02/90/27/39/360_F_290273933_ukYZjDv8nqgpOBcBUo5CQyFcxAzYlZRW.jpg', mobile: '987-654-3210', userType: 'User', department: 'HR' }
      // Add more user data as needed
      // ...
    ];

    setUsers(dummyUsers);
  }, []);

  // Logic for pagination
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users
    .filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()))
    .slice(indexOfFirstUser, indexOfLastUser);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>User List</h2>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search by name..."
          aria-label="Search by name"
          aria-describedby="basic-addon2"
          onChange={e => setSearchTerm(e.target.value)}
        />
      </InputGroup>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Profile Pic</th>
            <th>Mobile</th>
            <th>User Type</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentUsers.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <img src={user.profilePic} alt={`Profile of ${user.name}`} style={{ width: '50px', borderRadius: '50%' }} />
              </td>
              <td>{user.mobile}</td>
              <td>{user.userType}</td>
              <td>{user.department}</td>
              <td>
                <Button variant="info" style={{ marginRight: '8px' }}>
                  <FontAwesomeIcon icon={faEye} />
                </Button>
                <Button variant="warning" style={{ marginRight: '8px' }}>
                  <FontAwesomeIcon icon={faEdit} />
                </Button>
                <Button variant="danger">
                  <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Pagination */}
      <Pagination className="justify-content-center">
        <Pagination.Prev onClick={() => setCurrentPage(prev => (prev > 1 ? prev - 1 : prev))}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </Pagination.Prev>
        {[...Array(Math.ceil(users.length / usersPerPage)).keys()].map(number => (
          <Pagination.Item key={number + 1} active={number + 1 === currentPage} onClick={() => paginate(number + 1)}>
            {number + 1}
          </Pagination.Item>
        ))}
        <Pagination.Next onClick={() => setCurrentPage(prev => (prev < Math.ceil(users.length / usersPerPage) ? prev + 1 : prev))}>
          <FontAwesomeIcon icon={faChevronRight} />
        </Pagination.Next>
      </Pagination>
    </div>
  );
};

export default UserList;

// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Header.css'; // Import your custom styles for the header


const Header = () => {
  return (
    <header className="header-container">
      <div className="logo">
        <Link to="/">Renter</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/users">User List</Link>
        <Link to="/add-user">Add User</Link>
        <Link to="/">Customers</Link>
        <Link to="/">Revenue</Link>
        <Link to="/">Payments</Link>
        <Link to="/">Rooms</Link>
      </nav>
    </header>
  );
};

export default Header;

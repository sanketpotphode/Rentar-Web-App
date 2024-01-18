// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import UserList from './pages/UserList';
import UserProfile from './pages/UserProfile';
import AddUser from './pages/AddUser';
import Header from './components/Common/Header';
import Footer from './components/Common/Footer';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:id" element={<UserProfile />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

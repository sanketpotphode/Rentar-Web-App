// src/pages/UserProfile.js
import React from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Viewing profile of user with ID: {id}</p>
      {/* Add your user profile page content here */}
    </div>
  );
};

export default UserProfile;
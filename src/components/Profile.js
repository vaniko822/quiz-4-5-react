import React from 'react';
import { useParams } from 'react-router-dom';

const Profile = () => {
  const { name } = useParams();

  return (
    <div className="main-container">
      <h1>Profile</h1>
      <p>Made By {name ? name : 'James'}</p>
    </div>
  );
}

export default Profile;

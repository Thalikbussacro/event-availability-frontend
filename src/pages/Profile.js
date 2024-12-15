// Arquivo Profile.js
import React from 'react';

function Profile() {
  const username = localStorage.getItem('username') || 'Guest';

  return (
    <div className="profile">
      <h2>User Profile</h2>
      <p>Welcome, {username}!</p>
    </div>
  );
}

export default Profile;
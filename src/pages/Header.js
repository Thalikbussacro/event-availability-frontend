import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

function Header() {
  const navigate = useNavigate();

  return (
    <header className="header">
      <h1>Event Availability</h1>
      <nav>
        <button onClick={() => navigate('/')}>Home</button>
        <button onClick={() => navigate('/events')}>Events</button>
        <button onClick={() => navigate('/register')}>Register</button>
        <button onClick={() => navigate('/login')}>Login</button>
        <button onClick={() => navigate('/profile')}>Profile</button>
        <button onClick={() => navigate('/events/create')}>Create Event</button>
      </nav>
    </header>
  );
}

export default Header;

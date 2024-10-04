// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'; // Import useAuth0 hook
import LoginButton from '../components/LoginButton'; // Import LoginButton component
import LogoutButton from '../components/LogoutButton'; // Import LogoutButton component

const HomePage = () => {
  const { isAuthenticated } = useAuth0(); // Get the authentication state

  return (
    <div>
      <h1>Home Page</h1>
      
      {/* Conditionally render the Login or Logout button */}
      {!isAuthenticated ? (
        <LoginButton />
      ) : (
        <LogoutButton />
      )}

      <nav>
        <ul>
          <li><Link to="/profile">Go to Profile Page</Link></li>
          <li><Link to="/dashboard">Go to Dashboard Page</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;
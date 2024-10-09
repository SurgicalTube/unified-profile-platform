// src/components/LogoutButton.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/AuthButton.css';  // Import CSS file for button styles

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button className="auth-glass-button" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </button>
  );
};

export default LogoutButton;
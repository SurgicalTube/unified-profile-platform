// src/components/LoginButton.js
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../styles/AuthButton.css';  // Import CSS file for button styles

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button className="auth-glass-button" onClick={() => loginWithRedirect()}>
      Log In
    </button>
  );
};

export default LoginButton;
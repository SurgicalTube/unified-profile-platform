// src/components/PrivateRoute.js
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import Toast components
import 'react-toastify/dist/ReactToastify.css'; // Import Toast CSS

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth0();  // Get the authentication state
  const [showNotification, setShowNotification] = useState(false);

  // Use useEffect to show the toast notification when the component renders
  useEffect(() => {
    if (!isAuthenticated && !showNotification) {
      toast.info("You need to log in to view this page!", {
        position: "top-center",
        autoClose: 3000,
      });
      setShowNotification(true);
    }
  }, [isAuthenticated, showNotification]);

  // Render the requested component if authenticated
  if (isAuthenticated) {
    return <Component {...rest} />;
  }

  // Stay on the current page and show the toast notification
  return (
    <>
      {/* ToastContainer will render the toast messages on the home page */}
      <ToastContainer />
      <Navigate to="/" /> {/* Redirect to home page but don't display any additional message */}
    </>
  );
};

export default PrivateRoute;
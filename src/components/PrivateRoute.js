// src/components/PrivateRoute.js
import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Navigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify'; // Import Toast components
import 'react-toastify/dist/ReactToastify.css'; // Import Toast CSS

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = useAuth0();  // Get the authentication state
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    if (!isAuthenticated && !showNotification) {
      toast.warning("You need to log in to view this page!", {
        position: "top-center",  // Use "top-center" for central positioning
        autoClose: 3000,         // Auto close after 3 seconds
        hideProgressBar: true,   // Hide the progress bar for a cleaner look
        closeOnClick: true,      // Close the toast when clicked
        pauseOnHover: true,      // Pause the toast on hover
        draggable: true,         // Allow the toast to be draggable
      });
      setShowNotification(true);  // Set notification to true to avoid repetition
    }
  }, [isAuthenticated, showNotification]);

  if (isAuthenticated) {
    return <Component {...rest} />;
  }

  // Stay on the current page and show the toast notification
  return <Navigate to="/" />;
};

export default PrivateRoute;
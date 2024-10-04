// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import DashboardPage from './pages/DashboardPage';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import Toast CSS

function App() {
  return (
    <div className="App">
      {/* Global ToastContainer to show toast notifications across the app */}
      <ToastContainer />
      
      <Routes>
        {/* Public Route */}
        <Route path="/" element={<HomePage />} />

        {/* Protected Routes */}
        <Route path="/profile" element={<PrivateRoute component={ProfilePage} />} />
        <Route path="/dashboard" element={<PrivateRoute component={DashboardPage} />} />
      </Routes>
    </div>
  );
}

export default App;
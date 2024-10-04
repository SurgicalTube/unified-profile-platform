// src/pages/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
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
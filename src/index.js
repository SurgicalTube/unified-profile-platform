// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import Auth0ProviderWithHistory from './auth/auth0-provider'; // Import Auth0 provider
import './index.css';

// Temporary console logs to check if the environment variables are loaded correctly
console.log("Auth0 Domain (from index.js):", process.env.REACT_APP_AUTH0_DOMAIN);
console.log("Auth0 Client ID (from index.js):", process.env.REACT_APP_AUTH0_CLIENT_ID);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <Router>
      <Auth0ProviderWithHistory>
        <App />
      </Auth0ProviderWithHistory>
    </Router>
  </Provider>
);
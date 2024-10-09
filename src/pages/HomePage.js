// src/pages/HomePage.js
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';
import '../styles/HomePage.css';
import '../styles/AuthButton.css'; // Include AuthButton styles
import gsap from 'gsap';

const HomePage = () => {
  const { isAuthenticated } = useAuth0();
  const navRef = useRef(null); // Ref for the navigation container
  const buttonRef = useRef(null); // Ref for the buttons

  useEffect(() => {
    // Animate the navigation container
    gsap.fromTo(
      navRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Animate the buttons inside the nav
    gsap.fromTo(
      buttonRef.current,
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out', stagger: 0.2 }
    );
  }, []);

  return (
    <div className="home-page-container">
      <div className="auth-button-container">
        {!isAuthenticated ? <LoginButton /> : <LogoutButton />}
      </div>
      
      <div className="glass-container">
        <h1 className="gsap-header">Welcome To Your Unified Profile</h1>
        
        {/* Navigation Links with animation */}
        <nav ref={navRef}>
          <div ref={buttonRef}>
            <Link to="/profile" className="glass-button">Go to Profile Page</Link>
            <Link to="/dashboard" className="glass-button">Go to Dashboard Page</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HomePage;
// src/pages/DashboardPage.js
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import gsap from 'gsap';
import '../styles/DashboardPage.css'; // Import the updated styles

const DashboardPage = () => {
  const profile = useSelector((state) => state.profile.profile);
  const containerRef = useRef(null); // Create a reference for the container element

  useEffect(() => {
    // GSAP animation for the dashboard container
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 50 }, // Start state: invisible and slightly moved down
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' } // End state: visible and at original position
      );
    }
  }, []);

  return (
    <div className="dashboard-page">
      <div className="dashboard-container" ref={containerRef}>
        <h1 className="dashboard-header">Dashboard Page</h1>
        
        <div className="dashboard-content">
          <p>Name: {profile.name}</p>
          <p>Email: {profile.email}</p>
          <p>Experience: {profile.experience}</p>
          <p>Education: {profile.education}</p>
          <p>Skills: {profile.skills}</p>

          {profile.resume && (
            <div className="resume-info">
              <h3>Resume Information</h3>
              <p>File Name: {profile.resume.name}</p>
              <p>File Type: {profile.resume.type}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
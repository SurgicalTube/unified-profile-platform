// src/pages/DashboardPage.js
import React from 'react';
import { useSelector } from 'react-redux';

const DashboardPage = () => {
  const profile = useSelector((state) => state.profile.profile);

  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>Name: {profile.name}</p>
      <p>Email: {profile.email}</p>
      <p>Experience: {profile.experience}</p>
      <p>Education: {profile.education}</p>
      {profile.resume && (
        <div>
          <h3>Resume Information</h3>
          <p>File Name: {profile.resume.name}</p>
          <p>File Type: {profile.resume.type}</p>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;;
// src/pages/ProfilePage.js

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setProfileData, setResume } from '../redux/slices/profileSlice';
import '../styles/ProfilePage.css';
import GsapAnimatedHeader from '../animations/GsapAnimatedHeader';
import ProfileForm from '../components/forms/ProfileForm';
import SaveButton from '../components/common/SaveButton';
import DocumentList from '../components/DocumentList';
import { Box, Tab, Tabs } from '@mui/material';
import axios from 'axios'; // Import axios for HTTP requests

const ProfilePage = () => {
  const profile = useSelector((state) => state.profile.profile);
  const [name, setName] = useState(profile.name || '');
  const [email, setEmail] = useState(profile.email || '');
  const [experience, setExperience] = useState(profile.experience || '');
  const [education, setEducation] = useState(profile.education || '');
  const [skills, setSkills] = useState(profile.skills || []);
  const [resumeFile, setResumeFile] = useState(profile.resume || null);
  const [documents, setDocuments] = useState(profile.documents || []);
  const [documentType, setDocumentType] = useState('');
  const [tabIndex, setTabIndex] = useState(0);
  const [uploadStatus, setUploadStatus] = useState(''); // State for upload status
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profileData = { name, email, experience, education, skills, documents };

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('profileData'));
    if (storedProfile) {
      dispatch(setProfileData(storedProfile));
      setName(storedProfile.name || '');
      setEmail(storedProfile.email || '');
      setExperience(storedProfile.experience || '');
      setEducation(storedProfile.education || '');
      setSkills(storedProfile.skills || []);
      setResumeFile(storedProfile.resume || null);
      setDocuments(storedProfile.documents || []);
    }
  }, [dispatch]);

  const handleBackClick = () => {
    navigate('/');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'experience':
        setExperience(value);
        break;
      case 'education':
        setEducation(value);
        break;
      case 'skills':
        setSkills(value.split(','));
        break;
      default:
        break;
    }
  };

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]); // Store the selected file
  };

  // Handle the file upload to the backend
  const handleFileUpload = async () => {
    if (!resumeFile) {
      alert('Please select a file first');
      return;
    }

    const formData = new FormData();
    formData.append('resume', resumeFile); // Append file to FormData

    try {
      const response = await axios.post('http://localhost:5001/upload-resume', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log(response.data);
      setUploadStatus('Upload successful!');
      // Dispatch and save the uploaded file details
      const newDocument = { name: resumeFile.name, type: 'resume', size: resumeFile.size };
      setDocuments((prevDocs) => [...prevDocs, newDocument]);

      const updatedProfile = { ...profile, resume: resumeFile, documents: [...documents, newDocument] };
      dispatch(setProfileData(updatedProfile));
      localStorage.setItem('profileData', JSON.stringify(updatedProfile));
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('Upload failed.');
    }
  };

  const handleDocumentUpload = (e) => {
    const file = e.target.files[0];
    if (file && documentType) {
      const newDocument = { name: file.name, type: documentType, size: file.size, content: file };
      setDocuments((prevDocs) => [...prevDocs, newDocument]);

      const updatedProfile = { ...profile, documents: [...documents, newDocument] };
      dispatch(setProfileData(updatedProfile));
      localStorage.setItem('profileData', JSON.stringify(updatedProfile));
    } else {
      alert('Please select a document type before uploading.');
    }
  };

  const handleDeleteDocument = (fileName) => {
    const updatedDocuments = documents.filter((doc) => doc.name !== fileName);
    setDocuments(updatedDocuments);

    const updatedProfile = { ...profile, documents: updatedDocuments };
    dispatch(setProfileData(updatedProfile));
    localStorage.setItem('profileData', JSON.stringify(updatedProfile));
  };

  const handleSave = () => {
    const profileData = { name, email, experience, education, skills, resume: resumeFile, documents };
    dispatch(setProfileData(profileData));
    localStorage.setItem('profileData', JSON.stringify(profileData));
    alert('Profile saved successfully!');
  };

  return (
    <Box className="profile-page-container">
      {/* Back Button */}
      <button className="back-button" onClick={handleBackClick}>
        ← Back to Home
      </button>

      {/* Centered GSAP Animated Header */}
      <GsapAnimatedHeader>Profile Page</GsapAnimatedHeader>

      {/* Tab Navigation */}
      <Box sx={{ borderBottom: 1, borderColor: 'divider', marginTop: '20px' }}>
        <Tabs value={tabIndex} onChange={(e, newValue) => setTabIndex(newValue)} centered>
          <Tab label="Information" />
          <Tab label="Documents" />
        </Tabs>
      </Box>

      {/* Tab Content */}
      <Box sx={{ padding: '20px', width: '100%' }}>
        {tabIndex === 0 && (
          <div className="glass-container">
            <ProfileForm
              profileData={profileData}
              handleChange={handleChange}
              handleFileChange={handleFileChange}
              resumeFile={resumeFile}
            />
            <SaveButton handleSave={handleSave} />
          </div>
        )}

        {tabIndex === 1 && (
          <div className="glass-container">
            <div className="upload-section">
              <select
                onChange={(e) => setDocumentType(e.target.value)}
                value={documentType}
                className="glass-dropdown"
              >
                <option value="">Select Document Type</option>
                <option value="resume">Resume</option>
                <option value="certification">Certification</option>
                <option value="portfolio">Portfolio</option>
              </select>

              <label className="document-upload-label">
                Upload Document
                <input type="file" hidden onChange={handleDocumentUpload} />
              </label>
            </div>

            <DocumentList documents={documents} onDelete={handleDeleteDocument} />
          </div>
        )}
      </Box>

      {/* Resume Upload Section */}
      <Box sx={{ padding: '20px', width: '100%' }}>
        <h2>Upload Resume for Parsing</h2>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload Resume</button>
        <p>{uploadStatus}</p> {/* Display upload status */}
      </Box>
    </Box>
  );
};

export default ProfilePage;
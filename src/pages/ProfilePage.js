// src/pages/ProfilePage.js

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileData, setResume } from '../redux/slices/profileSlice';
import '../styles/ProfilePage.css';
import GsapAnimatedHeader from '../animations/GsapAnimatedHeader';
import ProfileForm from '../components/forms/ProfileForm';
import SaveButton from '../components/common/SaveButton';
import DocumentList from '../components/DocumentList';
import { Box, Typography, Tab, Tabs, Button } from '@mui/material'; // Import necessary Material UI components

const ProfilePage = () => {
  const profile = useSelector((state) => state.profile.profile);
  const [name, setName] = useState(profile.name || '');
  const [email, setEmail] = useState(profile.email || '');
  const [experience, setExperience] = useState(profile.experience || '');
  const [education, setEducation] = useState(profile.education || '');
  const [skills, setSkills] = useState(profile.skills || []);
  const [resumeFile, setResumeFile] = useState(profile.resume || null);
  const [documents, setDocuments] = useState(profile.documents || []); // Initialize with profile.documents
  const [documentType, setDocumentType] = useState(''); // State for document type
  const [tabIndex, setTabIndex] = useState(0); // State to control active tab
  const dispatch = useDispatch();

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
    const file = e.target.files[0];
    if (file) {
      const newDocument = { name: file.name, type: 'resume', size: file.size, content: file };
      setResumeFile(file);
      setDocuments((prevDocs) => [...prevDocs, newDocument]);

      // Update profile and local storage immediately after change
      const updatedProfile = { ...profile, resume: file, documents: [...documents, newDocument] };
      dispatch(setProfileData(updatedProfile));
      localStorage.setItem('profileData', JSON.stringify(updatedProfile));
    }
  };

  const handleDocumentUpload = (e) => {
    const file = e.target.files[0];
    if (file && documentType) {
      const newDocument = { name: file.name, type: documentType, size: file.size, content: file };
      setDocuments((prevDocs) => [...prevDocs, newDocument]);

      // Update profile and save to local storage
      const updatedProfile = { ...profile, documents: [...documents, newDocument] };
      dispatch(setProfileData(updatedProfile));
      localStorage.setItem('profileData', JSON.stringify(updatedProfile));
    } else {
      alert("Please select a document type before uploading.");
    }
  };

  const handleDeleteDocument = (fileName) => {
    const updatedDocuments = documents.filter((doc) => doc.name !== fileName);
    setDocuments(updatedDocuments);

    // Update profile data and local storage on document delete
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
                {/* Updated Dropdown to use custom CSS classes */}
                <select
                  onChange={(e) => setDocumentType(e.target.value)}
                  value={documentType}
                  className="glass-dropdown"  // Updated class for styling
                >
                  <option value="">Select Document Type</option>
                  <option value="resume">Resume</option>
                  <option value="certification">Certification</option>
                  <option value="portfolio">Portfolio</option>
                </select>
          
                {/* Custom Styled Upload Button */}
                <label className="document-upload-label">
                  Upload Document
                  <input type="file" hidden onChange={handleDocumentUpload} />
                </label>
              </div>
              <DocumentList documents={documents} onDelete={handleDeleteDocument} />
            </div>
          )}
      </Box>
    </Box>
  );
};

export default ProfilePage;
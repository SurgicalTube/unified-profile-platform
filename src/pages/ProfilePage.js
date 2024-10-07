// src/pages/ProfilePage.js

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileData, setResume } from '../redux/slices/profileSlice';
import '../styles/ProfilePage.css';
import '../styles/glassStyles.css';
import GsapAnimatedHeader from '../animations/GsapAnimatedHeader'; // GSAP Header animation
import ProfileForm from '../components/forms/ProfileForm'; // Modular form component
import SaveButton from '../components/common/SaveButton'; // Modular save button
import { Box, Paper } from '@mui/material';

const ProfilePage = () => {
  const profile = useSelector((state) => state.profile.profile);
  const [name, setName] = useState(profile.name || '');
  const [email, setEmail] = useState(profile.email || '');
  const [experience, setExperience] = useState(profile.experience || '');
  const [education, setEducation] = useState(profile.education || '');
  const [skills, setSkills] = useState(profile.skills || []);
  const [resumeFile, setResumeFile] = useState(profile.resume || null);
  const dispatch = useDispatch();

  const profileData = { name, email, experience, education, skills };

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
      setResumeFile(file);
      dispatch(setResume(file));
    }
  };

  const handleSave = () => {
    const profileData = { name, email, experience, education, skills, resume: resumeFile };
    dispatch(setProfileData(profileData));
    localStorage.setItem('profileData', JSON.stringify(profileData));
    alert('Profile saved successfully!');
  };

  return (
    <Box className="profile-container glass-container" sx={{ padding: 3, position: 'relative' }}>
      {/* Use the GSAP AnimatedHeader for the Profile Page */}
      <GsapAnimatedHeader>Profile Page</GsapAnimatedHeader>

      <Paper className="glass-container" elevation={3} sx={{ padding: 3, maxWidth: 600, margin: 'auto' }}>
        <ProfileForm
          profileData={profileData}
          handleChange={handleChange}
          handleFileChange={handleFileChange}
          resumeFile={resumeFile}
        />
        <SaveButton handleSave={handleSave} />
      </Paper>
    </Box>
  );
};

export default ProfilePage;
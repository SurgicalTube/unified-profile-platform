// src/pages/ProfilePage.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProfileData, setResume } from '../redux/slices/profileSlice';  // Redux actions for profile state

const ProfilePage = () => {
  const profile = useSelector((state) => state.profile.profile);  // Get profile state from Redux
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [experience, setExperience] = useState(profile.experience);
  const [education, setEducation] = useState(profile.education);
  const [resumeFile, setResumeFile] = useState(profile.resume);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResumeFile(file);
      dispatch(setResume(file));  // Store the file in Redux state
    }
  };

  const handleSave = () => {
    dispatch(setProfileData({ name, email, experience, education, resume: resumeFile }));
  };

  return (
    <div>
      <h1>Profile Page</h1>
      <div>
        <label>Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Experience: </label>
        <textarea
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />
      </div>
      <div>
        <label>Education: </label>
        <textarea
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        />
      </div>
      <div>
        <label>Resume: </label>
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
        />
      </div>
      {resumeFile && <p>Uploaded file: {resumeFile.name}</p>}
      <button onClick={handleSave}>Save Profile</button>
    </div>
  );
};

export default ProfilePage;
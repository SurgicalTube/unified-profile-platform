// src/components/ProfileForm.js

import React, { useEffect, useRef } from 'react';
import { TextField, Typography, Button } from '@mui/material';
import { animateFormFields } from '../../animations/gsapAnimations'; // Import GSAP animation function


const ProfileForm = ({ profileData, handleChange, handleFileChange, resumeFile }) => {
  const formRef = useRef(null); // Ref for form elements

  useEffect(() => {
    if (formRef.current) {
      const formElements = formRef.current.querySelectorAll('input, textarea');
      animateFormFields(formElements);  // Animate form fields with GSAP
    }
  }, []);

  return (
    <form ref={formRef} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <TextField
        label="Name"
        variant="outlined"
        name="name"
        value={profileData.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Email"
        variant="outlined"
        name="email"
        value={profileData.email}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Experience"
        variant="outlined"
        multiline
        rows={4}
        name="experience"
        value={profileData.experience}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Education"
        variant="outlined"
        multiline
        rows={4}
        name="education"
        value={profileData.education}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Skills"
        variant="outlined"
        name="skills"
        value={profileData.skills.join(', ')}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
<Button
  className="glass-upload-button"
  component="label"
>
  Upload Resume
  <input
    type="file"
    accept=".pdf,.doc,.docx"
    hidden
    onChange={handleFileChange}
  />
</Button>
      {resumeFile && (
        <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
          Uploaded files will show in the Documents tab {resumeFile.name}
        </Typography>
      )}
    </form>
  );
};

export default ProfileForm;
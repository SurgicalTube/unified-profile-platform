// src/components/SaveButton.js

import React, { useRef } from 'react';
import { Button } from '@mui/material';
import { animateSaveButtonHover, resetSaveButtonHover } from '../../animations/gsapAnimations';  // Import GSAP animation functions

const SaveButton = ({ handleSave }) => {
  const buttonRef = useRef(null);  // Ref for the button element

  return (
    <Button
      variant="contained"
      color="secondary"  // This uses the Material UI theme color (purple by default)
      onMouseEnter={() => animateSaveButtonHover(buttonRef.current)}  // GSAP hover animation
      onMouseLeave={() => resetSaveButtonHover(buttonRef.current)}    // Reset animation on mouse leave
      onClick={handleSave}  // Pass the handleSave function as a prop
      ref={buttonRef}       // Assign ref to the button
      sx={{
        mt: 2,
        backgroundColor: '#8a2be2',    // Custom purple color
        color: '#fff',                 // White text color
        padding: '12px 24px',          // Adjust padding
        fontWeight: 'bold',            // Bold font weight
        borderRadius: '8px',           // Rounded corners
        ':hover': {
          backgroundColor: '#7a1be1',  // Slightly darker shade on hover
        },
        ':active': {
          backgroundColor: '#6a0bcf',  // Even darker on active click
        },
      }}
    >
      Save Profile
    </Button>
  );
};

export default SaveButton;
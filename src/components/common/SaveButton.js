// src/components/SaveButton.js

import React, { useRef } from 'react';
import { Button } from '@mui/material';
import { animateSaveButtonHover, resetSaveButtonHover } from '../../animations/gsapAnimations';  // Import GSAP animation functions

const SaveButton = ({ handleSave }) => {
  const buttonRef = useRef(null);  // Ref for the button element

  return (
    <Button
      variant="contained"
      color="secondary"
      onMouseEnter={() => animateSaveButtonHover(buttonRef.current)}  // GSAP hover animation
      onMouseLeave={() => resetSaveButtonHover(buttonRef.current)}    // Reset animation on mouse leave
      onClick={handleSave}  // Pass the handleSave function as a prop
      ref={buttonRef}       // Assign ref to the button
      sx={{ mt: 2 }}
    >
      Save Profile
    </Button>
  );
};

export default SaveButton;
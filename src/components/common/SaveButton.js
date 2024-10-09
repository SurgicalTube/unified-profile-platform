// src/components/SaveButton.js

import React, { useRef } from 'react';
import { animateSaveButtonHover, resetSaveButtonHover } from '../../animations/gsapAnimations';  // Import GSAP animation functions
import '../../styles/ProfilePage.css'; // Ensure it includes glassmorphism styles

const SaveButton = ({ handleSave }) => {
  const buttonRef = useRef(null);  // Ref for the button element

  return (
    <button
      className="glass-button" // Add glass-button class for styling
      onMouseEnter={() => animateSaveButtonHover(buttonRef.current)}  // GSAP hover animation
      onMouseLeave={() => resetSaveButtonHover(buttonRef.current)}    // Reset animation on mouse leave
      onClick={handleSave}  // Pass the handleSave function as a prop
      ref={buttonRef}       // Assign ref to the button
    >
      Save Profile
    </button>
  );
};

export default SaveButton;
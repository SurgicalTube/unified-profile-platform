// src/animations/gsapAnimations.js

import gsap from 'gsap';

// Function to animate the form fields when they appear
export const animateFormFields = (elements) => {
  gsap.fromTo(
    elements,
    { opacity: 0, x: -50 }, // Start: Invisible and moved left
    { opacity: 1, x: 0, stagger: 0.2, duration: 0.8, ease: 'power3.out' } // End: Visible and original position
  );
};

// Animate Save Button with a simple bounce effect on hover
export const animateSaveButtonHover = (element) => {
    gsap.to(element, { scale: 1.1, duration: 0.2, ease: 'bounce.out' });
  };
  
  export const resetSaveButtonHover = (element) => {
    gsap.to(element, { scale: 1, duration: 0.2, ease: 'bounce.out' });
  };
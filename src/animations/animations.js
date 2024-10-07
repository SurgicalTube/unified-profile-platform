// src/animations/animations.js

// A simple fade-in animation for elements
export const fadeIn = {
    initial: { opacity: 0, y: -20 },    // Starting state: invisible and slightly moved up
    animate: { opacity: 1, y: 0 },      // Final state: fully visible and original position
    transition: { duration: 0.5 },      // Animation duration of 0.5 seconds
  };
  
  // A slide-in animation from the left
  export const slideInFromLeft = {
    initial: { opacity: 0, x: -100 },   // Starting state: invisible and off-screen to the left
    animate: { opacity: 1, x: 0 },      // Final state: fully visible and original position
    transition: { duration: 0.7 },      // Animation duration of 0.7 seconds
  };
  
  // A bounce effect animation for elements
  export const bounce = {
    initial: { scale: 0.8 },            // Starting state: slightly scaled down
    animate: { scale: 1.1 },            // Intermediate state: scaled up
    transition: { duration: 0.4, yoyo: Infinity }, // Animate infinitely with a yoyo effect
  };
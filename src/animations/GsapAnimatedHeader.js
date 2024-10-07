// src/animations/GsapAnimatedHeader.js

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const GsapAnimatedHeader = ({ children, ...props }) => {
  const headerRef = useRef(null);  // Create a reference for the header element

  useEffect(() => {
    // Apply GSAP animation to the header when the component mounts
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },  // Starting state: transparent and moved up
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }  // Ending state: visible and original position
    );
  }, []);

  return (
    <h1 ref={headerRef} {...props}>
      {children}
    </h1>
  );
};

export default GsapAnimatedHeader;
// src/animations/GsapAnimatedHeader.js

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import '../styles/ProfilePageHeader.css'; // Import CSS for header styles

const GsapAnimatedHeader = ({ children, ...props }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="header-container"> {/* Add a wrapper for the header */}
      <h1 ref={headerRef} className="animated-header" {...props}>
        {children}
      </h1>
    </div>
  );
};

export default GsapAnimatedHeader;
// src/utils/localStorage.js

// Save data to localStorage
export const saveToLocalStorage = (key, value) => {
    try {
      const serializedValue = JSON.stringify(value);
      localStorage.setItem(key, serializedValue);
    } catch (e) {
      console.error("Error saving to localStorage", e);
    }
  };
  
  // Load data from localStorage
  export const loadFromLocalStorage = (key) => {
    try {
      const serializedValue = localStorage.getItem(key);
      if (serializedValue === null) return undefined;
      return JSON.parse(serializedValue);
    } catch (e) {
      console.error("Error loading from localStorage", e);
      return undefined;
    }
  };
  
  // Remove data from localStorage
  export const removeFromLocalStorage = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error("Error removing from localStorage", e);
    }
  };
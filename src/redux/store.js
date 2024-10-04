// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slices/profileSlice';
import { loadFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';

// Load initial state from localStorage if available
const preloadedState = loadFromLocalStorage('profile');

const store = configureStore({
  reducer: {
    profile: profileReducer,
  },
  preloadedState: preloadedState ? { profile: preloadedState } : undefined,
});

// Subscribe to store changes and save to localStorage
store.subscribe(() => {
  saveToLocalStorage('profile', store.getState().profile);
});

export default store;
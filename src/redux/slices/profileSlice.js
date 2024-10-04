// src/redux/slices/profileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    name: '',
    email: '',
    experience: '',
    education: '',
    resume: null,  // Define a field for resume storage
  },
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfileData(state, action) {
      state.profile = action.payload;
    },
    setResume(state, action) {  // Add the setResume reducer
      state.profile.resume = action.payload;
    },
  },
});

export const { setProfileData, setResume } = profileSlice.actions;  // Export setResume
export default profileSlice.reducer;
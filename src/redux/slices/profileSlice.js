// src/redux/slices/profileSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  profile: {
    name: '',
    email: '',
    experience: '',
    education: '',
    resume: null,
    documents: [],  // Define a field for resume storage
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
    setDocuments(state, action) {
      state.profile.documents = action.payload;
    },
  },
});

export const { setProfileData, setResume, setDocuments } = profileSlice.actions;  // Export setResume
export default profileSlice.reducer;
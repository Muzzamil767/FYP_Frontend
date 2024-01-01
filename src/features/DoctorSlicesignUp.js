// doctorSignupSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialDoctorSignupState = {
  doctor: null,
  doctorError: null,
  isDoctorLoggedIn: false,
};

const doctorSignupSlice = createSlice({
  name: 'doctorSignup',
  initialState: initialDoctorSignupState,
  reducers: {
    setDoctor: (state, action) => {
      state.doctor = action.payload;
      state.doctorError = null;
      state.isDoctorLoggedIn = true;
    },
    setDoctorError: (state, action) => {
      state.doctor = null;
      state.doctorError = action.payload;
      state.isDoctorLoggedIn = false;
    },
    clearDoctorError: (state) => {
      state.doctorError = null;
    },
    doctorLogout: (state) => {
      state.doctor = null;
      state.doctorError = null;
      state.isDoctorLoggedIn = false;
    },
  },
});

export const { setDoctor, setDoctorError, clearDoctorError, doctorLogout } = doctorSignupSlice.actions;

export default doctorSignupSlice.reducer;

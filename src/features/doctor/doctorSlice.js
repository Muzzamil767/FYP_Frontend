import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import doctorService from "./doctorServices";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
  successMessage: "",
  doctors: [],
};

// Get all doctors
export const getAllDoctors = createAsyncThunk(
  "get/doctors",
  async (_, thunkAPI) => {
    try {
      return await doctorService.getAllDoctors();
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      console.log(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const doctorSlice = createSlice({
  name: "doctorSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.errorMessage = "";
      state.isError = false;
      state.successMessage = "";
      state.isLoading = false;
      state.doctors = [];
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllDoctors.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllDoctors.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.doctors = action.payload.doctors;
      })
      .addCase(getAllDoctors.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
        state.successMessage = "";
        state.doctors = [];
      });
  },
});

export const { reset } = doctorSlice.actions;
export default doctorSlice.reducer;

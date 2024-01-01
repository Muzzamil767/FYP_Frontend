import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import prescriptionService from "./prescriptionServices";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
  successMessage: "",
  prescriptions: [],
};

export const uploadPrescripton = createAsyncThunk(
  "upload/prescription",
  async (data, thunkAPI) => {
    try {
      return await prescriptionService.uploadPrescription(data);
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

export const getAllPrescriptions = createAsyncThunk(
  "get/prescription",
  async (_, thunkAPI) => {
    try {
      return await prescriptionService.getAllPrescriptions();
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

const prescriptionSlice = createSlice({
  name: "prescriptionSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.errorMessage = "";
      state.isError = false;
      state.successMessage = "";
      state.isLoading = false;
      state.prescriptions = [];
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(uploadPrescripton.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(uploadPrescripton.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.successMessage = action.payload.message;
        state.prescriptions = [];
      })
      .addCase(uploadPrescripton.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.successMessage = "";
        state.errorMessage = action.payload;
        state.prescriptions = [];
      })
      .addCase(getAllPrescriptions.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllPrescriptions.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.errorMessage = "";
        state.successMessage = "Fetched all prescriptions";
        state.prescriptions = action.payload.prescriptions;
      })
      .addCase(getAllPrescriptions.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.successMessage = "";
        state.errorMessage = action.payload;
        state.prescriptions = [];
      });
  },
});

export const { reset } = prescriptionSlice.actions;
export default prescriptionSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import appointmentService from "./appointmentServices";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  successMessage: "",
  errorMessage: "",
  allAppointments: [],
  activeAppointments: [],
};

// Book Appointment
export const bookAppointment = createAsyncThunk(
  "appointment/book",
  async (data, thunkAPI) => {
    try {
      return await appointmentService.bookAppointment(data);
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

// Get all Appointments
export const getAllAppointments = createAsyncThunk(
  "appointment/all",
  async (_, thunkAPI) => {
    try {
      return await appointmentService.allAppointments();
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

// Accept Appointment
export const acceptAppointment = createAsyncThunk(
  "appointment/accept",
  async (id, thunkAPI) => {
    try {
      return await appointmentService.acceptAppointment(id);
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

// reject Appointment
export const rejectAppointment = createAsyncThunk(
  "appointment/reject",
  async (id, thunkAPI) => {
    try {
      return await appointmentService.rejectAppointment(id);
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

// Get active Appointments
export const acceptedAppointments = createAsyncThunk(
  "appointment/active",
  async (_, thunkAPI) => {
    try {
      return await appointmentService.activeAppointments();
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

// Mark as done
export const markAsDone = createAsyncThunk(
  "appointment/done",
  async (id, thunkAPI) => {
    try {
      return await appointmentService.markAsDone(id);
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

const appointmentSlice = createSlice({
  name: "appointmentSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.successMessage = "";
      state.errorMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(bookAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(bookAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.successMessage = action.payload.message;
        state.errorMessage = "";
      })
      .addCase(bookAppointment.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.successMessage = "";
        state.errorMessage = action.payload;
      })
      .addCase(getAllAppointments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllAppointments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.allAppointments = action.payload.appointments;
      })
      .addCase(getAllAppointments.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
        state.allAppointments = [];
      })
      .addCase(acceptAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(acceptAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.successMessage = action.payload.message;
        state.errorMessage = "";
      })
      .addCase(acceptAppointment.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.successMessage = "";
        state.errorMessage = action.payload;
      })
      .addCase(rejectAppointment.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(rejectAppointment.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.successMessage = action.payload.message;
        state.errorMessage = "";
      })
      .addCase(rejectAppointment.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.successMessage = "";
        state.errorMessage = action.payload;
      })
      .addCase(acceptedAppointments.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(acceptedAppointments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.activeAppointments = action.payload.appointments;
      })
      .addCase(acceptedAppointments.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.errorMessage = action.payload;
        state.activeAppointments = [];
      })
      .addCase(markAsDone.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(markAsDone.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.successMessage = action.payload.message;
        state.errorMessage = "";
      })
      .addCase(markAsDone.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.successMessage = "";
        state.errorMessage = action.payload;
      });
  },
});

export const { reset } = appointmentSlice.actions;
export default appointmentSlice.reducer;

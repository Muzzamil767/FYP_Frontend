import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";

const initialState = {
  user: JSON.parse(localStorage.getItem("doctor"))
    ? JSON.parse(localStorage.getItem("doctor"))
    : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  successMessage: "",
  errorMessage: "",
};

// register Doctor
export const registerDoctor = createAsyncThunk(
  "register/doctor",
  async (data, thunkAPI) => {
    try {
      return await authService.registerDoctor(data);
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

// logout user
export const logout = createAsyncThunk("logout/user", async (_, thunkAPI) => {
  try {
    return await authService.logoutUser();
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    console.log(message);
    return thunkAPI.rejectWithValue(message);
  }
});

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.errorMessage = "";
      state.successMessage = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMessage = "Registered successfully.";
        state.user = action.payload.user;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(registerDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.successMessage = "";
        state.user = null;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(logout.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMessage = action.payload.message;
        state.user = null;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(logout.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.successMessage = "";
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

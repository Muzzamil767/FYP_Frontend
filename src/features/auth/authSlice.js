import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./authServices";

const initialState = {
  user: JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
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

// Login user
export const loginUser = createAsyncThunk(
  "login/user",
  async (data, thunkAPI) => {
    try {
      return await authService.loginUser(data);
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

// Login doctor
export const loginDoctor = createAsyncThunk(
  "login/doctor",
  async (data, thunkAPI) => {
    try {
      return await authService.loginDoctor(data);
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

// register user
export const registerUser = createAsyncThunk(
  "register/user",
  async (data, thunkAPI) => {
    try {
      return await authService.registerUser(data);
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
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMessage = "Logged In successfully.";
        state.user = action.payload.user;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.successMessage = "";
        state.user = null;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMessage = "Registered successfully.";
        state.user = action.payload.user;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.successMessage = "";
        state.user = null;
        state.isError = true;
        state.errorMessage = action.payload;
      })
      .addCase(loginDoctor.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginDoctor.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.successMessage = "Logged In successfully.";
        state.user = action.payload.user;
        state.isError = false;
        state.errorMessage = "";
      })
      .addCase(loginDoctor.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.successMessage = "";
        state.user = null;
        state.isError = true;
        state.errorMessage = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;

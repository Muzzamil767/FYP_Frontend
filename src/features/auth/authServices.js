import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

// Register doctor
const registerDoctor = async (userData) => {
  const { data } = await axios.post(
    API_URL + "/api/v1/doctor/register",
    userData,
    {
      withCredentials: true,
    }
  );
  localStorage.setItem("user", JSON.stringify(data.user));
  return data;
};

// Logout User
const logoutUser = async () => {
  const { data } = await axios.get(API_URL + "/api/v1/logout");
  localStorage.removeItem("user");
  return data;
};

// Login user
const loginUser = async (userData) => {
  const { data } = await axios.post(API_URL + "/api/v1/login", userData, {
    withCredentials: true,
  });
  localStorage.setItem("user", JSON.stringify(data.user));
  return data;
};

// Login doctor
const loginDoctor = async (userData) => {
  const { data } = await axios.post(
    API_URL + "/api/v1/doctor/login",
    userData,
    {
      withCredentials: true,
    }
  );
  localStorage.setItem("user", JSON.stringify(data.user));
  return data;
};

// Register user
const registerUser = async (userData) => {
  const { data } = await axios.post(API_URL + "/api/v1/register", userData, {
    withCredentials: true,
  });
  localStorage.setItem("user", JSON.stringify(data.user));
  return data;
};

const authService = {
  registerDoctor,
  logoutUser,
  loginUser,
  loginDoctor,
  registerUser,
};
export default authService;

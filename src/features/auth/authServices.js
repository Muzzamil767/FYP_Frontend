import axios from "axios";

// Register doctor
const registerDoctor = async (userData) => {
  const { data } = await axios.post("/api/v1/doctor/register", userData);
  localStorage.setItem("user", JSON.stringify(data.user));
  return data;
};

// Logout User
const logoutUser = async () => {
  const { data } = await axios.get("/api/v1/logout");
  localStorage.removeItem("user");
  return data;
};

// Login user
const loginUser = async (userData) => {
  const { data } = await axios.post("/api/v1/login", userData);
  localStorage.setItem("user", JSON.stringify(data.user));
  return data;
};

// Login doctor
const loginDoctor = async (userData) => {
  const { data } = await axios.post("/api/v1/doctor/login", userData);
  localStorage.setItem("user", JSON.stringify(data.user));
  return data;
};

// Register user
const registerUser = async (userData) => {
  const { data } = await axios.post("/api/v1/register", userData);
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

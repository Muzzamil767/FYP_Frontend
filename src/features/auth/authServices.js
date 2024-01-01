import axios from "axios";

const registerDoctor = async (userData) => {
  const { data } = await axios.post("/api/v1/doctor/register", userData);
  localStorage.setItem("doctor", JSON.stringify(data.user));
  return data;
};

const logoutUser = async () => {
  const { data } = await axios.get("/api/v1/logout");
  localStorage.removeItem("doctor");
  return data;
};

const authService = {
  registerDoctor,
  logoutUser,
};
export default authService;

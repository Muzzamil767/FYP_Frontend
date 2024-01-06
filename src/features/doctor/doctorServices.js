import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
// Get all doctors (public)
const getAllDoctors = async () => {
  const { data } = await axios.get(API_URL + "/api/v1/doctor/all");
  console.log(data);
  return data;
};

const doctorService = {
  getAllDoctors,
};

export default doctorService;

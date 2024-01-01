import axios from "axios";

// Get all doctors (public)
const getAllDoctors = async () => {
  const { data } = await axios.get("/api/v1/doctor/all");
  return data;
};

const doctorService = {
  getAllDoctors,
};

export default doctorService;

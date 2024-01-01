import axios from "axios";

// Logged In user (upload prescription)
const uploadPrescription = async (file) => {
  const { data } = await axios.post("/api/v1/prescription/submit", file);
  return data;
};

// Get all prescriptions (Admin)
const getAllPrescriptions = async () => {
  const { data } = await axios.get("/api/v1/prescription/all");
  return data;
};

const prescriptionService = {
  uploadPrescription,
  getAllPrescriptions,
};

export default prescriptionService;

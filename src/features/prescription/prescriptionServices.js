import axios from "axios";

// Logged In user (upload prescription)
const uploadPrescription = async (file) => {
  const { data } = await axios.post("/api/v1/prescription/submit", file);
  return data;
};

const prescriptionService = {
  uploadPrescription,
};

export default prescriptionService;

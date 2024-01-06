import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

// Logged In user (upload prescription)
const uploadPrescription = async (file) => {
  const { data } = await axios.post(
    API_URL + "/api/v1/prescription/submit",
    file,
    {
      withCredentials: true,
    }
  );
  return data;
};

// Get all prescriptions (Admin)
const getAllPrescriptions = async () => {
  const { data } = await axios.get(API_URL + "/api/v1/prescription/all", {
    withCredentials: true,
  });
  return data;
};

const prescriptionService = {
  uploadPrescription,
  getAllPrescriptions,
};

export default prescriptionService;

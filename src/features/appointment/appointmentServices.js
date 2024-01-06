import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;

console.log(API_URL);

// Book Appointment
const bookAppointment = async (info) => {
  const { data } = await axios.post(API_URL + "/api/v1/appointment/new", info, {
    withCredentials: true,
  });
  return data;
};

// Get all appointments
const allAppointments = async () => {
  const { data } = await axios.get(API_URL + "/api/v1/appointment/all", {
    withCredentials: true,
  });
  return data;
};

// Accept Appointment
const acceptAppointment = async (id) => {
  const { data } = await axios.put(
    API_URL + `/api/v1/appointment/${id}`,
    null,
    {
      withCredentials: true,
    }
  );
  return data;
};

// reject Appointment
const rejectAppointment = async (id) => {
  const { data } = await axios.delete(API_URL + `/api/v1/appointment/${id}`, {
    withCredentials: true,
  });
  return data;
};

// Get all appointments
const activeAppointments = async () => {
  const { data } = await axios.get(API_URL + "/api/v1/appointment/active/all", {
    withCredentials: true,
  });
  return data;
};

// Mark as done
const markAsDone = async (id) => {
  const { data } = await axios.delete(
    API_URL + `/api/v1/appointment/done/${id}`,
    {
      withCredentials: true,
    }
  );
  return data;
};

const appointmentService = {
  bookAppointment,
  allAppointments,
  acceptAppointment,
  rejectAppointment,
  activeAppointments,
  markAsDone,
};

export default appointmentService;

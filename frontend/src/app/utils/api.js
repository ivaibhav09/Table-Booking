import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: https://table-booking-api.vercel.app/ || 'http://localhost:8000/api/v1/table/',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Centralized error handling
const handleError = (error) => {
  const message = error?.response?.data?.message || error.message || 'Something went wrong.';
  console.error('API Error:', message);
  throw new Error(message);
};

// Function to create a new booking
export const createBooking = async (formData) => {
  try {
    const response = await api.post('create', formData);
    return response.data;
  } catch (error) {
    if (error.response?.data?.message?.includes('already booked')) {
      throw new Error('The selected time slot is already booked. Please choose another time.');
    }
    handleError(error);
  }
};

// Function to fetch all bookings
export const getBookings = async () => {
  try {
    const response = await api.get('bookings');
    return response.data;
  } catch (error) {
    handleError(error);
  }
};

// Function to delete a booking by ID
export const deleteBooking = async (id) => {
  try {
    const response = await api.delete(`delete/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting booking with ID ${id}:`, error.message);
    throw new Error(error.response?.data?.message || `Failed to delete booking with ID ${id}`);
  }
};

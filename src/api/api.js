import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_URL || "https://event-availability-backend.onrender.com";

const api = axios.create({
  baseURL: API_URL,
});

export const registerUser = (data) => api.post('/auth/register', data);
export const loginUser = (data) => api.post('/auth/login', data);
export const getProfile = (token) => api.get('/auth/profile', {
  headers: { Authorization: `Bearer ${token}` }
});

export const createEvent = (data, token) => api.post('/events', data, {
  headers: { Authorization: `Bearer ${token}` }
});

export const listEvents = (token) => api.get('/events', {
  headers: { Authorization: `Bearer ${token}` }
});

export const getEventById = (id, token) => api.get(`/events/${id}`, {
  headers: { Authorization: `Bearer ${token}` }
});

export default api;

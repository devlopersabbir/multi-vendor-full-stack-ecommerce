import axios from "axios";

export const baseURL = "http://localhost:5000";

export const axiosPublic = axios.create({
  baseURL,
  withCredentials: true,
});

export const axiosPrivete = axios.create({
  baseURL,
  withCredentials: true,
});

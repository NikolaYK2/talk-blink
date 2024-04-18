import axios from "axios";

export const BASE_URL = '://localhost:5000/';
export const instance = axios.create({
  baseURL: `http${BASE_URL}`,
})
import axios from "axios";

const BASE_URL = "https://e-commerce-app-1234.herokuapp.com/api/";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
});

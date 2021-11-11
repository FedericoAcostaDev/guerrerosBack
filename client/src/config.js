import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://bloghiv.herokuapp.com/api/",
});

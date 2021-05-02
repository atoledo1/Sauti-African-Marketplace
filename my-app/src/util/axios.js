import axios from "axios";
import {BASE_URL} from "./api";

export const axiosAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: BASE_URL,
  });
};
export default axiosAuth;

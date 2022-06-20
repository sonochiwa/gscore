import axios from "axios";

const axiosInstance = (token: any) => axios.create({
  baseURL: "https://gscore-back.herokuapp.com/api/",
  headers: { "Authorization": "Bearer " + token }
});

export default axiosInstance;
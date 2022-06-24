import axios from "axios";
import store from "../store";

const axiosInstance = axios.create({
  baseURL: 'https://gscore-back.herokuapp.com/api'
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const authToken = await store.getState().root.token;
    if (authToken) {
      config.headers = { "Authorization": `Bearer  ${authToken}` }
    }
    return config;
  },
  error => Promise.reject(error)
);

export default axiosInstance;
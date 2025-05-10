import axios from "axios";

const axiosServices = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});


axiosServices.interceptors.request.use(
  async (config) => {
    const accessToken = localStorage.getItem("serviceToken");
    if (accessToken) {
      config.headers["x-access-token"] = `${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosServices.interceptors.response.use(
  (response) => response,
  (error) => {
    // empty :(
    return Promise.reject(
      (error.response && error.response.data) || "Wrong Services"
    );
  }
);

export default axiosServices;
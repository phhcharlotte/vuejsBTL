import axios from "axios";

const service = axios.create({
  baseURL: "https://staging.cippo.info/api/default/api/login",
  timeout: 0,
  headers: {
    "Content-Type": "application/json",
  },
});

service.interceptors.request.use(async (config) => config);

service.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    throw error;
  }
);

export default service;

import axios from "axios";

let accessToken =  typeof window !== "undefined" ? localStorage.getItem("access_token") : null;


const $api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

$api.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

$api.interceptors.response.use(
  (res) => res,
  async (error) => {
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const res: { data: { accessToken: string } } = await axios.post(
          process.env.NEXT_PUBLIC_API_URL + "/refresh",
          {},
          {
            withCredentials: true,
          }
        );

        accessToken = res.data.accessToken;
        localStorage.setItem("access_token", accessToken);

        originalRequest.headers.Authorization = `Bearer ${accessToken}`;

        return $api(originalRequest);
      } catch (err) {
        console.error("Refresh failed:", err);
        localStorage.removeItem("access_token");
        // window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default $api;

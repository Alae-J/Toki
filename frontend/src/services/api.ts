import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL
});

// Inject token before each request
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Handle unauthorized responses (invalid/expired token)
api.interceptors.response.use(
    response => response,
    error => {
        if (error.response?.status === 401 || error.response?.status === 403) {
            console.log(error.response?.status)
            localStorage.removeItem("token");
            localStorage.removeItem("userId");
            alert("Your session has expired. Please log in again.");
        }

        return Promise.reject(error);
    }
);

export default api;

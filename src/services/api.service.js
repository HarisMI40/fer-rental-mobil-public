import axios from "axios";

const apiService = {

    init() {
        axios.defaults.baseURL = import.meta.env.VITE_API;
    },
    setHeader(token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    },

    removeHeader() {
        axios.defaults.headers.common = {};
    }
}

export default apiService;
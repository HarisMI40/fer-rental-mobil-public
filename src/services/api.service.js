import axios from "axios";

const apiService = {

    init() {
        axios.defaults.baseURL = import.meta.env.VITE_API;

        const token = localStorage.getItem("token");
        if(token){
            axios.defaults.headers.common['access_token'] = token;
        }
    },
    setHeader(token) {
        axios.defaults.headers.common['access_token'] = token;
    },

    removeHeader() {
        axios.defaults.headers.common = {};
    }
}

export default apiService;
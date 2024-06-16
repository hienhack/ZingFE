import axios from "axios";
const baseURL = import.meta.env.VITE_API_URL;

const authRequest = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        common: {
            "Content-Type": 'application/x-www-form-urlencoded'
        }
    }
});

authRequest.interceptors.response.use(
    response => response,
    error => {
        if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
            alert('Server không phản hồi, vui lòng thử lại sau!');
        }
        return Promise.reject(error);
    }
)

const request = axios.create({
    baseURL: baseURL,
    timeout: 10000,
    headers: {
        common: {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    }
})

const guest = axios.create({
    baseURL: baseURL,
    timeout: 5000,
})

export { authRequest, request, guest }
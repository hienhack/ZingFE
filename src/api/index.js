import axios from "axios";

const authRequest = axios.create({
    baseURL: 'http://nxc-hcmus.me:8081/api',
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
    baseURL: 'http://nxc-hcmus.me:8081/api',
    timeout: 10000,
    headers: {
        common: {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    }
})

const guest = axios.create({
    baseURL: 'http://nxc-hcmus.me:8081/api',
    timeout: 10000,
})

export { authRequest, request, guest }
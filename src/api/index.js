import axios from "axios";

export const authRequest = axios.create({
    baseURL: 'http://nxc-hcmus.me:8081/api',
    timeout: 10000,
    headers: {
        common: {
            "Content-Type": 'application/x-www-form-urlencoded'
        }
    }
});

export const request = axios.create({
    baseURL: 'http://nxc-hcmus.me:8081/api',
    timeout: 10000,
    headers: {
        common: {
            Authorization: "Bearer " + localStorage.getItem('token')
        }
    }
})

export const guest = axios.create({
    baseURL: 'http://nxc-hcmus.me:8081/api',
    timeout: 10000,
})
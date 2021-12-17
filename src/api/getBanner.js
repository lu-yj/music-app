import axios from 'axios';

export function getBanner(type = 2) {
    return axios.get(`http://localhost:3000/banner?type=${type}`);
}
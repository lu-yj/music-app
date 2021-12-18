import axios from 'axios';

let baseUrl = 'http://localhost:3000'

export function getBanner(type=2) {
    return axios.get(`${baseUrl}/banner?type=${type}`);
}

export function getSongSheetList(limit=20) {
    return axios.get(`${baseUrl}/personalized?${limit}`);
}

export function getSongSheet(id) {
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`);
}
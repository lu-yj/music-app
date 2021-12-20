import axios from 'axios';

// http://localhost:3000
let baseUrl = 'https://netease-cloud-music-api-mocha-three.vercel.app'

export function getBanner(type=2) {
    return axios.get(`${baseUrl}/banner?type=${type}`);
}

export function getSongSheetList(limit=20) {
    return axios.get(`${baseUrl}/personalized?${limit}`);
}

export function getSongSheet(id) {
    return axios.get(`${baseUrl}/playlist/detail?id=${id}`);
}

export function getLyric(id) {
    return axios.get(`${baseUrl}/lyric?id=${id}`);
}

export function searchMusic(keyword) {
    return axios.get(`${baseUrl}/search?keywords=${keyword}`);
}

export function phoneLogin(phone, password) {
    return axios.get(`${baseUrl}/login/cellphone?phone=${phone}&password=${password}`);
}

export function getUserInfo(uid) {
    return axios.get(`${baseUrl}/user/detail?uid=${uid}`);
}
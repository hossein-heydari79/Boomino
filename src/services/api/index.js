import axios from "axios";

const instance = axios.create({
    baseURL: 'https://vodapi.boomino.ir'
});

export default instance;
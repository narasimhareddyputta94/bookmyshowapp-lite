import axios from 'axios';

const API_URL = 'http://localhost:8085/theaters/';

const getTheaters = () => {
    return axios.get(API_URL).then(response => response.data);
};

const getShowTimes = (theaterId) => {
    return axios.get(`${API_URL}${theaterId}/showtimes`).then(response => response.data);
};

export default {
    getTheaters,
    getShowTimes
};

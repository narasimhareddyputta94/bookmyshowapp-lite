import axios from 'axios';

const API_URL = 'http://localhost:8085/movies/';

const getMovies = () => {
    return axios.get(API_URL).then(response => response.data);
};

const getMovieById = (id) => {
    return axios.get(API_URL + id).then(response => response.data);
};

export default {
    getMovies,
    getMovieById
};

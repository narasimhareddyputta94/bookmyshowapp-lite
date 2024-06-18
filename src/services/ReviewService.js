import axios from 'axios';

const API_URL = 'http://localhost:8085/reviews/';

const getReviews = (movieId) => {
    return axios.get(`${API_URL}${movieId}`).then(response => response.data);
};

const addReview = (movieId, content) => {
    return axios.post(API_URL, {
        movieId,
        content
    });
};

export default {
    getReviews,
    addReview
};

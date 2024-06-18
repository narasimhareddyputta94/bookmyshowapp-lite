import axios from 'axios';

const API_URL = 'http://localhost:8085/bookings/';

const getBookings = () => {
    return axios.get(API_URL).then(response => response.data);
};

const bookSeats = (showTimeId, seats) => {
    return axios.post(`${API_URL}book`, {
        showTimeId,
        seats
    });
};

export default {
    getBookings,
    bookSeats
};

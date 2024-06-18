import axios from 'axios';

const API_URL = 'http://localhost:8085/auth/';

const register = (username, password, email) => {
    return axios.post(API_URL + 'register', {
        username,
        password,
        email
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + 'login', {
            username,
            password
        })
        .then(response => {
            if (response.data.token) {
                localStorage.setItem('user', JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem('user');
};

export default {
    register,
    login,
    logout
};

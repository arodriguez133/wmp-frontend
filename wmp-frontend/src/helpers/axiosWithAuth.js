import axios from 'axios';

export const axiosWithAuth = () => {
    
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://water-my-plants-build.herokuapp.com/users/login',
        headers: {
            authorization: token
        }
    });
    
};


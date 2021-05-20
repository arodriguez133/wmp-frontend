import axios from 'axios';

export const axiosWithAuth = () => {
    
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://rickandmortyapi.com/api',
        headers: {
            authorization: token
        }
    });
    
};


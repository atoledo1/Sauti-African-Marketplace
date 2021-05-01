import axios from 'axios';

const  axiosAuth =() => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://marketbw-api.herokuapp.com/api',
        headers: {
            Authorization: token,
        },
    });
};

export default  axiosAuth
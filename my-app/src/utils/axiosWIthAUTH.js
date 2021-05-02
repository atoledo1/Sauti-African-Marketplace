import axios from 'axios'
import {BASE_URL} from './URLs'

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            Authorization: token
        },
        baseURL: BASE_URL
    })
}
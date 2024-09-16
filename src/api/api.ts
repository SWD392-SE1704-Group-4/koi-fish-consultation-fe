import axios from 'axios'

import { setupInterceptors } from './interceptors';

export const api = setupInterceptors(
    axios.create({
        baseURL: 'http://localhost:8080/api/v1'
    })
)

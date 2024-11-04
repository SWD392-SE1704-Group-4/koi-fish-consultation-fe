import axios from 'axios'

import { setupInterceptors } from './interceptors';

export const api = setupInterceptors(
    axios.create({
        baseURL: "http://localhost:8080/api/v1"
    })
)

export const apiGateway = setupInterceptors(
    axios.create({
        baseURL: process.env.REACT_APP_AWS_GATEWAY_URL
    })
)
// process.env.REACT_APP_AWS_API_PRODUCTION_URL
// http://localhost:8080/api/v1
import {
    AxiosDefaults,
    AxiosError,
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    InternalAxiosRequestConfig
} from 'axios'
import {GetAccessToken, GetRefreshToken, RemoveRefreshToken, SetRefreshToken} from "../utils/tokens";
import {api} from "./api";

let isRefreshing = false;
let failedRequestQueue: [] = [];

function setAuthorizationHeader(params: any) {
    const {request, token} = params;
    request.headers['Authorization'] = token;
}

function handleRefreshToken(refreshToken: string | undefined) {
    isRefreshing = true;

    api.post(
        '/auth/refresh',
        {refreshToken},
        {
            headers: {
                Authorization: GetRefreshToken(),
            }
        }
    )
        .then((response: any) => {
            const { refreshToken } = response.data;
            SetRefreshToken(refreshToken);
            setAuthorizationHeader({request: api.defaults, refreshToken});

            failedRequestQueue.forEach((request: any) => request.onSuccess(refreshToken));
            failedRequestQueue = [];
        })
        .catch((error: any) => {
            failedRequestQueue.forEach((request: any) => request.onFailure(error));
            failedRequestQueue = [];
            RemoveRefreshToken();
        })
        .finally(() => {
            isRefreshing = false;
        });
}

function onRequest(config: any) {
    const token = GetAccessToken();
    if (token) {
        setAuthorizationHeader({request: config, token});
    }
    return config;
}

function onRequestError(error: any) {
    return Promise.reject(error);
}

function onResponse(response: any) {
    return response;
}

function onResponseError(error: any) {
    if (error?.response?.status === 401) {
        if (error.response?.data?.code === 'token.expired') {
            const originalConfig = error.config;
            const refreshToken = GetRefreshToken();

            if (!isRefreshing) {
                handleRefreshToken(refreshToken);
            }

            // return new Promise((resolve, reject) => {
            //     failedRequestQueue.push({
            //         onSuccess: (token) => {
            //             setAuthorizationHeader({request: originalConfig, token});
            //             resolve(api(originalConfig));
            //         },
            //         onFailure: (error) => {
            //             reject(error);
            //         }
            //     });
            // });
        } else {
            RemoveRefreshToken();
            // window.location.href = '/login';
        }
    }

    return Promise.reject(error);
}

export function setupInterceptors(axiosInstance: any) {
    axiosInstance.interceptors.request.use(onRequest, onRequestError);
    axiosInstance.interceptors.response.use(onResponse, onResponseError);
    return axiosInstance;
}
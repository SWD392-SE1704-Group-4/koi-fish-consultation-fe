import { api } from "../../api/api"
import { GetComicRequestBody, ComicResponse, BaseResponse } from "AppModels";
import { endpoint } from "../../constants/endpoint";
import { AxiosResponse } from "axios";

export function getAppUserRole(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_APP_USER_ROLE, requestBody);
}

export function getAppUserById(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_APP_USER_BY_USER_ID, requestBody);
} 

export function getAppUserGroup(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_APP_USER_GROUP, requestBody);
}
export function getAppUserPersonalFengshui(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_APP_USER_GROUP, requestBody);
}
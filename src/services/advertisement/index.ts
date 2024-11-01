import { api } from "../../api/api"
import { GetComicRequestBody, ComicResponse, BaseResponse } from "AppModels";
import { endpoint } from "../../constants/endpoint";
import { AxiosResponse } from "axios";

export function CreateAdvertisement(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.CREATE_ADVERTISEMENT, requestBody);
}

export function GetListAdvertisement(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_ADVERTISEMENT, requestBody);
}

export function GetListAdvertisementByCreator(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_ADVERTISEMENT_BY_CREATOR, requestBody);
}

export function GetAdvertisementById(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_ADVERTISEMENT_BY_ID, requestBody);
}

export function GetListAdvertisementType(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_ADVERTISEMENT_TYPE, requestBody);
}

export function GetListAdvertisementByStaff(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_ADVERTISEMENT_BY_STAFF, requestBody);
}

export function ApproveAdvertisement(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.APPROVE_ADVERTISEMENT, requestBody);
}

export function DenyAdvertisement(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.DENY_ADVERTISEMENT, requestBody);
}

export function GetListAdvertisementPackage(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_ADVERTISEMENT_PACKAGE, requestBody);
}
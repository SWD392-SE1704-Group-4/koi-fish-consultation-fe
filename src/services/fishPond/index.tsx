import { AxiosResponse } from "axios";
import { api } from "../../api/api";
import { endpoint } from "../../constants/endpoint";
import { BaseResponse } from "AppModels";

export function CreateFishPond(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.CREATE_FISH_POND, requestBody);
}

export function GetFishPond(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_FISH_POND, requestBody);
}

export function GetMyFishPond(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_FISH_POND_BY_CREATOR, requestBody);
}

export function GetFengshuiDirection(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_FENGSHUI_DIRECTION, requestBody);
}
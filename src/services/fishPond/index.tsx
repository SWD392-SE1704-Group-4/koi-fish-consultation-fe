import { AxiosResponse } from "axios";
import { api } from "../../api/api";
import { endpoint } from "../../constants/endpoint";
import { BaseResponse } from "AppModels";

export function GetFishPond(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_FISH_POND, requestBody);
}

export function GetFengshuiDirection(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_FENGSHUI_DIRECTION, requestBody);
}
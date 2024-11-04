import { AxiosResponse } from "axios";
import { api } from "../../api/api";
import { endpoint } from "../../constants/endpoint";
import { BaseResponse } from "AppModels";

export function GetCalcutationFromAI(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_AI_CONSULTATION, requestBody);
}

export function GetBasicCalcutation(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_BASIC_CONSULTATION, requestBody);
}

export function SaveConsultationResult(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.SAVE_CONSULTATION, requestBody);
}

export function GetConsultationResult(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_USER_CONSULTATION, requestBody);
}

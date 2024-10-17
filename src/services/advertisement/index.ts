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
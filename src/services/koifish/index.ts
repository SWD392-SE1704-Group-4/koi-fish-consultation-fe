import { api } from "../../api/api";
import { GetComicRequestBody, ComicResponse, BaseResponse } from "AppModels";
import { endpoint } from "../../constants/endpoint";
import { AxiosResponse } from "axios";

export function CreateKoiFish(
  requestBody: any
): AxiosResponse<BaseResponse<any>, any> {
  return api.post(endpoint.CREATE_KOI_FISH, requestBody);
}

export function GetKoiFish(
  requestBody: any
): AxiosResponse<BaseResponse<any>, any> {
  return api.post(endpoint.GET_KOI_FISH, requestBody);
}

export function UpdateKoiFish(
  requestBody: any
): AxiosResponse<BaseResponse<any>, any> {
  return api.post(endpoint.UPDATE_KOI_FISH, requestBody);
}


export function DeleteKoiFish(
  requestBody: any
): AxiosResponse<BaseResponse<any>, any> {
  return api.post(endpoint.DELETE_KOI_FISH, requestBody);
}

export function GetHeavenEarth(
  requestBody: any
): AxiosResponse<BaseResponse<any>, any> {
  return api.post(endpoint.GET_HEAVEN_EARTH, requestBody);
}

export function GetKoiFishByElementName(
  requestBody: any
): AxiosResponse<BaseResponse<any>, any> {
  return api.post(endpoint.GET_KOI_FISH_BY_ELEMENT_NAME, requestBody);
}


import { api } from "../../api/api"
import { GetComicRequestBody, ComicResponse, BaseResponse } from "AppModels";
import { endpoint } from "../../constants/endpoint";
import { AxiosResponse } from "axios";

export function GetKoiFish(requestBody: any) : AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_KOI_FISH, requestBody);
}

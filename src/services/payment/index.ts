import { AxiosResponse } from "axios";
import { api } from "../../api/api";
import { endpoint } from "../../constants/endpoint";
import { BaseResponse } from "AppModels";

export function CreatePayment(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.CREATE_PAYMENT, requestBody);
}

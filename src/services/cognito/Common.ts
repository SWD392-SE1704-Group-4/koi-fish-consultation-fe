import {
    CognitoIdentityProviderClient,
    GetUserCommand,
    GetGroupCommand,
    AdminListGroupsForUserCommand
} from '@aws-sdk/client-cognito-identity-provider';
import CryptoJS from "crypto-js";
import { api, apiGateway } from '../../api/api';
import { AxiosResponse } from 'axios';
import { endpoint } from '../../constants/endpoint';
import { BaseResponse } from 'AppModels';

const region = process.env.REACT_APP_AWS_REGION;


export async function getUserInfo(accessToken) {
    const client = new CognitoIdentityProviderClient({ region });
    try {
        const command = new GetUserCommand({ AccessToken: accessToken });
        const response = await client.send(command);
        return response;
    } catch (error) {
        console.error("Error fetching user info:", error);
    }
}


export function getAppUserGroup(requestBody: any): AxiosResponse<BaseResponse<any>, any> {
    return api.post(endpoint.GET_APP_USER_GROUP, requestBody);
}


export async function updateUser(userData: any) {
    try {
        const event = {
            body: {
                userName: userData.userName,
                fileName: userData.fileName,
                fileType: userData.fileType,
                userPicture: userData.userPicture,
                otherUserData: userData.otherUserData,
            }
        };
        const response = await apiGateway.post('/user/update-cognito-user', event, {
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': process.env.REACT_APP_AWS_GATEWAY_XAPIKEY
            },
        });
        if (response.status === 200) {
            console.log('User updated successfully:', response.data);
            return response.data;
        } else {
            console.error('Error updating user:', response.data);
            throw new Error('Failed to update user');
        }
    } catch (error) {
        console.error('Error in updateUser:', error);
        throw error;
    }
}
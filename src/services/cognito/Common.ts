import {
    CognitoIdentityProviderClient,
    GetUserCommand
} from '@aws-sdk/client-cognito-identity-provider';
import CryptoJS from "crypto-js";

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

export async function getUserGroup(accessToken) {
    const client = new CognitoIdentityProviderClient({ region });
    try {
        const command = new GetUserCommand({ AccessToken: accessToken }); 
    } catch (error) {

    }
}
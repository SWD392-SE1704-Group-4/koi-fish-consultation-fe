import {
    CognitoIdentityProviderClient,
    InitiateAuthCommand,
    InitiateAuthCommandOutput,
    RespondToAuthChallengeCommand,
    RespondToAuthChallengeCommandOutput,
    MessageActionType,
    SignUpCommandInput,
    SignUpCommandOutput,
    SignUpCommand,
    GetUserCommand
} from '@aws-sdk/client-cognito-identity-provider';
import CryptoJS from "crypto-js";
import { RemoveAccessToken } from '../../utils/tokens';

const userPoolId = process.env.REACT_APP_COGNITO_USER_POOL
const clientSecret = process.env.REACT_APP_COGNITO_CLIENT_SECRET;
const clientId = process.env.REACT_APP_COGNITO_CLIENT_ID;
const region = process.env.REACT_APP_AWS_REGION;

function calculateSecretHash(
    clientSecret: string,
    username: string,
    clientId: string
): string {
    const message = username + clientId;
    const hmac = CryptoJS.HmacSHA256(message, clientSecret);
    return CryptoJS.enc.Base64.stringify(hmac);
}

export async function getToken(Username, Password, newPassword?: string): Promise<any | undefined> {
    const client = new CognitoIdentityProviderClient({ region });
    try {
        const secretHash = calculateSecretHash(clientSecret, Username, clientId);
        const initiateAuthCommand = new InitiateAuthCommand({
            AuthFlow: 'USER_PASSWORD_AUTH',
            AuthParameters: {
                USERNAME: Username,
                PASSWORD: Password,
                SECRET_HASH: secretHash,
            },
            ClientId: clientId,
        });
        const authResult: InitiateAuthCommandOutput = await client.send(initiateAuthCommand);
        if (authResult.ChallengeName === "NEW_PASSWORD_REQUIRED") {
            if (!newPassword) {
                throw new Error("A new password is required, but no new password was provided.");
            }
            const respondToAuthChallengeCommand = new RespondToAuthChallengeCommand({
                ChallengeName: "NEW_PASSWORD_REQUIRED",
                ClientId: clientId,
                ChallengeResponses: {
                    USERNAME: Username,
                    NEW_PASSWORD: newPassword,
                    SECRET_HASH: secretHash,
                },
                Session: authResult.Session,
            });
            const challengeResponse: RespondToAuthChallengeCommandOutput = await client.send(respondToAuthChallengeCommand);
            if (challengeResponse.AuthenticationResult?.AccessToken) {
                return challengeResponse.AuthenticationResult.AccessToken;
            } else {
                throw new Error("Failed to retrieve bearer token after setting new password.");
            }
        }
        if (authResult.AuthenticationResult?.AccessToken) {
            return authResult.AuthenticationResult;
        } else {
            throw new Error('Failed to retrieve bearer token.');
        }
    } catch (error) {
        throw error;
    }
}

export const signUpUser = async (username: string, password: string, email: string, phoneNumber: string, firstName: string, lastName: string) => {
    const client = new CognitoIdentityProviderClient({ region });
    const secretHash = calculateSecretHash(clientSecret, username, clientId);
    const signUpParams: SignUpCommandInput = {
        ClientId: clientId,
        Username: username,
        Password: password,
        SecretHash: secretHash,
        UserAttributes: [
            { Name: 'email', Value: email },
            { Name: 'phone_number', Value: phoneNumber },
            { Name: 'given_name', Value: firstName },
            { Name: 'family_name', Value: lastName }
        ]
    };
    try {
        const command = new SignUpCommand(signUpParams);
        const response = await client.send(command);
        return response;
    } catch (error) {
        console.log(error);
        throw error; 
    }
};

export async function getUserInfo(accessToken) {
    const client = new CognitoIdentityProviderClient({ region });
    try {
        const command = new GetUserCommand({ AccessToken: accessToken });
        const response = await client.send(command);
        return response;
    } catch (error) {
        RemoveAccessToken();
        console.error("Error fetching user info:", error);
    }
}

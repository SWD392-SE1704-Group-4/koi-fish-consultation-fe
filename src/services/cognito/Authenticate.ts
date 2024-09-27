import {
    CognitoIdentityProviderClient,
    InitiateAuthCommand,
    InitiateAuthCommandOutput,
    RespondToAuthChallengeCommand,
    RespondToAuthChallengeCommandOutput,
    MessageActionType,
    GetUserCommand
} from '@aws-sdk/client-cognito-identity-provider';
import CryptoJS from "crypto-js";

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

// async function createCognitoUser ({ userPoolId, email, givenName, familyName, name }) {
//     const fullName = getFullName({ name, givenName, familyName })
//     const createdCognitoUser = await cognitoIdpClient.send(new AdminCreateUserCommand({
//       UserPoolId: userPoolId,
//       // Don't send an email with the temporary password
//       MessageAction: MessageActionType.SUPPRESS,
//       Username: email,
//       UserAttributes: [
//         {
//           Name: 'name',
//           Value: fullName,
//         },
//         {
//           Name: 'email',
//           Value: email,
//         },
//         {
//           Name: 'email_verified',
//           Value: 'true',
//         },
//       ],
//     }))
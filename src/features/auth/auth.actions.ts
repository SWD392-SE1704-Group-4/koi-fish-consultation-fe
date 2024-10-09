import { TAppThunk } from "AppModels";
import { getToken, getUserInfo, signUpUser } from "../../services/cognito/Authenticate";
import { updateUser } from "../../services/cognito/Common";
import { SetAccessToken, SetRefreshToken, GetAccessToken } from "../../utils/tokens";
import { convertUserAttributes } from "../../utils/convertUserAttributes";
import { setUserInfoAction, setIsLoggedInAction, setAuthErrorAction, setSignUpStatusAction, setUpdateUserStatusAction } from ".";

export const requestAuth = ({ username, password }: { username: string, password: string }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await getToken(username, password, '');
            if(response){
                SetAccessToken(response.AccessToken);
                SetRefreshToken(response.RefreshToken);
                dispatch(setIsLoggedInAction(true));
            };
            const userInfo = await getUserInfo(GetAccessToken());
            if(!!userInfo?.UserAttributes){
                dispatch(setUserInfoAction(convertUserAttributes(userInfo.UserAttributes)));
            }
        } catch (error) {
            dispatch(setAuthErrorAction(error.message));
        }
    };
};

export const requestUserInfo = (): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const userInfo = await getUserInfo(GetAccessToken());
            if(!!userInfo?.UserAttributes){
                dispatch(setUserInfoAction(convertUserAttributes(userInfo.UserAttributes)));
                dispatch(setIsLoggedInAction(true));
            }
        } catch (error) {
            dispatch(setAuthErrorAction(error.message));
        }
    };
};

export const requestSignUp = ({ email, password, firstName, lastName, phoneNumber }: { email: string, password: string, firstName: string, lastName: string, phoneNumber: string }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const username = email.split('@')[0];
            const signUpResponse = await signUpUser(username, password, email, phoneNumber, firstName, lastName);
            if (signUpResponse) {
                dispatch(setSignUpStatusAction("SignUp successfully, waiting for confirmation"))
            }
        } catch (error) {
            dispatch(setAuthErrorAction(error.message));
        }
    };
};

export const requestUpdateUser = ({ userName, fileName, fileType, userPicture, otherUserData }) : TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await updateUser({
                userName,
                fileName,
                fileType,
                userPicture,
                otherUserData,
            });
            if (response && response.statusCode === 200) {
                dispatch(setUpdateUserStatusAction("User updated successfully"))
                await dispatch(requestUserInfo());
            }
        } catch (error) {
            dispatch(setAuthErrorAction(error.message)); 
        }
    };
};
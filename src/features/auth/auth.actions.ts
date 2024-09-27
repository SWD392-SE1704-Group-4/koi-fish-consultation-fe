import { TAppThunk } from "AppModels";
import { getToken, getUserInfo } from "../../services/cognito/Authenticate";
import { SetAccessToken, SetRefreshToken, GetAccessToken } from "../../utils/tokens";
import { convertUserAttributes } from "../../utils/convertUserAttributes";
import { setUserInfoAction, setIsLoggedInAction } from ".";

export const requestAuth = ({ username, password }: { username: string, password: string }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await getToken(username, password, '');
            //Save token in cookies
            if(response){
                SetAccessToken(response.AccessToken);
                SetRefreshToken(response.RefreshToken);
                dispatch(setIsLoggedInAction(true));
            };
            //Get user info
            const userInfo = await getUserInfo(GetAccessToken());
            //Save user info to redux store
            if(!!userInfo?.UserAttributes){
                dispatch(setUserInfoAction(convertUserAttributes(userInfo.UserAttributes)));
            }
            
        } catch (error) {
            dispatch({ type: 'AUTH_FAILURE', error });
        }
    };
};

export const requestUserInfo = (): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const userInfo = await getUserInfo(GetAccessToken());
            //Save user info to redux store
            if(!!userInfo?.UserAttributes){
                dispatch(setUserInfoAction(convertUserAttributes(userInfo.UserAttributes)));
                dispatch(setIsLoggedInAction(true));
            }
            
        } catch (error) {
            dispatch({ type: 'AUTH_FAILURE', error });
        }
    };
};
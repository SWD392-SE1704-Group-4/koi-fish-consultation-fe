import { TAppThunk } from "AppModels";
import { getToken, getUserInfo, signUpUser } from "../../services/cognito/Authenticate";
import { updateUser } from "../../services/cognito/Common";
import { SetAccessToken, SetRefreshToken, GetAccessToken } from "../../utils/tokens";
import { convertUserAttributes } from "../../utils/convertUserAttributes";
import { setUserInfoAction, setIsLoggedInAction, setAuthErrorAction, setSignUpStatusAction, setUpdateUserStatusAction, setIsLoadedAction, setUserRoleAction, setUserPackageInfoAction, setPersonalFengshuiAction } from ".";
import { getAppUserById, getAppUserRole } from "../../services/appUser";
import { setUserPackageInfo } from "./auth.reducers";
import { GetConsultationResult } from "../../services/calculation";

export const requestAuth = ({ email, password }: { email: string, password: string }): TAppThunk => {
    return async (dispatch: any) => {
        dispatch(setIsLoadedAction(false))
        try {
            const response = await getToken(email, password, '');
            if (response) {
                SetAccessToken(response.AccessToken);
                SetRefreshToken(response.RefreshToken);
                dispatch(setIsLoggedInAction(true));
            };
            const userInfo = await getUserInfo(GetAccessToken());
            if (!!userInfo?.UserAttributes) {
                const userAttributes = convertUserAttributes(userInfo.UserAttributes);
                dispatch(setUserInfoAction(userAttributes));
                const userRole = await getAppUserRole({ appUserId: userAttributes.sub });
                if (userRole) {
                    dispatch(setUserRoleAction(userRole.data.payload));
                }
            }
        } catch (error) {
            dispatch(setAuthErrorAction(error.message));
        } finally {
            dispatch(setIsLoadedAction(true))
        }

    };
};

export const requestUserInfo = (): TAppThunk => {
    return async (dispatch: any) => {
        dispatch(setIsLoadedAction(false))
        try {
            const userInfo = await getUserInfo(GetAccessToken());
            if (!!userInfo?.UserAttributes) {
                const userAttributes = convertUserAttributes(userInfo.UserAttributes);
                const userRole = await getAppUserRole({ appUserId: userAttributes.sub });
                const appUserResponse = await getAppUserById({ appUserId: userAttributes.sub });
                const resultResponse = await GetConsultationResult({ appUserId: userAttributes.sub });
                if (userRole && userAttributes) {
                    const appUser = appUserResponse?.data?.payload;
                    dispatch(setUserInfoAction(userAttributes));
                    dispatch(setIsLoggedInAction(true));
                    dispatch(setUserRoleAction(userRole.data.payload))
                    dispatch(setUserPackageInfoAction({
                        currentPackage: appUser?.currentPackage,
                        remainingAds: appUser?.remainingAds,
                        packageExpiryDate: appUser?.packageExpiryDate,
                    }))
                    if (resultResponse.data.payload) {
                        const pFengshui = resultResponse?.data?.payload;
                        dispatch(setPersonalFengshuiAction({
                            earthlyBranch: pFengshui?.earthlyBranch,
                            element: pFengshui?.element,
                            fishRecommendation: pFengshui?.fishRecommendation,
                            heavenlyStem: pFengshui?.heavenlyStem,
                            tankDirection: pFengshui?.tankDirection,
                        }))
                    }
                }
            }
        } catch (error) {
            dispatch(setAuthErrorAction(error.message));
        }
        dispatch(setIsLoadedAction(true))
    };
};

export const requestSignUp = ({ email, password, firstName, lastName, phoneNumber }: { email: string, password: string, firstName: string, lastName: string, phoneNumber: string }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const username = email.split('@')[0];
            const signUpResponse = await signUpUser(username, password, email, phoneNumber, firstName, lastName);
            if (signUpResponse) {
                dispatch(setSignUpStatusAction("Sign up successfully, check your email to verify account"))
            }
        } catch (error) {
            console.log(error)
            dispatch(setAuthErrorAction(error.message));
        }
    };
};

export const requestUpdateUser = ({ userName, fileName, fileType, userPicture, otherUserData }): TAppThunk => {
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

export const requestGetUserAdsPackage = ({ request }: { request: any }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await getAppUserById(request);
            if (response?.data?.payload) {
                const appUser = response?.data?.payload;
                dispatch(setUserPackageInfoAction({
                    currentPackage: appUser?.currentPackage,
                    remainingAds: appUser?.remainingAds,
                    packageExpiryDate: appUser?.packageExpiryDate,
                }))
            }
        } catch (error) {
            console.log(error)
            dispatch(setAuthErrorAction(error.message));
        }
    };
};

export const requestGetUserPersonalFengshui = ({ request }: { request: any }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await GetConsultationResult(request);
            if (response?.data?.payload) {
                const pFengshui = response?.data?.payload;
                dispatch(setPersonalFengshuiAction({
                    earthlyBranch: pFengshui?.earthlyBranch,
                    element: pFengshui?.element,
                    fishRecommendation: pFengshui?.fishRecommendation,
                    heavenlyStem: pFengshui?.heavenlyStem,
                    tankDirection: pFengshui?.tankDirection,
                }))
            }
        } catch (error) {
            dispatch(setAuthErrorAction(error.message));
        }
    };
};
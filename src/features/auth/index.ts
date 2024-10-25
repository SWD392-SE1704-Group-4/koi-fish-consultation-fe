import { createSlice } from "@reduxjs/toolkit";
import authInitialState from "./auth.initialState";
import {
    setUserInfo, 
    setAuthInfo,
    setIsLoggedIn,
    setAuthError,
    setSignUpStatus,
    setUpdateUserStatus,
    setIsLoaded,
    setUserGroups
} from "./auth.reducers";


const auth = createSlice({
    name: "auth",
    initialState: authInitialState,
    reducers: {
        setUserInfoAction: setUserInfo,
        setAuthInfoAction: setAuthInfo,
        setIsLoggedInAction: setIsLoggedIn,
        setAuthErrorAction: setAuthError,
        setSignUpStatusAction: setSignUpStatus,
        setUpdateUserStatusAction: setUpdateUserStatus,
        setIsLoadedAction: setIsLoaded,
        setUserGroupsAction: setUserGroups,
    }
})

export const {
    setUserInfoAction,
    setAuthInfoAction,
    setIsLoggedInAction,
    setAuthErrorAction,
    setSignUpStatusAction,
    setUpdateUserStatusAction,
    setIsLoadedAction,
    setUserGroupsAction
} = auth.actions;

export default auth.reducer;
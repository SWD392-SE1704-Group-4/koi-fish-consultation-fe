import { createSlice } from "@reduxjs/toolkit";
import authInitialState from "./auth.initialState";
import {
    setUserInfo, 
    setAuthInfo,
    setIsLoggedIn,
    setAuthError,
    setSignUpStatus
} from "./auth.reducers";

const auth = createSlice({
    name: "auth",
    initialState: authInitialState,
    reducers: {
        setUserInfoAction: setUserInfo,
        setAuthInfoAction: setAuthInfo,
        setIsLoggedInAction: setIsLoggedIn,
        setAuthErrorAction: setAuthError,
        setSignUpStatusAction: setSignUpStatus
    }
})

export const {
    setUserInfoAction,
    setAuthInfoAction,
    setIsLoggedInAction,
    setAuthErrorAction,
    setSignUpStatusAction
} = auth.actions;

export default auth.reducer;
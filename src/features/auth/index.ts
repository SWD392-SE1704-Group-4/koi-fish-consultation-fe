import { createSlice } from "@reduxjs/toolkit";
import authInitialState from "./auth.initialState";
import {
    setUserInfo, 
    setAuthInfo,
    setIsLoggedIn
} from "./auth.reducers";

const comic = createSlice({
    name: "auth",
    initialState: authInitialState,
    reducers: {
        setUserInfoAction: setUserInfo,
        setAuthInfoAction: setAuthInfo,
        setIsLoggedInAction: setIsLoggedIn
    }
})

export const {
    setUserInfoAction,
    setAuthInfoAction,
    setIsLoggedInAction
} = comic.actions;

export default comic.reducer;
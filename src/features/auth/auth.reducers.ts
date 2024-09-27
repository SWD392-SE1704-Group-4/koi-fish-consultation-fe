import { PayloadAction } from "@reduxjs/toolkit";
import { TAuthState } from "AppModels";

export const setAuthInfo = (state: TAuthState, action: PayloadAction<any>) => {
    state.auth = action.payload;
}
export const setIsLoggedIn = (state: TAuthState, action: PayloadAction<any>) => {
    state.auth.isLoggedIn = action.payload;
}
export const setUserInfo = (state: TAuthState, action: PayloadAction<any>) => {
    state.user = action.payload;
}
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
export const setAuthError = (state: TAuthState, action: PayloadAction<any>) => {
    state.auth.error = action.payload;
}
export const setSignUpStatus = (state: TAuthState, action: PayloadAction<any>) => {
    state.auth.signUpStatus = action.payload;
}
export const setUpdateUserStatus = (state: TAuthState, action: PayloadAction<any>) => {
    state.auth.updateUserStatus = action.payload;
}
export const setUserRole = (state: TAuthState, action: PayloadAction<any>) => {
    state.user.role = action.payload;
}
export const setIsLoaded = (state: TAuthState, action: PayloadAction<any>) => {
    state.auth.isLoaded = action.payload;
}

export const setUserPackageInfo = (state: TAuthState, action: PayloadAction<any>) => {
    state.userPackageInfo = action.payload;
}

export const setPersonalFengshui = (state: TAuthState, action: PayloadAction<any>) => {
    state.personalFengshui = action.payload;
}
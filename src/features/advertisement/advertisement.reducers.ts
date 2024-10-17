import { PayloadAction } from "@reduxjs/toolkit";
import { TAdvertisementState } from "AppModels";


export const setAdvertisementError = (state: TAdvertisementState, action: PayloadAction<any>) => {
    state.error = action.payload;
}

export const setAdvertisementStatus = (state: TAdvertisementState, action: PayloadAction<any>) => {
    state.status = action.payload;
}

export const setAdvertisementList = (state: TAdvertisementState, action: PayloadAction<any>) => {
    state.advertisementList = action.payload;
}
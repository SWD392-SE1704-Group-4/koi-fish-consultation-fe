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

export const setAdvertisementTypeList = (state: TAdvertisementState, action: PayloadAction<any>) => {
    state.advertisementTypeList = action.payload;
}

export const setAdvertisementType = (state: TAdvertisementState, action: PayloadAction<any>) => {
    state.advertisementType = action.payload;
}

export const setAdvertisement = (state: TAdvertisementState, action: PayloadAction<any>) => {
    state.advertisement = action.payload;
}

export const setAdvertisementDetailModalOpen = (state: TAdvertisementState, action: PayloadAction<any>) => {
    state.advertisementDetailModalOpen = action.payload;
}

export const setIsPosting = (state: TAdvertisementState, action: PayloadAction<any>) => {
    state.isPosting = action.payload;
}

export const setPostingSuccessModalOpen = (state: TAdvertisementState, action: PayloadAction<any>) => {
    state.postingSuccessModalOpen = action.payload;
}

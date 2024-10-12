import { PayloadAction } from "@reduxjs/toolkit";
import { Comic, Category, TFengshuiState } from "AppModels";

export const setfengshuiElementList = (state: TFengshuiState, action: PayloadAction<any>) => {
    state.fengshuiElementList = action.payload;
}

export const setKoiFishList = (state: TFengshuiState, action: PayloadAction<any>) => {
    state.koifishList = action.payload;
}

export const setIsFetching = (state: TFengshuiState, action: PayloadAction<any>) => {
    state.isFetching = action.payload;
}
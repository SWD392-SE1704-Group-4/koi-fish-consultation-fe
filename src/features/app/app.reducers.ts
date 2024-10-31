import { PayloadAction } from "@reduxjs/toolkit";
import { Comic, Category, TFengshuiState, TAppState } from "AppModels";

export const setCurrentDashboardTab = (state: TAppState, action: PayloadAction<any>) => {
    state.currentDashboardTab = action.payload;
}
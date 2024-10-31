import { PayloadAction } from "@reduxjs/toolkit";
import { TAppState } from "AppModels";

export const setCurrentDashboardTab = (state: TAppState, action: PayloadAction<any>) => {
    state.currentDashboardTab = action.payload;
}


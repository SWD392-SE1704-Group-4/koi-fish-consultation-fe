import { createSlice } from "@reduxjs/toolkit";
import {appInitialState} from "./app.initialState";
import {
    setCurrentDashboardTab
} from "./app.reducers";

const app = createSlice({
    name: "app",
    initialState: appInitialState,
    reducers: {
        setCurrentDashboardTabAction: setCurrentDashboardTab   
    }
})

export const {
    setCurrentDashboardTabAction
} = app.actions;

export default app.reducer;
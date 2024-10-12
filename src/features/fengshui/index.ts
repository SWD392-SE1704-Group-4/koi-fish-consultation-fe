import { createSlice } from "@reduxjs/toolkit";
import fengshuiInitialState from "./fengshui.initialState";
import {
    setKoiFishList,
    setfengshuiElementList,
    setIsFetching
} from "./fengshui.reducers";

const fengshui = createSlice({
    name: "fengshui",
    initialState: fengshuiInitialState,
    reducers: {
        setKoiFishListAction: setKoiFishList,
        setFengshuiElementListAction: setfengshuiElementList,
        setIsFetchingAction: setIsFetching
    }
})

export const {
    setKoiFishListAction,
    setFengshuiElementListAction,
    setIsFetchingAction
} = fengshui.actions;

export default fengshui.reducer;
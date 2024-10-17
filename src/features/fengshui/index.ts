import { createSlice } from "@reduxjs/toolkit";
import fengshuiInitialState from "./fengshui.initialState";
import {
    setKoiFishList,
    setfengshuiElementList,
    setIsFetching,
    setKoiFish,
    setUpdateKoiFishModalOpen,
    setFengshuiError,
    setStatus,
    setCreateKoiFishModalOpen,
    setDeleteKoiFishModalOpen
} from "./fengshui.reducers";
import { selectDeleteKoiFishModalOpen } from "./fengshui.selectors";

const fengshui = createSlice({
    name: "fengshui",
    initialState: fengshuiInitialState,
    reducers: {
        setKoiFishListAction: setKoiFishList,
        setFengshuiElementListAction: setfengshuiElementList,
        setIsFetchingAction: setIsFetching,
        setKoiFishAction: setKoiFish,
        setFengshuiErrorAction: setFengshuiError,
        setFengshuiStatusAction: setStatus,
        setCreateKoiFishModalOpenAction: setCreateKoiFishModalOpen,
        setUpdateKoiFishModalOpenAction: setUpdateKoiFishModalOpen, 
        setDeleteKoiFishModalOpenAction: setDeleteKoiFishModalOpen
    }
})

export const {
    setKoiFishListAction,
    setFengshuiElementListAction,
    setIsFetchingAction,
    setKoiFishAction,
    setUpdateKoiFishModalOpenAction,
    setFengshuiErrorAction,
    setFengshuiStatusAction,
    setCreateKoiFishModalOpenAction,
    setDeleteKoiFishModalOpenAction
} = fengshui.actions;

export default fengshui.reducer;
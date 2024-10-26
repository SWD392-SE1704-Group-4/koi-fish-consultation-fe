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
    setDeleteKoiFishModalOpen,
    setFishPondList,
    setFishPond,
    setFishPondDetailModalOpen,
    setCreateKoiPondModalOpen,
    setFengshuiDirectionList
} from "./fengshui.reducers";

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
        setDeleteKoiFishModalOpenAction: setDeleteKoiFishModalOpen,
        setFishPondListAction: setFishPondList,
        setFishPondAction: setFishPond,
        setFishPondDetailModalOpenAction: setFishPondDetailModalOpen,
        setCreateKoiPondModalOpenAction: setCreateKoiPondModalOpen,
        setFengshuiDirectionListAction: setFengshuiDirectionList
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
    setDeleteKoiFishModalOpenAction,
    setFishPondListAction,
    setFishPondAction,
    setFishPondDetailModalOpenAction,
    setCreateKoiPondModalOpenAction,
    setFengshuiDirectionListAction
} = fengshui.actions;

export default fengshui.reducer;
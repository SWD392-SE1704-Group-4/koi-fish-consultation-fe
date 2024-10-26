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
  setHeavenEarth,
  setFishPondList,
    setFishPond,
    setFishPondDetailModalOpen

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
  setHeaveEarthAction: setHeavenEarth,
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
   setHeaveEarthAction,

} = fengshui.actions;

export default fengshui.reducer;

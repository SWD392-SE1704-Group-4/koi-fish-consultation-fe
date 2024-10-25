import { createSlice } from "@reduxjs/toolkit";
import advertisementInitialState from "./advertisement.initialState";
import { setAdvertisement, setAdvertisementDetailModalOpen, setAdvertisementError, setAdvertisementList, setAdvertisementStatus, setAdvertisementType, setAdvertisementTypeList } from "./advertisement.reducers";

const advertisement = createSlice({
    name: "advertisement",
    initialState: advertisementInitialState,
    reducers: {
        setAdvertisementErrorAction: setAdvertisementError,
        setAdvertisementStatusAction: setAdvertisementStatus,
        setAdvertisementListAction: setAdvertisementList,
        setAdvertisementTypeListAction: setAdvertisementTypeList,
        setAdvertisementTypeAction: setAdvertisementType,
        setAdvertisementAction: setAdvertisement,
        setAdvertisementDetailModalOpenAction: setAdvertisementDetailModalOpen,
    }
})

export const {
    setAdvertisementErrorAction,
    setAdvertisementStatusAction,
    setAdvertisementListAction,
    setAdvertisementTypeListAction,
    setAdvertisementTypeAction,
    setAdvertisementAction,
    setAdvertisementDetailModalOpenAction
} = advertisement.actions;

export default advertisement.reducer;
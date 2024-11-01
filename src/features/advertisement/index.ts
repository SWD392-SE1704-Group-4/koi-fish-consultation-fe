import { createSlice } from "@reduxjs/toolkit";
import advertisementInitialState from "./advertisement.initialState";
import { setAdvertisement, setAdvertisementDetailModalOpen, setAdvertisementError, setAdvertisementList, setAdvertisementPackageList, setAdvertisementStatus, setAdvertisementType, setAdvertisementTypeList, setIsPosting, setPostingSuccessModalOpen } from "./advertisement.reducers";

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
        setIsPostingAction: setIsPosting,
        setPostingSuccessModalOpenAction: setPostingSuccessModalOpen,
        setAdvertisementPackageListAction: setAdvertisementPackageList
    }
})

export const {
    setAdvertisementErrorAction,
    setAdvertisementStatusAction,
    setAdvertisementListAction,
    setAdvertisementTypeListAction,
    setAdvertisementTypeAction,
    setAdvertisementAction,
    setAdvertisementDetailModalOpenAction,
    setIsPostingAction,
    setPostingSuccessModalOpenAction,
    setAdvertisementPackageListAction
} = advertisement.actions;

export default advertisement.reducer;
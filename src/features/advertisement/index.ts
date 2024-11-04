import { createSlice } from "@reduxjs/toolkit";
import advertisementInitialState from "./advertisement.initialState";
import { setAdvertisement, setAdvertisementDetailModalOpen, setAdvertisementError, setAdvertisementList, setAdvertisementPackageList, setAdvertisementStatus, setAdvertisementType, setAdvertisementTypeList, setIsPosting, setPayment, setPaymentSuccessModalOpen, setPostingSuccessModalOpen } from "./advertisement.reducers";
import { selectPaymentSuccessModalOpen } from "./advertisement.selectors";

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
        setAdvertisementPackageListAction: setAdvertisementPackageList,
        setPaymentAction: setPayment,
        selectPaymentSuccessModalOpenAction: setPaymentSuccessModalOpen
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
    setAdvertisementPackageListAction,
    setPaymentAction,
    selectPaymentSuccessModalOpenAction
} = advertisement.actions;

export default advertisement.reducer;
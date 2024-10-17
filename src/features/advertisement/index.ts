import { createSlice } from "@reduxjs/toolkit";
import advertisementInitialState from "./advertisement.initialState";
import { setAdvertisementError, setAdvertisementList, setAdvertisementStatus } from "./advertisement.reducers";


const advertisement = createSlice({
    name: "advertisement",
    initialState: advertisementInitialState,
    reducers: {
        setAdvertisementErrorAction: setAdvertisementError,
        setAdvertisementStatusAction: setAdvertisementStatus,
        setAdvertisementListAction: setAdvertisementList
    }
})

export const {
    setAdvertisementErrorAction,
    setAdvertisementStatusAction,
    setAdvertisementListAction
} = advertisement.actions;

export default advertisement.reducer;
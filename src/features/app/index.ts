import { createSlice } from "@reduxjs/toolkit";
import {appInitialState} from "./app.initialState";
import {

} from "./app.reducers";

const comic = createSlice({
    name: "comic",
    initialState: appInitialState,
    reducers: {

    }
})

export default comic.reducer;
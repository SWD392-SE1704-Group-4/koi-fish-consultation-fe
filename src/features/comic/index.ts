import { createSlice } from "@reduxjs/toolkit";
import comicInitialState from "./comic.initialState";
import {
    setCategoryList, 
    setComicList
} from "./comic.reducers";

const comic = createSlice({
    name: "comic",
    initialState: comicInitialState,
    reducers: {
        setComicListAction: setComicList,
        setCategoryListAction: setCategoryList
    }
})

export const {
    setComicListAction,
    setCategoryListAction
} = comic.actions;

export default comic.reducer;
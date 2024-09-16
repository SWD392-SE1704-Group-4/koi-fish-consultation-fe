import { PayloadAction } from "@reduxjs/toolkit";
import { Comic, Category, TComicState } from "AppModels";

export const setComicList = (state: TComicState, action: PayloadAction<Comic[]>) => {
    state.comicList = action.payload;
}

export const setCategoryList = (state: TComicState, action: PayloadAction<Category[]>) => {
    state.comicCategory = action.payload;
}
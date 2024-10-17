import { PayloadAction } from "@reduxjs/toolkit";
import { TBlogState } from "AppModels";

export const setBlogPostList = (
  state: TBlogState,
  action: PayloadAction<any>
) => {
  state.blogPostList = action.payload;
};

export const setBlogCategories = (
  state: TBlogState,
  action: PayloadAction<any>
) => {
  state.blogCategories = action.payload;
};

export const setIsFetching = (
  state: TBlogState,
  action: PayloadAction<any>
) => {
  state.isFetching = action.payload;
};

// import { PayloadAction } from "@reduxjs/toolkit";
// import { Comic, Category, TFengshuiState } from "AppModels";

// export const setfengshuiElementList = (
//   state: TFengshuiState,
//   action: PayloadAction<any>
// ) => {
//   state.fengshuiElementList = action.payload;
// };

// export const setKoiFishList = (
//   state: TFengshuiState,
//   action: PayloadAction<any>
// ) => {
//   state.koifishList = action.payload;
// };

// export const setIsFetching = (
//   state: TFengshuiState,
//   action: PayloadAction<any>
// ) => {
//   state.isFetching = action.payload;
// };

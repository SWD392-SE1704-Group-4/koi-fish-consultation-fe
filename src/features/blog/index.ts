import { createSlice } from "@reduxjs/toolkit";
import blogInitialState from "./blog.initialState";
import {
  setBlogPostList,
  setBlogCategories,
  setIsFetching,
} from "./blog.reducers";

const blog = createSlice({
  name: "blog",
  initialState: blogInitialState,
  reducers: {
    setBlogPostListAction: setBlogPostList,
    setBlogCategoriesAction: setBlogCategories,
    setIsFetchingAction: setIsFetching,
  },
});

export const {
  setBlogPostListAction,
  setBlogCategoriesAction,
  setIsFetchingAction,
} = blog.actions;

export default blog.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import fengshuiInitialState from "./blog.initialState";
// import {
//   setKoiFishList,
//   setfengshuiElementList,
//   setIsFetching,
// } from "./blog.reducers";

// const fengshui = createSlice({
//   name: "fengshui",
//   initialState: fengshuiInitialState,
//   reducers: {
//     setKoiFishListAction: setKoiFishList,
//     setFengshuiElementListAction: setfengshuiElementList,
//     //need confirm

//     setIsFetchingAction: setIsFetching,
//   },
// });

// export const {
//   setKoiFishListAction,
//   setFengshuiElementListAction,
//   setIsFetchingAction,
// } = fengshui.actions;

// export default fengshui.reducer;

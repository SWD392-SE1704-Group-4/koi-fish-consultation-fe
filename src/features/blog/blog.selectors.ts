import { RootState } from "../../redux/rootReducer";

export const selectBlogPostList = (state: RootState) => state.blog.blogPostList;

export const selectBlogCategories = (state: RootState) =>
  state.blog.blogCategories;

export const selectIsFetching = (state: RootState) => state.blog.isFetching;

// import { RootState } from '../../redux/rootReducer'; // Import your RootState type

// export const selectFenghsuiElementList = (state: RootState) => state.fengshui.fengshuiElementList;

// export const selectKoiFishList = (state: RootState) => state.fengshui.koifishList;

// export const selectIsFetching = (state: RootState) => state.fengshui.isFetching;

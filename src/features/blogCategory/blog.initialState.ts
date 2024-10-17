import { TAppState, TBlogState } from "AppModels";

const blogInitialState: TBlogState = {
  isFetching: null,
  blogPostList: null,
  blogCategories: null,
};

export default blogInitialState;

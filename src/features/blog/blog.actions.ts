import { TAppThunk } from "AppModels";
import { CreateBlog } from "../../services/blogAdvertiser";
import {
  setBlogPostListAction,
  setIsFetchingAction,
  setBlogCategoriesAction,
} from "./index";

// Lấy danh sách bài blog
export const requestGetBlogPosts = ({
  request,
}: {
  request: any;
}): TAppThunk => {
  return async (dispatch: any) => {
    dispatch(setIsFetchingAction(true));
    try {
      const response = await CreateBlog(request);
      const blogPostList: any = response?.data?.payload;
      dispatch(setBlogPostListAction(blogPostList));
    } catch (error) {
      dispatch({ type: "GET_COMIC_FAILURE", error });
    } finally {
      dispatch(setIsFetchingAction(false));
    }
  };
};

// Lấy danh mục blog
export const requestGetBlogCategories = ({
  request,
}: {
  request: any;
}): TAppThunk => {
  return async (dispatch: any) => {
    dispatch(setIsFetchingAction(true));
    try {
      // Logic tương tự như requestGetBlogPosts
    } catch (error) {
      dispatch({ type: "GET_COMIC_FAILURE", error });
    } finally {
      dispatch(setIsFetchingAction(false));
    }
  };
};

// import { TAppThunk } from "AppModels";
// import { GetFengshuiElement } from "../../services/FengshuiElement";
// import {
//   setFengshuiElementListAction,
//   setIsFetchingAction,
//   setKoiFishListAction,
// } from "./index";
// import { GetKoiFish } from "../../services/koifish";

// export const requestGetFengshuiElement = ({
//   request,
// }: {
//   request: any;
// }): TAppThunk => {
//   return async (dispatch: any) => {
//     dispatch(setIsFetchingAction(true));
//     try {
//     } catch (error) {
//       dispatch({ type: "GET_COMIC_FAILURE", error });
//     } finally {
//       dispatch(setIsFetchingAction(false));
//     }
//   };
// };

// export const requestGetKoiFish = ({ request }: { request: any }): TAppThunk => {
//   return async (dispatch: any) => {
//     dispatch(setIsFetchingAction(true));
//     try {
//       const response = await GetKoiFish(request);
//       const koiFishList: any = response?.data?.payload;
//       dispatch(setKoiFishListAction(koiFishList));
//     } catch (error) {
//       dispatch({ type: "GET_COMIC_FAILURE", error });
//     } finally {
//       dispatch(setIsFetchingAction(false));
//     }
//   };
// };

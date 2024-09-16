import { TAppThunk } from "AppModels";
import { GetComic } from "../../services/comic";
import { setComicListAction } from "./index";

export const requestGetComic = ({ request, token }: { request: any, token: any }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await GetComic(request); 
            const comicList: any = response?.data?.payload;
            dispatch(setComicListAction(comicList));
        } catch (error) {
            dispatch({ type: 'GET_COMIC_FAILURE', error });
        }
    };
};

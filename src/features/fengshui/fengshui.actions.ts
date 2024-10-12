import { TAppThunk } from "AppModels";
import { GetFengshuiElement } from "../../services/FengshuiElement";
import { setFengshuiElementListAction, setIsFetchingAction, setKoiFishListAction } from "./index";
import { GetKoiFish } from "../../services/koifish";

export const requestGetFengshuiElement = ({ request }: { request: any }): TAppThunk => {
    return async (dispatch: any) => {
        dispatch(setIsFetchingAction(true))
        try {           
            const response = await GetFengshuiElement(request); 
            const fengshuiElementList: any = response?.data?.payload;
            dispatch(setFengshuiElementListAction(fengshuiElementList));
        } catch (error) {
            dispatch({ type: 'GET_COMIC_FAILURE', error });
        } finally {
            dispatch(setIsFetchingAction(false))
        }
    };
};

export const requestGetKoiFish = ({ request }: { request: any }): TAppThunk => {
    return async (dispatch: any) => {
        dispatch(setIsFetchingAction(true))
        try {           
            const response = await GetKoiFish(request); 
            const koiFishList: any = response?.data?.payload;
            dispatch(setKoiFishListAction(koiFishList));
        } catch (error) {
            dispatch({ type: 'GET_COMIC_FAILURE', error });
        } finally {
            dispatch(setIsFetchingAction(false))
        }
    };
};


import { KoiFish, TAppThunk } from "AppModels";
import { GetFengshuiElement } from "../../services/FengshuiElement";
import {
    setFengshuiErrorAction,
    setFengshuiElementListAction,
    setIsFetchingAction,
    setKoiFishAction,
    setKoiFishListAction,
    setFengshuiStatusAction,
    setUpdateKoiFishModalOpenAction,
    setCreateKoiFishModalOpenAction,
    setDeleteKoiFishModalOpenAction
} from "./index";
import { CreateKoiFish, DeleteKoiFish, GetKoiFish, UpdateKoiFish } from "../../services/koifish";

export const requestGetFengshuiElement = ({ request }: { request: any }): TAppThunk => {
    return async (dispatch: any) => {
        dispatch(setIsFetchingAction(true))
        try {
            const response = await GetFengshuiElement(request);
            const fengshuiElementList: any = response?.data?.payload;
            dispatch(setFengshuiElementListAction(fengshuiElementList));
        } catch (error) {
            dispatch(setFengshuiErrorAction("Error:" + error.message));
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
            dispatch(setFengshuiErrorAction("Error:" + error.message));
        } finally {
            dispatch(setIsFetchingAction(false))
        }
    };
};

export const requestCreateKoiFish = ({ request }: { request: FormData }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await CreateKoiFish(request);
            if (response?.data?.payload) {
                dispatch(setFengshuiStatusAction("Create koi fish successfully"));
                dispatch(requestGetKoiFish({ request: {} }));
                dispatch(setUpdateKoiFishModalOpenAction(false));
            }
        } catch (error) {
            dispatch(setFengshuiErrorAction("Error:" + error));
        } finally {
        }
    };
};

export const requestUpdateKoiFish = ({ request }: { request: FormData }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await UpdateKoiFish(request);
            if (response?.data?.payload) {
                dispatch(setFengshuiStatusAction("Update koi fish successfully"));
                dispatch(requestGetKoiFish({ request: {} }));
                dispatch(setCreateKoiFishModalOpenAction(false));
                // dispatch(setKoiFishAction(null));
            }
        } catch (error) {
            dispatch(setFengshuiErrorAction("Error:" + error));
        } finally {
        }
    };
};

export const requestDeleteKoiFish = ({ request }: { request: any }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await DeleteKoiFish(request);
            if (response?.data?.has_error === false) {
                dispatch(setFengshuiStatusAction("Delete koi fish successfully"));
                dispatch(setDeleteKoiFishModalOpenAction(false));
                dispatch(setKoiFishAction(null));
                dispatch(requestGetKoiFish({ request: {} }));
            }
        } catch (error) {
            dispatch(setFengshuiErrorAction("Error:" + error));
        } finally {
        }
    };
};



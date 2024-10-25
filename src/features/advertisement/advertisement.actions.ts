import { KoiFish, TAppThunk } from "AppModels";
import { GetFengshuiElement } from "../../services/FengshuiElement";
import { setAdvertisementAction, setAdvertisementErrorAction, setAdvertisementListAction, setAdvertisementStatusAction, setAdvertisementTypeListAction } from "./index";
import { ApproveAdvertisement, CreateAdvertisement, DenyAdvertisement, GetAdvertisementById, GetListAdvertisement, GetListAdvertisementType } from "../../services/advertisement";

export const requestCreateAdvertisement = ({ request }: { request: FormData }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await CreateAdvertisement(request);
            if (response?.data?.payload) {
                dispatch(setAdvertisementStatusAction("Create koi fish successfully"));
            }
        } catch (error) {
            dispatch(setAdvertisementErrorAction("Error:" + error));
        } finally {
        }
    };
};

export const requestGetListAdvertisement = ({ request }: { request: any }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await GetListAdvertisement(request);
            if (response?.data?.payload) {
                const advertisementList: any = response?.data?.payload;
                dispatch(setAdvertisementListAction(advertisementList));
            }
        } catch (error) {
            dispatch(setAdvertisementErrorAction("Error:" + error));
        } finally {
        }
    };
};

export const requestGetListAdvertisementType = ({ request }: { request: any }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await GetListAdvertisementType(request);
            if (response?.data?.payload) {
                const advertisementTypeList: any = response?.data?.payload;
                dispatch(setAdvertisementTypeListAction(advertisementTypeList));
            }
        } catch (error) {
            dispatch(setAdvertisementErrorAction("Error:" + error));
        } finally {
        }
    };
};

export const requestGetAdvertisementById = ({ request }: { request: any }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await GetAdvertisementById(request);
            if (response?.data?.payload) {
                const advertisement: any = response?.data?.payload;
                dispatch(setAdvertisementAction(advertisement));
            }
        } catch (error) {
            dispatch(setAdvertisementErrorAction("Error:" + error));
        } finally {
        }
    };
};

export const requestApproveAdvertisement = ({ request }: { request: any }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await ApproveAdvertisement(request);
            if (response?.data?.payload) {
                const payload: any = response?.data?.payload;
                dispatch(setAdvertisementStatusAction("Approve advertisement"));
            }
        } catch (error) {
            dispatch(setAdvertisementErrorAction("Error:" + error));
        } finally {
        }
    };
};
export const requestDenyAdvertisement = ({ request }: { request: any }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await DenyAdvertisement(request);
            if (response?.data?.payload) {
                const payload: any = response?.data?.payload;
                dispatch(setAdvertisementStatusAction("Deny advertisement"));
            }
        } catch (error) {
            dispatch(setAdvertisementErrorAction("Error:" + error));
        } finally {
        }
    };
};



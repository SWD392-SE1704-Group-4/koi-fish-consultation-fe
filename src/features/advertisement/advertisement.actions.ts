import { KoiFish, TAppThunk } from "AppModels";
import { GetFengshuiElement } from "../../services/FengshuiElement";
import { setAdvertisementAction, setAdvertisementErrorAction, setAdvertisementListAction, setAdvertisementPackageListAction, setAdvertisementStatusAction, setAdvertisementTypeListAction, setIsPostingAction, setPaymentAction, setPaymentListAction, setPostingSuccessModalOpenAction } from "./index";
import { ApproveAdvertisement, CreateAdvertisement, DenyAdvertisement, GetAdvertisementById, GetListAdvertisement, GetListAdvertisementByCreator, GetListAdvertisementByStaff, GetListAdvertisementPackage, GetListAdvertisementType } from "../../services/advertisement";
import { setIsPosting } from "./advertisement.reducers";
import { CreatePayment, GetPayment } from "../../services/payment";

export const requestCreateAdvertisement = ({ request }: { request: FormData }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            dispatch(setIsPostingAction(true));
            const response = await CreateAdvertisement(request);
            if (response?.data?.payload) {
                dispatch(setAdvertisementStatusAction("Create advertisement successfully"));
                dispatch(setPostingSuccessModalOpenAction(true));
            }
        } catch (error) {
            dispatch(setAdvertisementErrorAction("Error:" + error));
        } finally {
            dispatch(setIsPostingAction(false));
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

export const requestGetListAdvertisementByStaff = ({ request }: { request: any }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await GetListAdvertisementByStaff(request);
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
                dispatch(requestGetListAdvertisementByStaff({ request }));
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
                dispatch(requestGetListAdvertisementByStaff({ request }));
            }
        } catch (error) {
            dispatch(setAdvertisementErrorAction("Error:" + error));
        } finally {
        }
    };
};

export const requestGetListAdvertisementPackage = ({ request }: { request: any }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await GetListAdvertisementPackage(request);
            if (response?.data?.payload) {
                const advertisementList: any = response?.data?.payload;
                dispatch(setAdvertisementPackageListAction(advertisementList));
            }
        } catch (error) {
            dispatch(setAdvertisementErrorAction("Error:" + error));
        } finally {
        }
    };
};

export const requestGetMyAdvertisement = ({ request }: { request: any }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await GetListAdvertisementByCreator(request);
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

export const requestCreatePayment = ({ request }: { request: any }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await CreatePayment(request);
            if (response?.data?.payload) {
                const payment: any = response?.data?.payload;
                dispatch(setPaymentAction(payment));
            }
        } catch (error) {
            dispatch(setAdvertisementErrorAction("Error:" + error));
        } finally {
        }
    };
};
export const requestGetPayment = ({ request }: { request: any }): TAppThunk => {
    return async (dispatch: any) => {
        try {
            const response = await GetPayment(request);
            if (response?.data?.payload) {
                const payment: any = response?.data?.payload;
                dispatch(setPaymentListAction(payment));
            }
        } catch (error) {
            dispatch(setAdvertisementErrorAction("Error:" + error));
        } finally {
        }
    };
};
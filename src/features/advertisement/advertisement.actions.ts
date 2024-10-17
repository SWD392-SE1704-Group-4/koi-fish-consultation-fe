import { KoiFish, TAppThunk } from "AppModels";
import { GetFengshuiElement } from "../../services/FengshuiElement";
import { setAdvertisementErrorAction, setAdvertisementListAction, setAdvertisementStatusAction } from "./index";
import { CreateAdvertisement, GetListAdvertisement } from "../../services/advertisement";

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




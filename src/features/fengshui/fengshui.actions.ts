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
  setDeleteKoiFishModalOpenAction,
  setFishPondListAction,
  setFengshuiDirectionListAction,
  setCreateKoiPondModalOpenAction,
  setHeaveEarthAction,
  setAIconsultationAction,
} from "./index";
import { CreateKoiFish, DeleteKoiFish, GetKoiFish, UpdateKoiFish, GetHeavenEarth, GetKoiFishByElementName } from "../../services/koifish";
import { CreateFishPond, GetFengshuiDirection, GetFishPond, GetMyFishPond } from "../../services/fishPond";
import { GetCalcutationFromAI } from "../../services/calculation";


export const requestGetFengshuiElement = ({
  request,
}: {
  request: any;
}): TAppThunk => {
  return async (dispatch: any) => {
    dispatch(setIsFetchingAction(true));
    try {
      const response = await GetFengshuiElement(request);
      const fengshuiElementList: any = response?.data?.payload;
      dispatch(setFengshuiElementListAction(fengshuiElementList));
    } catch (error) {
      dispatch(setFengshuiErrorAction("Error:" + error.message));
    } finally {
      dispatch(setIsFetchingAction(false));
    }
  };
};

export const requestGetKoiFish = ({ request }: { request: any }): TAppThunk => {
  return async (dispatch: any) => {
    dispatch(setIsFetchingAction(true));
    try {
      const response = await GetKoiFish(request);
      const koiFishList: any = response?.data?.payload;
      dispatch(setKoiFishListAction(koiFishList));
    } catch (error) {
      dispatch(setFengshuiErrorAction("Error:" + error.message));
    } finally {
      dispatch(setIsFetchingAction(false));
    }
  };
};

export const requestGetHeavenEarth = ({
  request,
}: {
  request: any;
}): TAppThunk => {
  return async (dispatch: any) => {
    dispatch(setIsFetchingAction(true));
    try {
      const response = await GetHeavenEarth(request);
      const heavenEarthList: any = response?.data?.payload;
      dispatch(setHeaveEarthAction(heavenEarthList));
    } catch (error) {
      dispatch(setFengshuiErrorAction("Error:" + error.message));
    } finally {
      dispatch(setIsFetchingAction(false));
    }
  };
};

export const requestCreateKoiFish = ({
  request,
}: {
  request: FormData;
}): TAppThunk => {
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

export const requestUpdateKoiFish = ({
  request,
}: {
  request: FormData;
}): TAppThunk => {
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


export const requestDeleteKoiFish = ({
  request,
}: {
  request: any;
}): TAppThunk => {
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
      dispatch(setFengshuiErrorAction("Error:" + error?.response?.data?.error));
    } finally {
    }
  };
};

export const requestGetFishPondList = ({ request }: { request: any }): TAppThunk => {
  return async (dispatch: any) => {
    dispatch(setIsFetchingAction(true))
    try {
      const response = await GetFishPond(request);
      const fishPondList: any = response?.data?.payload;
      dispatch(setFishPondListAction(fishPondList));
    } catch (error) {
      dispatch(setFengshuiErrorAction("Error:" + error.message));
    } finally {
      dispatch(setIsFetchingAction(false))
    }
  };
};

export const requestGetFengshuiDirectionList = ({ request }: { request: any }): TAppThunk => {
  return async (dispatch: any) => {
    dispatch(setIsFetchingAction(true))
    try {
      const response = await GetFengshuiDirection(request);
      const fengshuiDirectionList: any = response?.data?.payload;
      dispatch(setFengshuiDirectionListAction(fengshuiDirectionList));
    } catch (error) {
      dispatch(setFengshuiErrorAction("Error:" + error.message));
    } finally {
      dispatch(setIsFetchingAction(false))
    }
  };
};

export const requestCreateFishPond = ({ request }: { request: any }): TAppThunk => {
  return async (dispatch: any) => {
    dispatch(setIsFetchingAction(true))
    try {
      const response = await CreateFishPond(request);
      const newFishPond: any = response?.data?.payload;
      if (newFishPond) {
        dispatch(setFengshuiStatusAction("Create fish pond successfully"));
        dispatch(requestGetMyFishPond({ request: {appUserId: newFishPond?.createBy?.id} }));
        dispatch(setCreateKoiPondModalOpenAction(false));
      }

    } catch (error) {
      dispatch(setFengshuiErrorAction("Error:" + error.message));
    } finally {
      dispatch(setIsFetchingAction(false))
    }
  };
};

export const requestGetMyFishPond = ({ request }: { request: any }): TAppThunk => {
  return async (dispatch: any) => {
    dispatch(setIsFetchingAction(true))
    try {
      const response = await GetMyFishPond(request);
      const fishPond: any = response?.data?.payload;
      if (fishPond) {
        dispatch(setFishPondListAction(fishPond));
      }
    } catch (error) {
      dispatch(setFengshuiErrorAction("Error:" + error.message));
    } finally {
      dispatch(setIsFetchingAction(false))
    }
  };
};

export const requestGetKoiFishByElementName = ({ request }: { request: any }): TAppThunk => {
  return async (dispatch: any) => {
    dispatch(setIsFetchingAction(true));
    try {
      const response = await GetKoiFishByElementName(request);
      const koiFishList: any = response?.data?.payload;
      dispatch(setKoiFishListAction(koiFishList));
    } catch (error) {
      dispatch(setFengshuiErrorAction("Error:" + error.message));
    } finally {
      dispatch(setIsFetchingAction(false));
    }
  };
};

export const requestGetAIConsultation = ({ request }: { request: any }): TAppThunk => {
  return async (dispatch: any) => {
    dispatch(setIsFetchingAction(true));
    try {
      const response = await GetCalcutationFromAI(request);
      const consultation: any = response?.data?.payload;
      dispatch(setAIconsultationAction(consultation));
    } catch (error) {
      dispatch(setFengshuiErrorAction("Error:" + error.message));
    } finally {
      dispatch(setIsFetchingAction(false));
    }
  };
};


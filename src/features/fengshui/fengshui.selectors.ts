import { RootState } from '../../redux/rootReducer'; // Import your RootState type

export const selectFenghsuiElementList = (state: RootState) => state.fengshui.fengshuiElementList;

export const selectKoiFishList = (state: RootState) => state.fengshui.koifishList;

export const selectIsFetching = (state: RootState) => state.fengshui.isFetching;

export const selectUpdateKoiFishModalOpen = (state: RootState) => state.fengshui.updateKoiFishModalOpen;

export const selectCreateKoiFishModalOpen = (state: RootState) => state.fengshui.createKoiFishModalOpen;

export const selectDeleteKoiFishModalOpen = (state: RootState) => state.fengshui.deleteKoiFishModalOpen;

export const selectKoiFish = (state: RootState) => state.fengshui.koiFish;

export const selectFengshuiInfo = (state: RootState) => state.fengshui;

export const selectStatus = (state: RootState) => state.fengshui.status;
import { PayloadAction } from "@reduxjs/toolkit";
import { Comic, Category, TFengshuiState } from "AppModels";

export const setfengshuiElementList = (
  state: TFengshuiState,
  action: PayloadAction<any>
) => {
  state.fengshuiElementList = action.payload;
};

export const setKoiFishList = (
  state: TFengshuiState,
  action: PayloadAction<any>
) => {
  state.koifishList = action.payload;
};

export const setIsFetching = (
  state: TFengshuiState,
  action: PayloadAction<any>
) => {
  state.isFetching = action.payload;
};

export const setKoiFish = (
  state: TFengshuiState,
  action: PayloadAction<any>
) => {
  state.koiFish = action.payload;
};

export const setUpdateKoiFishModalOpen = (
  state: TFengshuiState,
  action: PayloadAction<any>
) => {
  state.updateKoiFishModalOpen = action.payload;
};
export const setCreateKoiFishModalOpen = (
  state: TFengshuiState,
  action: PayloadAction<any>
) => {
  state.createKoiFishModalOpen = action.payload;
};
export const setDeleteKoiFishModalOpen = (
  state: TFengshuiState,
  action: PayloadAction<any>
) => {
  state.deleteKoiFishModalOpen = action.payload;
};

export const setFengshuiError = (
  state: TFengshuiState,
  action: PayloadAction<any>
) => {
  state.error = action.payload;
};

export const setStatus = (
  state: TFengshuiState,
  action: PayloadAction<any>
) => {
  state.status = action.payload;
};

export const setHeavenEarth = (
  state: TFengshuiState,
  action: PayloadAction<any>
) => {
  state.heavenEarth = action.payload;
};

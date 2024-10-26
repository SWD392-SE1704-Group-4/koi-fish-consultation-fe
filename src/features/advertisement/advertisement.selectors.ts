import { RootState } from '../../redux/rootReducer'; // Import your RootState type

export const selectAdvertisementInfo = (state: RootState) => state.advertisement;

export const selectAdvertisementList = (state: RootState) => state.advertisement.advertisementList;

export const selectAdvertisementTypeList = (state: RootState) => state.advertisement.advertisementTypeList;

export const selectAdvertisementType = (state: RootState) => state.advertisement.advertisementType;

export const selectAdvertisement = (state: RootState) => state.advertisement.advertisement;

export const selectAdvertisementDetailModalOpen = (state: RootState) => state.advertisement.advertisementDetailModalOpen;
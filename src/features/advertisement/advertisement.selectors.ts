import { RootState } from '../../redux/rootReducer'; // Import your RootState type

export const selectAdvertisementInfo = (state: RootState) => state.advertisement;

export const selectAdvertisementList = (state: RootState) => state.advertisement.advertisementList;

export const selectAdvertisementTypeList = (state: RootState) => state.advertisement.advertisementTypeList;

export const selectAdvertisementType = (state: RootState) => state.advertisement.advertisementType;

export const selectAdvertisement = (state: RootState) => state.advertisement.advertisement;

export const selectAdvertisementDetailModalOpen = (state: RootState) => state.advertisement.advertisementDetailModalOpen;

export const selectIsPosting = (state: RootState) => state.advertisement.isPosting;

export const selectPostingSuccessModalOpen = (state: RootState) => state.advertisement.postingSuccessModalOpen;

export const selectAdvertisementPackageList = (state: RootState) => state.advertisement.advertisementPackageList;

export const selectPayment = (state: RootState) => state.advertisement.payment;

export const selectPaymentList = (state: RootState) => state.advertisement.paymentList;

export const selectPaymentSuccessModalOpen = (state: RootState) => state.advertisement.paymentSuccessModalOpen;
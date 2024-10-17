import { RootState } from '../../redux/rootReducer'; // Import your RootState type

export const selectAdvertisementInfo = (state: RootState) => state.advertisement;

export const selectAdvertisementList = (state: RootState) => state.advertisement.advertisementList;
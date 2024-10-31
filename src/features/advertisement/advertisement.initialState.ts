import { TAdvertisementState, TAppState,  } from "AppModels"

const advertisementInitialState: TAdvertisementState = {
    isFetching: null,
    isPosting: null,
    postingSuccessModalOpen: null,
    updateAdvertisementModalOpen: null,
    deleteAdvertisementModalOpen: null,
    advertisementList: null,
    advertisementTypeList: null,
    advertisementType: null,
    advertisement: null,
    advertisementDetailModalOpen: false,
    status: null,
    error: null,
}

export default advertisementInitialState;
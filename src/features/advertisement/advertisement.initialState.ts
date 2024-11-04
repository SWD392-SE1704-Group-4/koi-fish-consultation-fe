import { TAdvertisementState, TAppState,  } from "AppModels"

const advertisementInitialState: TAdvertisementState = {
    isFetching: null,
    isPosting: null,
    postingSuccessModalOpen: null,
    paymentSuccessModalOpen: null,
    updateAdvertisementModalOpen: null,
    deleteAdvertisementModalOpen: null,
    advertisementList: null,
    advertisementPackageList: null,
    advertisementTypeList: null,
    advertisementType: null,
    advertisement: null,
    advertisementDetailModalOpen: false,
    payment: null,
    paymentList: null,
    status: null,
    error: null,
}

export default advertisementInitialState;
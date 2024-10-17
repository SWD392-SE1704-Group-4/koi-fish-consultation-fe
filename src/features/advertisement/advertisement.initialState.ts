import { TAdvertisementState, TAppState,  } from "AppModels"

const advertisementInitialState: TAdvertisementState = {
    isFetching: null,
    updateAdvertisementModalOpen: null,
    deleteAdvertisementModalOpen: null,
    advertisementList: null,
    status: null,
    error: null,
}

export default advertisementInitialState;
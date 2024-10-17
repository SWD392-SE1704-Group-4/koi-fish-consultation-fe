import { TAppState, TFengshuiState } from "AppModels"

const fengshuiInitialState: TFengshuiState = {
    isFetching: null,
    fengshuiElementList: null,
    koifishList: null,
    koiFish: null,
    updateKoiFishModalOpen: null,
    createKoiFishModalOpen: null,
    deleteKoiFishModalOpen: null,
    fishpondList: [],
    status: null,
    error: null,
}

export default fengshuiInitialState;
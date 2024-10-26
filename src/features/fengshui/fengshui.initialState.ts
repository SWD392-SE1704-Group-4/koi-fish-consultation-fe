import { TAppState, TFengshuiState } from "AppModels"

const fengshuiInitialState: TFengshuiState = {
    isFetching: null,
    fengshuiElementList: null,
    koifishList: null,
    fishPondList: null,
    koiFish: null,
    fishPond: null,
    updateKoiFishModalOpen: null,
    createKoiFishModalOpen: null,
    deleteKoiFishModalOpen: null,
    fishPondDetailModalOpen: null,
    createKoiPondModalOpen: null,
    fengshuiDirectionList: null,
    status: null,
    error: null,
}

export default fengshuiInitialState;
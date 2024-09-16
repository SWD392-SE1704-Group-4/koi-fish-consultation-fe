import { TAppState, TComicState } from "AppModels"

const comicInitialState: TComicState = {
    currentComicId: null,
    comicList: [],
    comicKeyword: null,
    comicCategory: [],
}

export default comicInitialState;
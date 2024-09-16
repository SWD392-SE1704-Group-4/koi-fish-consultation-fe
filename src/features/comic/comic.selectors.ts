import { RootState } from '../../redux/rootReducer'; // Import your RootState type

export const selectComicList = (state: RootState) => state.comic.comicList;

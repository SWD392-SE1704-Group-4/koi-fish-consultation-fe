import { combineReducers, Reducer, AnyAction } from "@reduxjs/toolkit";
import comic from "../features/comic";

const combineReducer = combineReducers({    
    comic: comic,
});

export type RootState = ReturnType<typeof combineReducer>;

const rootReducer: Reducer<RootState, AnyAction> = (state, action) => {
    if(action.type === 'logOut'){
        state = {} as RootState;
    }
    return combineReducer(state, action);
}

export default rootReducer;
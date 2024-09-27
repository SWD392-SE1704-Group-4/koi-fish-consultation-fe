import { combineReducers, Reducer, AnyAction } from "@reduxjs/toolkit";
import comic from "../features/comic";
import auth from "../features/auth";

const combineReducer = combineReducers({    
    comic: comic,
    auth: auth
});

export type RootState = ReturnType<typeof combineReducer>;

const rootReducer: Reducer<RootState, AnyAction> = (state, action) => {
    if(action.type === 'logOut'){
        state = {} as RootState;
    }
    return combineReducer(state, action);
}

export default rootReducer;
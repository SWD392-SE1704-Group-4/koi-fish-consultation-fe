import { combineReducers, Reducer, AnyAction } from "@reduxjs/toolkit";
import fengshui from "../features/fengshui";
import auth from "../features/auth";

const combineReducer = combineReducers({    
    auth: auth,
    fengshui: fengshui
});

export type RootState = ReturnType<typeof combineReducer>;

const rootReducer: Reducer<RootState, AnyAction> = (state, action) => {
    if(action.type === 'logOut'){
        state = {} as RootState;
    }
    return combineReducer(state, action);
}

export default rootReducer;
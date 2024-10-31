import { combineReducers, Reducer, AnyAction } from "@reduxjs/toolkit";
import fengshui from "../features/fengshui";
import auth from "../features/auth";
import advertisement from "../features/advertisement";
import app from "../features/app";

const combineReducer = combineReducers({    
    app: app,
    auth: auth,
    fengshui: fengshui,
    advertisement: advertisement,
});

export type RootState = ReturnType<typeof combineReducer>;

const rootReducer: Reducer<RootState, AnyAction> = (state, action) => {
  if (action.type === "logOut") {
    state = {} as RootState;
  }
  return combineReducer(state, action);
};

export default rootReducer;

import { combineReducers } from "@reduxjs/toolkit";
import accountSlice from "../slices/account";
import environmentSlice from "../slices/environment";

const rootReducer = combineReducers({
  account: accountSlice.reducer,
  environment: environmentSlice.reducer
});

export type StoreState = ReturnType<typeof rootReducer>;

export default rootReducer;

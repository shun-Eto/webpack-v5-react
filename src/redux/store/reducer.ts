import { combineReducers } from "@reduxjs/toolkit";
import tasksModule from "../slices/modules1";

const rootReducer = combineReducers({
  tasks: tasksModule.reducer
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;

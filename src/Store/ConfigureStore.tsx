import combineReducers from "../Reducers/RootReducer";

import { configureStore } from "@reduxjs/toolkit";
const store = configureStore({
  reducer: combineReducers,
});
export type RootState = ReturnType<typeof store.getState>;

export default store;

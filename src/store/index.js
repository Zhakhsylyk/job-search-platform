import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { usersSlice } from "./actions/account";
import { rootSlice } from "./actions/global";
import dictionaryReducer from "./actions/dictionary";

export const store = configureStore({
  reducer: {
    root: rootSlice,
    account: usersSlice,
    dictionary: dictionaryReducer,
  }
});

export default store;

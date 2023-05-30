import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./actions/account";
import { rootSlice } from "./actions/global";
import { dictionarySlice } from "./actions/dictionary";

export const store = configureStore({
  reducer: {
    root: rootSlice,
    account: usersSlice,
    dictionary: dictionarySlice,
  },
});

export default store;

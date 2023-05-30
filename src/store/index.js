import { configureStore ,combineReducers} from "@reduxjs/toolkit";
import { usersSlice } from "./actions/account";
import { rootSlice } from "./actions/global";
import { dictionarySlice } from "./actions/dictionary";

const reducer = combineReducers({
  root: rootSlice,
  account: usersSlice,
  dictionary: dictionarySlice,
});

export const store = configureStore({
  reducer
});

export default store;

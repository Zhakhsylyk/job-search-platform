import { AuthService } from "../../services";
import { api } from "../../constants/api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const getCities = () => async (dispatch) => {
  const response = await AuthService.get(api.dictionary.getCities);
  return response?.data;
};

export const dictionarySlice = createSlice({
  name: "dictionary",
  state: initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCities.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cities = state.cities.concat(action.payload);
      })
      .addCase(getCities.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

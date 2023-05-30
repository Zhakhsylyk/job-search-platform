import { apiService, AuthService } from "../../services";
import { api } from "../../constants/api";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cities: [],
  levels: [],
  categories: [],
  skills: [],
  types: [],
  isLoading: false,
  error: '',
};

export const getCities = () => async (dispatch) => {
  const response = await apiService.get(api.dictionary.getCities);
  return response?.data;
};

export const getExperienceLevels = () => async (dispatch) => {
  const response = await apiService.get(api.dictionary.getExperienceLevels);
  return response?.data;
};

export const getJobCategories = () => async (dispatch) => {
  const response = await apiService.get(api.dictionary.getJobCategories);
  return response?.data;
};

export const getJobSkillTags = () => async (dispatch) => {
  const response = await apiService.get(api.dictionary.getJobSkillTags);
  return response?.data;
};


export const getJobTypes = () => async (dispatch) => {
  const response = await apiService.get(api.dictionary.getJobTypes);
  return response?.data;
};

export const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCities.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getCities.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cities = action.payload;
      })
      .addCase(getCities.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

import { apiService, AuthService } from "../../services";
import { api } from "../../constants/api";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  cities: [],
  levels: [],
  categories: [],
  skills: [],
  types: [],
  isLoading: false,
  error: '',
};

export const getCities = createAsyncThunk(
  '/getCities',
  async () => {
    const response = await apiService.get(api.dictionary.getCities);
    return response?.data;
  });

export const getExperienceLevels = createAsyncThunk(
  '/getExperienceLevels',
  async () => {
    const response = await apiService.get(api.dictionary.getExperienceLevels);
    return response?.data;
  });

export const getJobCategories = createAsyncThunk(
  '/getJobCategories',
  async () => {
    const response = await apiService.get(api.dictionary.getJobCategories);
    return response?.data;
  });

export const getJobSkillTags = createAsyncThunk(
  '/getJobSkillTags',
  async () => {
    const response = await apiService.get(api.dictionary.getJobSkillTags);
    return response?.data;
  });


export const getJobTypes = createAsyncThunk(
  '/getJobTypes',
  async () => {
    const response = await apiService.get(api.dictionary.getJobTypes);
    return response?.data;
  });

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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

export default dictionarySlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../constants/api";
import { apiService } from "../../services";
import { useSelector } from "react-redux";



const initialState = {
    users: [],
    status: "",
    error: ""
}

export const signIn = createAsyncThunk(api.signIn, async (data) => {
    const { username, password } = data;
    const response = await apiService.post(`${api.signIn}?password=${password}&username=${username}`)
    console.log(response.data)
    return response?.data
})

export const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers(builder) {
        builder
            .addCase(signIn.pending, (state, action) => {
                state.status = "loading"
            })
            .addCase(signIn.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.users = state.users.concat(action.payload);
            })
            .addCase(signIn.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    }
})

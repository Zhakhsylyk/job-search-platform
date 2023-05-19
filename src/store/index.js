import { configureStore } from '@reduxjs/toolkit'
import { usersSlice } from './actions/account';
import { rootSlice } from './actions/global';

export const store = configureStore({
    reducer: {
        root: rootSlice,
        account: usersSlice
    },
})

export default store

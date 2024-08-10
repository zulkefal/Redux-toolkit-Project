import { configureStore } from "@reduxjs/toolkit";
import userSlice from './slices/UsersSlice';

const store = configureStore({
    reducer: {
        user: userSlice,
    }
})


export default store;
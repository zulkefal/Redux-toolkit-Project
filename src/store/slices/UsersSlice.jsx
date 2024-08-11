import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: []
    },
    reducers: {
        addUser(state, action) {
            state.users.push(action.payload); 
        },
        removeUser(state, action) {
            state.users = state.users.filter((user, index) => index !== action.payload);
        },
        clearAllUsers(state) {
            state.users = []; 
        },
    }
});

export default userSlice.reducer; 
export const { addUser, removeUser, clearAllUsers } = userSlice.actions;
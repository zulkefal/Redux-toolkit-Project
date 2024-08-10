import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
    name: 'user',
    initialState: {
        users: []
    },
    reducers: {
        addUser(state, action) {
            state.push(action.payload); 
            console.log(action.payload)
        },
        removeUser(state, action) {
        },
        clearAllUsers(state) {
        },
    }
});

export default userSlice.reducer; // Correct export
export const { addUser, removeUser, clearAllUsers } = userSlice.actions;
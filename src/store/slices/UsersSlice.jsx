import {createSlice } from '@reduxjs/toolkit';
const userSlice= createSlice({
    name: 'user',
    initialState:{
        users: []
    },
    reducer:{
        addUser(state, action){},
        removeUser(state, action){},
        clearAllUsers(state, action){},
    }

});

export {userSlice}; 
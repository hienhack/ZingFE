import { createSlice } from '@reduxjs/toolkit';
import { getObject, saveObject } from '../../util';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        token: localStorage.getItem('token') || null,
        isLoggedIn: localStorage.getItem('token') != null,
        authenticate: false,
        searchHistory: getObject('search_history') || [],
        played: [],
    },
    reducers: {
        setAuthenticate: (state, action) => {
            state.authenticate = action.payload;
        },

        login: (state, action) => {
            state.isLoggedIn = true;
            state.token = action.payload;
            localStorage.setItem('token', action.payload);
        },

        logout: (state) => {
            state.isLoggedIn = false;
        },

        addSearchHistory: (state, action) => {
            const temp = state.searchHistory.slice(-10);
            temp.push(action.payload);
            saveObject('search_history', temp);
            state.searchHistory = temp;
        },

        // addPlayed: (state, action) => {
        //     const temp = state.searchHistory.slice();
        //     temp.push(action.payload);
        //     saveObject('search_history', temp);
        //     state.searchHistory = temp;
        // }
    }
});

export const { setAuthenticate, login, logout, addSearchHistory } = userSlice.actions;
export default userSlice.reducer;
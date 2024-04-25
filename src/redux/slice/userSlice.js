import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: localStorage.getItem('token') || null,
        isLoggedIn: localStorage.getItem('token') != null,
        authenticate: false,
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
        }
    }
});

export const { setAuthenticate, login, logout } = userSlice.actions;
export default userSlice.reducer;
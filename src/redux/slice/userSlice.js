import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        authenticate: false,
        isLoggedIn: false,
        token: null,
    },
    reducers: {
        setAuthenticate: (state, action) => {
            state.authenticate = action.payload;
        },

        login: (state, action) => {
            state.isLoggedIn = true;
        },

        logout: (state) => {
            state.isLoggedIn = false;
        }
    }
});

export const { setAuthenticate, login, logout } = userSlice.actions;
export default userSlice.reducer;
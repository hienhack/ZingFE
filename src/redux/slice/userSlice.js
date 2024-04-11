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
        }
    }
});

export const { setAuthenticate } = userSlice.actions;
export default userSlice.reducer;
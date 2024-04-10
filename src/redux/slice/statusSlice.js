import { createSlice } from '@reduxjs/toolkit';

export const statusSlice = createSlice({
    name: 'status',
    initialState: {
        isPlaying: false
    },
    reducers: {
        setPlaying: (state) => {
            state.isPlaying = true;
        },

        setPause: (state) => {
            state.isPlaying = false;
        }
    }
})

export const { setPlaying, setPause } = statusSlice.actions;
export default statusSlice.reducer;
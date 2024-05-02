import { createSlice } from '@reduxjs/toolkit';

export const statusSlice = createSlice({
    name: 'status',
    initialState: {
        isPlaying: false,
        repeat: false,
        repeatOne: false,
        shuffle: false,
        alarm: 0,
    },
    reducers: {
        setPlaying: (state, action) => {
            state.isPlaying = action.payload;
        },

        setRepeatOne: (state, action) => {
            state.repeatOne = action.payload;
        },

        setShuffle: (state, action) => {
            state.shuffle = action.payload;
        },

        setRepeat: (state, action) => {
            state.repeat = action.payload;
        }
    }
})

export const { setPlaying, setRepeat, setRepeatOne, setShuffle } = statusSlice.actions;
export default statusSlice.reducer;
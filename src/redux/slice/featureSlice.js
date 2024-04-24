import { createSlice } from '@reduxjs/toolkit';

export const featureSlice = createSlice({
    name: 'feature',
    initialState: {
        currentSong: null,
        createdPlaylist: [],
    },
    reducers: {
        setCurrentSong: (state, action) => {
            state.currentSong = action.payload;
        }
    }
});

export const { setCurrentSong } = featureSlice.actions;
export default featureSlice.reducer;
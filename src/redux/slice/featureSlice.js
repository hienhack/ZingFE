import { createSlice } from '@reduxjs/toolkit';

export const featureSlice = createSlice({
    name: 'feature',
    initialState: {
        currentSong: null,
        createdPlaylist: [],
        currentPlaylist: null,
        queue: [],
        currentTime: 0,
        volume: localStorage.getItem('volume') || .5,
    },
    reducers: {
        setCurrentSong: (state, action) => {
            state.currentSong = action.payload;
        },

        createPlaylist: (state, action) => {
            const temp = state.createdPlaylist.slice();
            temp.push(action.payload);
            state.createdPlaylist = temp;
        },

        setCreatedPlaylist: (state, action) => {
            state.createdPlaylist = action.payload;
        },

        setCurrentTime: (state, action) => {
            state.currentTime = action.payload;
        },

        setVolume: (state, action) => {
            state.volume = action.payload;
            localStorage.setItem('volume', action.payload);
        },
    }
});

export const { setCurrentSong, createPlaylist, setCreatedPlaylist, setCurrentTime, setSongDuration, setVolume } = featureSlice.actions;
export default featureSlice.reducer;
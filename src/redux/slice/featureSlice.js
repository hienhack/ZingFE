import { createSlice } from '@reduxjs/toolkit';
import { getObject, saveObject } from '../../util';

export const featureSlice = createSlice({
    name: 'feature',
    initialState: {
        currentSong: getObject('current_song') || null,
        createdPlaylist: [],
        currentPlaylist: null,
        queue: getObject('queue') || [],
        currentTime: 0,
        volume: localStorage.getItem('volume') || .5,
    },
    reducers: {
        setCurrentSong: (state, action) => {
            state.currentSong = action.payload == null ? null : { ...action.payload };
            saveObject('current_song', action.payload);
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

        setQueue: (state, action) => {
            state.queue = action.payload;
            saveObject('queue', action.payload);
        },

        addToQueue: (state, action) => {
            const temp = [action.payload, ...state.queue];
            state.queue = temp;
            saveObject('queue', temp);
        },
    }
});

export const {
    setCurrentSong,
    createPlaylist,
    setCreatedPlaylist,
    setCurrentTime,
    setSongDuration,
    setVolume,
    setQueue,
    addToQueue
} = featureSlice.actions;
export default featureSlice.reducer;
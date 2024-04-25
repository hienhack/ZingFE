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
        },

        createPlaylist: (state, action) => {
            const temp = state.createdPlaylist.slice();
            temp.push(action.payload);
            state.createdPlaylist = temp;
        },

        setCreatedPlaylist: (state, action) => {
            state.createdPlaylist = action.payload;
        }
    }
});

export const { setCurrentSong, createPlaylist, setCreatedPlaylist } = featureSlice.actions;
export default featureSlice.reducer;
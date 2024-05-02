import { createSlice } from "@reduxjs/toolkit";

export const QueueTab = {
    SONG_QUEUE: 1,
    HISTORY: 2,
}

export const layoutSlice = createSlice({
    name: "layout",
    initialState: {
        showQueue: false,
        queueTab: QueueTab.SONG_QUEUE,
    },

    reducers: {
        setShowQueue: (state, action) => {
            state.showQueue = action.payload;
        },

        showSongQueue: (state, action) => {
            state.queueTab = QueueTab.SONG_QUEUE;
        },

        showHistory: (state) => {
            state.queueTab = QueueTab.HISTORY;
        }
    }

});

export const { setShowQueue, showSongQueue, showHistory } = layoutSlice.actions;
export default layoutSlice.reducer;
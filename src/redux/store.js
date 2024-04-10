import { configureStore } from '@reduxjs/toolkit';
import featureReducer from './slice/featureSlice';
import statusReducer from './slice/statusSlice';

export default configureStore({
    reducer: {
        'feature': featureReducer,
        'status': statusReducer
    },
});

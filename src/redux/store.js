import { configureStore } from '@reduxjs/toolkit';
import featureReducer from './slice/featureSlice';
import statusReducer from './slice/statusSlice';
import userReducer from './slice/userSlice';

export default configureStore({
    reducer: {
        'feature': featureReducer,
        'status': statusReducer,
        'user': userReducer
    },
});

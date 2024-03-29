import { configureStore } from '@reduxjs/toolkit';
import themeSlice from './theme.slice';

export const store = configureStore({
    reducer: {
        theme: themeSlice,
    },
});

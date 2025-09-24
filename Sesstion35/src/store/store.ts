import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slices/Bai1';
import randomListReducer from './slices/Bai2';
import themeReducer from './slices/Bai3';
import displayModeReducer from './slices/Bai4';
import menuReducer from './slices/Bai5';
import languageReducer from './slices/Bai6';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        randomList: randomListReducer,
        theme: themeReducer,
        displayMode: displayModeReducer,
        menu: menuReducer,
        language: languageReducer,
    },
});
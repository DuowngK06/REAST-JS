import { createSlice } from '@reduxjs/toolkit';

interface LanguageState {
    lang: 'vi' | 'en';
}

const initialState: LanguageState = {
    lang: 'vi',
};

const languageSlice = createSlice({
    name: 'language',
    initialState,
    reducers: {
        toggleLanguage: (state) => {
            state.lang = state.lang === 'vi' ? 'en' : 'vi';
        },
    },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;

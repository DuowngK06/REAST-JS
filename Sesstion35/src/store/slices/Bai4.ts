import { createSlice } from '@reduxjs/toolkit';

interface DisplayState {
    mode: 'list' | 'grid';
}

const initialState: DisplayState = {
    mode: 'list',
};

const displayModeSlice = createSlice({
    name: 'displayMode',
    initialState,
    reducers: {
        toggleMode: (state) => {
            state.mode = state.mode === 'list' ? 'grid' : 'list';
        },
    },
});

export const { toggleMode } = displayModeSlice.actions;
export default displayModeSlice.reducer;

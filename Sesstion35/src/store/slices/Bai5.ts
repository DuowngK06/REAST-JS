import { createSlice } from '@reduxjs/toolkit';

interface MenuState {
    isVisible: boolean;
}

const initialState: MenuState = {
    isVisible: true,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isVisible = !state.isVisible;
        },
    },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;

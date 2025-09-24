import { createSlice } from '@reduxjs/toolkit';

interface RandomListState {
    list: number[];
}

const initialState: RandomListState = {
    list: [],
};

const randomListSlice = createSlice({
    name: 'randomList',
    initialState,
    reducers: {
        generateList: (state) => {
            state.list = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100));
        },
    },
});

export const { generateList } = randomListSlice.actions;
export default randomListSlice.reducer;

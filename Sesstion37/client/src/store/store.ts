import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./slices/studenSlices";

const storeRedux = configureStore({
    reducer: {
        students: studentSlice,
    },
});

export default storeRedux;
import { configireStore } from '@reduxjs/toolkit'
const store=configireStore({
    reducer:{
        user:userSlice
    }
})
import React from 'react'
import { createSlice } from "@reduxjs/toolkit"

const userSlice = createSlice({
   
    initialState:{
        users:[
            {
               id:1
               name:"Minh Thu" 
            }, 
            {
                id:2
                name:"Lan Hong"
            }
        ]
    }
   })

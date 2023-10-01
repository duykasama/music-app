'use client'
import {createSlice} from "@reduxjs/toolkit";

type AuthState = {
    accessToken: string
}

const initialState: AuthState = {
    accessToken: ""
}

export const authSlice = createSlice({
    initialState,
    name: 'auth',
    reducers: {
        addAuth: (state, action) => {
            state.accessToken = action.payload.accessToken
        }
    }
})

export default authSlice.reducer
export const {addAuth} = authSlice.actions
export type {AuthState}
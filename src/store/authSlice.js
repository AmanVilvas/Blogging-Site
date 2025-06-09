import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        login: (state, action) =>{
            state.status = true
            state.userData = action.payload.userData
        }, //if user logged in then status will be true and userdata will be stored using action.payload to sent it to store something like thattt

        logout: (state) =>{
            state.status = false
            state.userData = null
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer
//here in code we mentioned reducer's' but in docs we will export as reducer......future referenceeee

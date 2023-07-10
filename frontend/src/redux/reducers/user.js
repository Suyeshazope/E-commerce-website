import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    isAutheticated: false ,
} ;

export const userReducer = createReducer(initialState , {
    LoadUserRequest: (state) => {
        state.loading = true ;
    } ,
    LoadUserSuccess: (state , action) => {
        state.isAutheticated = true ;
        state.loading = false ;
        state.user = action.payload ;
    } ,
    LoadUserFail: (state , action) => {
        state.loading = false ;
        state.error = action.payload ;
        state.isAutheticated = false ;
    } ,
    clearErrors: (state) => {
        state.error = null ;
    },
});
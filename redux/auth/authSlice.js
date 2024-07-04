import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
     name: 'auth',
     initialState: {
        value: {user: null, token: null, imageCamera: null},
     },
     reducers: {
        setUser: (state, action) => {
          state.value.user = action.payload.data.email
          state.value.token = action.payload.data.idToken
        },
        clearUser: (state, action) => {
            state.value.user = null,
            state.value.token = null
        },
        setCameraImage: (state, action) => {
          state.value.imageCamera = action.payload
        }
      },
})

export const { setUser, clearUser, setCameraImage } = authSlice.actions

export default authSlice.reducer
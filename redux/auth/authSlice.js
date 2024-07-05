import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: {
      user: {
        email: null,
        localId: null,
        photo: null,
      },
      token: null,
      profilePicture: null,
    },
  },
  reducers: {
    setUser: (state, action) => {
      state.value.user.email = action.payload.email
      state.value.user.localId = action.payload.localId
      state.value.token = action.payload.token
    },
    setProfilePicture: (state, action) => {
      state.value.profilePicture = action.payload
    },
    setUserPhoto: (state, action) => {
      state.value.user.photo = action.payload
    },
    logout: state => {
      state.value = {
        user: {
          email: null,
          localId: null,
        },
        token: null,
        profilePicture: null,
        photo: null,
      }
    },
  },
})

export const {
  setUser,
  setProfilePicture,
  setUserPhoto,
  logout,
} = authSlice.actions

export default authSlice.reducer
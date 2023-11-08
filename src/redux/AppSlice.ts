import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Artist, User } from '../types/Artist.ts'
import { AuthResponseSuccess } from '../types/auth.ts'
import { defaultPending, defaultRejected } from './defaultReducersFuncs.ts'
import { addArtist, allArtists, checkPublic, getArtist } from './artistThunks.ts'
import { addUser, deleteUser, getUsers } from './userThunks.ts'
import { authUser, sendEmail } from './otherThunks.ts'

export const getConfig = () => ({
  baseURL: 'http://37.46.129.49:8080/',
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('access_token')}`
  }
})

export type AppSliceState = {
  artists: Artist[],
  users: User[]
  isLoading: boolean,
  isInitialized: boolean,
  error: string,
  currentArtist: Artist,
  isCurrentArtistPublic: boolean,
  auth: {
    isAuth: boolean,
    isAdmin: boolean
  }
}

const initialState: AppSliceState = {
  artists: [],
  users: [],
  isLoading: false,
  isInitialized: false,
  error: 'error',
  currentArtist: {},
  isCurrentArtistPublic: false,
  auth: {
    isAuth: false,
    isAdmin: true
  }
}

export const AppSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    checkAuth: (state) => {
      if (localStorage.getItem('access_token')) {
        state.auth.isAuth = true
      }
    },
    logout: (state) => {
      state.auth.isAuth = false
    }
  },
  extraReducers: {
    // artists
    [allArtists.fulfilled.type]: (state, action: PayloadAction<Artist[]>) => {
      state.isLoading = false
      state.artists = action.payload
    },
    [getArtist.fulfilled.type]: (state, action: PayloadAction<Artist>) => {
      state.isLoading = false
      state.currentArtist = action.payload
    },
    [addArtist.fulfilled.type]: (state, action: PayloadAction<Artist[]>) => {
      state.isLoading = false
      state.artists = action.payload
    },
    [checkPublic.fulfilled.type]: (state, action: PayloadAction<boolean>) => {
      state.isLoading = false
      state.isCurrentArtistPublic = action.payload
      state.isInitialized = true
    },
    // users
    [getUsers.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },
    [addUser.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
      state.isLoading = false
      state.users = action.payload
    },
    [deleteUser.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },
    // other
    [sendEmail.fulfilled.type]: defaultRejected,
    [authUser.fulfilled.type]: (state, action: PayloadAction<AuthResponseSuccess>) => {
      const payload = action.payload
      console.log(action.payload)
      localStorage.setItem('access_token', payload.access_token)
      localStorage.setItem('token_type', payload.token_type)
      state.isLoading = false
      state.auth.isAuth = true
      state.auth.isAdmin = payload.is_admin
    },
    // artists
    [allArtists.pending.type]: defaultPending,
    [getArtist.pending.type]: defaultPending,
    [addArtist.pending.type]: defaultPending,
    [checkPublic.pending.type]: defaultPending,
    [allArtists.rejected.type]: defaultRejected,
    [getArtist.rejected.type]: defaultRejected,
    [addArtist.rejected.type]: defaultRejected,
    [checkPublic.rejected.type]: defaultRejected,
    // users
    [getUsers.pending.type]: defaultPending,
    [addUser.pending.type]: defaultPending,
    [deleteUser.pending.type]: defaultPending,
    [getUsers.rejected.type]: defaultRejected,
    [addUser.rejected.type]: defaultRejected,
    [deleteUser.rejected.type]: defaultRejected,
    // other
    [sendEmail.pending.type]: defaultPending,
    [authUser.pending.type]: defaultPending,
    [sendEmail.rejected.type]: defaultRejected,
    [authUser.rejected.type]: defaultRejected,
  }
})

export const { checkAuth, logout } = AppSlice.actions

export default AppSlice.reducer
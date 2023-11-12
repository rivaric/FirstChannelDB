import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Artist, AuthData, User, getAllArtists } from "../types/Artist.ts";
import { AuthResponseSuccess } from "../types/auth.ts";
import { defaultPending, defaultRejected } from "./defaultReducersFuncs.ts";
import {
  addArtist,
  allArtists,
  checkPublic,
  getArtist,
} from "./artistThunks.ts";
import { addUser, deleteUser, getUsers } from "./userThunks.ts";
import { authUser, getAuthData, linkEmail, sendEmail } from "./otherThunks.ts";

export const getConfig = () => ({
  baseURL: "https://пкбд.рф:8080/",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  },
});

export type AppSliceState = {
  artists: Artist[];
  users: User[];
  isLoading: boolean;
  isInitialized: boolean;
  error: string;
  currentArtist: Artist;
  isCurrentArtistPublic: boolean;
  auth: {
    isAuth: boolean;
    isAdmin: boolean;
    has_email: boolean;
  };
  max_page: number;
  cur_page: number;
  status_filter: {
    guest: boolean,
    candidate: boolean,
    employee: boolean,
  };
  input_filter: string;
};

const initialState: AppSliceState = {
  artists: [],
  users: [],
  isLoading: false,
  isInitialized: false,
  error: "error",
  currentArtist: {},
  isCurrentArtistPublic: false,
  auth: {
    isAuth: false,
    isAdmin: true,
    has_email: true,
  },
  max_page: 0,
  cur_page: 1,
  status_filter: {
    guest: false,
    candidate: false,
    employee: false,
  },
  input_filter: "",
};

export const AppSlice = createSlice({
  name: "App",
  initialState,
  reducers: {
    checkAuth: (state) => {
      if (localStorage.getItem("access_token")) {
        state.auth.isAuth = true;
      }
    },
    logout: (state) => {
      state.auth.isAuth = false;
    },
    changeCurPage: (state, action) => {
      state.cur_page = action.payload;
    },
    changeStatusFilter: (state, action) => {
      state.status_filter = action.payload;
    },
    changeInputFilter: (state, action) => {
      state.input_filter = action.payload
    },
    resetCurPage: (state) => {
      state.cur_page = 1;
    }
  },
  extraReducers: {
    // artists
    [allArtists.fulfilled.type]: (state, action: PayloadAction<getAllArtists>) => {
      const payload = action.payload;
      state.isLoading = false;
      state.artists = payload.artists;
      state.max_page = payload.max_page;
    },
    [getArtist.fulfilled.type]: (state, action: PayloadAction<Artist>) => {
      state.isLoading = false;
      state.currentArtist = action.payload;
    },
    [addArtist.fulfilled.type]: (state, action: PayloadAction<Artist[]>) => {
      state.isLoading = false;
      state.artists = action.payload;
    },
    [checkPublic.fulfilled.type]: (state, action: PayloadAction<boolean>) => {
      state.isLoading = false;
      state.isCurrentArtistPublic = action.payload;
      state.isInitialized = true;
    },
    // users
    [getUsers.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    [addUser.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
      state.isLoading = false;
      state.users = action.payload;
    },
    [deleteUser.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    // other
    [sendEmail.fulfilled.type]: defaultRejected,
    [authUser.fulfilled.type]: (
      state,
      action: PayloadAction<AuthResponseSuccess>
    ) => {
      const payload = action.payload;
      console.log(action.payload);
      localStorage.setItem("access_token", payload.access_token);
      localStorage.setItem("token_type", payload.token_type);
      localStorage.setItem("has_email", String(payload.has_email))
      state.isLoading = false;
      state.auth.isAuth = true;
      state.auth.isAdmin = payload.is_admin;
      state.auth.has_email = payload.has_email;
    },
    // AuthData
    [getAuthData.rejected.type]: defaultRejected,
    [getAuthData.pending.type]: defaultPending,
    [getAuthData.fulfilled.type] : (state, action: PayloadAction<AuthData>) => {
      const payload = action.payload;
      state.auth.has_email = payload.has_email;
      state.auth.isAdmin = payload.is_admin;
    },

    // Add email
    [linkEmail.rejected.type]: defaultRejected,
    [linkEmail.pending.type]: defaultPending,
    [linkEmail.fulfilled.type]: (state) => {
      state.auth.has_email = true;
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
  },
});

export const { checkAuth, logout, changeCurPage, changeStatusFilter, changeInputFilter, resetCurPage } = AppSlice.actions;

export default AppSlice.reducer;

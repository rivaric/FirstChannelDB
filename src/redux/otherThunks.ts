import { createAsyncThunk } from "@reduxjs/toolkit";
import { AuthFieldType } from "../types/auth.ts";
import axios from "axios";
import { AddEmailFormField, AuthData, HelpFormField } from "../types/Artist.ts";
import { getConfig } from "./AppSlice.ts";

export const authUser = createAsyncThunk(
  "auth_user",
  async (values: AuthFieldType, thunkAPI) => {
    try {
      const response = await axios.post(
        "https://пкбд.рф:8080/auth_user",
        values
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось авторизоваться");
    }
  }
);

export const sendEmail = createAsyncThunk(
  "send_email",
  async (value: HelpFormField, thunkAPI) => {
    try {
      const response = await axios.post("send_email", value, getConfig());
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(
        "Не удалось отправить запрос в поддержку"
      );
    }
  }
);

export const linkEmail = createAsyncThunk(
  "link_email",
  async (email: AddEmailFormField, thunkAPI) => {
    try {
      const response = await axios.post("link_email", email, getConfig());
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось добавить почту");
    }
  }
);

export const getAuthData = createAsyncThunk(
  "user_auth_info",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<AuthData>("user_auth_info", getConfig());
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить дополнительные данные");
    }
  }
);

export const logDownload = createAsyncThunk(
  "log_download",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.post(`log_download/${id}`, {}, getConfig());
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось удалить пользователя");
    }
  }
);

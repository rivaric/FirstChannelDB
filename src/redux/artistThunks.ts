import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Artist, ArtistList } from "../types/Artist.ts";
import { getConfig } from "./AppSlice.ts";

export const allArtists = createAsyncThunk(
  "all_artists",
  async (
    {
      cur_page,
      status_filter,
      input_filter,
    }: {
      cur_page?: number;
      status_filter?: {
        guest?: boolean;
        candidate?: boolean;
        employee?: boolean;
      };
      input_filter?: string;
    },
    thunkAPI
  ) => {
    try {
      let statusFilterStr = ""
      let inputFilterStr = input_filter !== "" ? `full_name=${input_filter}` : ""

      if (status_filter?.guest) {
        statusFilterStr += "status=Гость&"
      }

      if (status_filter?.candidate) {
        statusFilterStr += "status=Соискатель&"
      }

      if (status_filter?.employee) {
        statusFilterStr += "status=Сотрудник&"
      }
      
      const response = await axios.get<Artist[]>(
        `all_artists?page=${cur_page}&${statusFilterStr}&${inputFilterStr}`,
        getConfig()
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить персон");
    }
  }
);

export const getArtist = createAsyncThunk(
  "get_artist",
  async (id: string | undefined, thunkAPI) => {
    try {
      const response = await axios.get<Artist>(`artist/${id}`, getConfig());
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось загрузить персону");
    }
  }
);

export const addArtist = createAsyncThunk(
  "add_artist",
  async (value: Artist, thunkAPI) => {
    try {
      if (value.first_name && value.last_name && value.patronymic) {
        value.full_name =
          value.first_name + " " + value.last_name + " " + value.patronymic;
      } else if (value.first_name && value.last_name) {
        value.full_name = value.first_name + " " + value.last_name;
      }
      delete value.first_name;
      delete value.last_name;
      delete value.patronymic;
      const response = await axios.post<Artist>(
        "add_artist",
        value,
        getConfig()
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось добавить персону");
    }
  }
);

export const addArtistList = createAsyncThunk(
  "send_list",
  async (value: ArtistList, thunkAPI) => {
    try {
      const response = await axios.post<ArtistList>(
        "send_list",
        value,
        getConfig()
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось отправить список персон");
    }
  }
);

export const checkPublic = createAsyncThunk(
  "check_public",
  async (id: string | undefined, thunkAPI) => {
    try {
      const response = await axios.get<boolean>(
        `check_public/${id}`,
        getConfig()
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось проверить публичность");
    }
  }
);

export const makePublic = createAsyncThunk(
  "make_public",
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.get<boolean>(
        `make_public/${id}`,
        getConfig()
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue("Не удалось проверить публичность");
    }
  }
);

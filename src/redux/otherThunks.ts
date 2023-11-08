import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthFieldType } from '../types/auth.ts'
import axios from 'axios'
import { HelpFormField } from '../types/Artist.ts'
import { getConfig } from './AppSlice.ts'

export const authUser = createAsyncThunk(
  'auth_user',
  async (values: AuthFieldType, thunkAPI) => {
    try {
      const response = await axios.post('http://37.46.129.49:8080/auth_user', values)
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось авторизоваться')
    }
  }
)

export const sendEmail = createAsyncThunk(
  'send_email',
  async (email: HelpFormField, thunkAPI) => {
    try {
      const response = await axios.post('send_email', email, getConfig())
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось удалить пользователя')
    }
  }
)

export const logDownload = createAsyncThunk(
  'log_download',
  async (id: number, thunkAPI) => {
    try {
      const response = await axios.post(`log_download/${id}`, {}, getConfig())
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось удалить пользователя')
    }
  }
)
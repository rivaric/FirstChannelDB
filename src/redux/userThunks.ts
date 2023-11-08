import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { User } from '../types/Artist.ts'
import { AddUserFieldType } from '../components/AdminPanel/AddUser.tsx'
import { getConfig } from './AppSlice.ts'

export const getUsers = createAsyncThunk(
  'get_users',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<User[]>('get_users', getConfig())
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось посмотреть на менеджеров')
    }
  }
)

export const addUser = createAsyncThunk(
  'add_user',
  async (user: AddUserFieldType, thunkAPI) => {
    try {
      const response = await axios.post<User[]>('add_user', user, getConfig())
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось удалить пользователя')
    }
  }
)

export const deleteUser = createAsyncThunk(
  'delete_user',
  async (login: User, thunkAPI) => {
    try {
      const response = await axios.post<User[]>('delete_user', login, getConfig())
      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Не удалось удалить пользователя')
    }
  }
)


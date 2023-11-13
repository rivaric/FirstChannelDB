// @ts-nocheck
import { PayloadAction } from '@reduxjs/toolkit'

export const defaultPending = (state) => {
  state.isLoading = true
}

export const defaultRejected = (state, action: PayloadAction<any>) => {
  console.log(`${action.payload} error`)
  state.isLoading = false
  state.error = action.payload
}
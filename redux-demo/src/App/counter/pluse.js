import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  name: 'counter',
}

export const pluseSlice = createSlice({
   name: 'counter',
  initialState,
  reducers: {
    incrementpluse: (state) => {
      state.value += 1
    },
    decrementpluse: (state) => {
      state.value -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { incrementpluse, decrementpluse } = pluseSlice.actions

export default pluseSlice.reducer
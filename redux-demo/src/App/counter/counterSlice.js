import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementr: (state,input) => {
      console.log(input);
      state.value += input.payload
    },
    decrementr: (state,input) => {
      console.log(input);
      state.value -= input.payload
    },
  },
})

export const { increment, decrement, incrementByAmount,incrementr,decrementr } = counterSlice.actions

export default counterSlice.reducer
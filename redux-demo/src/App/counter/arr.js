import { createSlice } from '@reduxjs/toolkit'



export const arrSlice = createSlice({
  name: 'counter',
  initialState : {
   no: [0,1]
  },
  reducers: {
    add: (state , action) => {
      state.no.push(action.payload)
    },
    
  },
})

export const { add  } = arrSlice.actions

export default arrSlice.reducer
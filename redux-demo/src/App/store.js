import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter/counterSlice'
import   pluseReducer  from './counter/pluse'
import   arrReducer  from './counter/arr'

export const store = configureStore({
  reducer: {
      counter: counterReducer,  
      pluse: pluseReducer, 
      arr: arrReducer,
  },
})
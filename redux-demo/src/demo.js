import React, { useState } from 'react'
import { decrement, decrementr, increment, incrementr } from './App/counter/counterSlice'
import { useDispatch } from 'react-redux'

const Demo = () => {
    const dispatch = useDispatch()
    const [input,setInput] = useState(0)
    
  return (
    <div>
         
        <input type="number" name="" value={input}  onChange={(e)=>{setInput(parseInt(e.target.value))}} id="" />
        <input type="button" value="increment rendom" onClick={ ()=>{dispatch(incrementr(input))}   } />
        <input type="button" value="decrement rendom" onClick={ ()=>{dispatch(decrementr(input))}   } />

    </div>
  )
}

export default Demo

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { add } from './App/counter/arr'

const Demoarr = () => {
    const dispatch = useDispatch()
    const [input,setInput] = useState()
  const cnt = useSelector((state)=>state.arr.no)
  console.log(cnt);

    
  return (
    <div>
      
         <div>{cnt}</div>
        <input type="text" name="" value={input}  onChange={(e)=>{setInput(e.target.value)}} id="" />
        <input type="button" value="increment rendom" onClick={ ()=>{dispatch(add(input))}   } />

    </div>
  )
}

export default Demoarr

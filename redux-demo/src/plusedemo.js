import React from 'react'
import { useDispatch } from 'react-redux'
import { decrementpluse, incrementpluse } from './App/counter/pluse'

const Plusedemo = () => {
    const dispatch = useDispatch()
  return (
    <div>
      <input type="button" value="+1" onClick={()=>{dispatch(incrementpluse())}} />
      <input type="button" value="-1" onClick={()=>{dispatch(decrementpluse())}} />
    </div>
  )
}

export default Plusedemo

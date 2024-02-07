import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import React from 'react'
import { decrement, increment } from './App/counter/counterSlice';
import Demo from './demo';
import Plusedemo from './plusedemo';
import Demoarr from './arrdemo';




function App() {

  const cnt = useSelector((state)=>state.counter.value)
  const cnt1 = useSelector((state)=>state.pluse.name)
  const cnt2 = useSelector((state)=>state.pluse.value)
  

  return (
    <div>
      <div className='App'>
        <div>{cnt}</div>
       <Demo />
       <div>{cnt1}</div>
       <div>{cnt2}</div>
       <Plusedemo />
       <Demoarr />
      </div>
    </div>
  );
}

export default App;

// import logo from './logo.svg';

import './App.css';
import React from 'react';
import './style.module.css';
import styled  from 'styled-components';



const h1= {
  color:'red',
  backgroundColor:'Yellow',
  paddingLeft:"50px"
}

const Tital= styled.h1`
  font-size:3.5rem;
  text-align:center;
` ;

// const 

function App() {
  return (
    <div>
      {/* inline-css */}
      <h1 style={h1}>Good</h1>
      {/* external-css className   */}
      <h1 className='title opq'>Morning</h1>
      <Tital>Hello</Tital>

      {/* <img src="{logo}" alt="" /> */}
      <img src={require('./images/5.jpg')} width={"300px"} alt="" />
    </div>
  );
}

export default App;

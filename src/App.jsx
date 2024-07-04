import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import FRiends from './FRiends';

function App() {
 
  

  function handleClick(){
    alert('button clicked');
  }
  const handleClick2=()=>{
    alert('button clicked 2')
  }

const addToFive =(num)=>{
  alert(num+5);
}


  return (
    <>
    <FRiends></FRiends>
    <Users></Users>
      <Team> </Team>
      <Counter></Counter>
    
      <h1>Reaact core Concepts</h1>
    <button onClick={handleClick}>Click Me</button>
    <button onClick={handleClick2}> click2</button>
    <button onClick={()=>{alert('clicked 3')}}>Clicked 3</button>
    <button onClick={()=>addToFive(3)}> four</button>
    </>
  )
}

export default App

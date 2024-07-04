import { useState } from "react"

export default function Team(){
   const [team,setTeam]=useState(11);
const handleAdd= ()=>{
    const newTeam = team +1;
    setTeam(newTeam);
}
    
  const handleREmove=()=>{
    const newTEam = team -1;
    setTeam(newTEam)
  }


    const teamStyle = {
        border:'2px solid purple',
        margin:'15px',
        padding:'15px',
        borderRadius:'15px'
    }

    return (
        <div style={teamStyle}>
           <h2>plays:{team}</h2>
           <button onClick={handleAdd}>Add</button>
           <button onClick={handleREmove}>Reduce</button>
        </div>
    )
}
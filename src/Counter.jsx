import { useState } from "react"

export default function Counter(){
    const [count,setCount] = useState(0);
 
   const handleAdd = ()=>{
    const newCount = count +1;
    setCount(newCount);
   }
   const reduceNUm=()=>{
    const newCount = count -1;
    setCount(newCount);
   }
  return (
  <div style={{border:'2px solid black'}}>
     <h2>counter: {count}</h2>
     <button onClick={handleAdd}>add</button>
     <button onClick={reduceNUm}>Reduce</button>
     </div>
     )
}

import { useEffect, useState } from 'react'
import './Friend.css'
import Friend from './friend';

export default function FRiends(){
const [friend,setFriend]=useState([]);
useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setFriend(data))
},[])
    return (
        <div className='box'>
          <h2>Friends:{friend.length}</h2>
          {
            friend.map(friend=> <Friend friend={friend}></Friend>)
          }
        </div>
    )
}
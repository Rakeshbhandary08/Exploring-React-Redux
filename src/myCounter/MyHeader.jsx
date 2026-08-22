import React from 'react'
import mySlice from "./mySlice"
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from './mySlice'

const MyHeader = () => {
  let count=useSelector((state)=>state.slice3.count)
  const dispatch=useDispatch()
  return (
    <div>
      <h3>My Count {count}</h3>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default MyHeader
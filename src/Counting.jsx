import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import  {Increment,Decrement,Reset,multiply} from './Slicer1'

const Counting = () => { //state ={count:0} naam se slice1 me
   const count=useSelector((state)=>state.slicer1.count)
   const dispatch=useDispatch();
   console.log(Increment())
  return (
    <>
    <h1>Counter is {count}</h1>
    <button onClick={()=>dispatch(Increment())}>Increment</button>
    <button onClick={()=>dispatch(Decrement())}>Decrement</button>
    <button onClick={()=>dispatch(Reset())}>Reset</button>
    <button onClick={()=>dispatch(multiply())}>Multiply</button>
    </>
  )
}

export default Counting
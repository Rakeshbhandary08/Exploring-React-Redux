import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Increment,customIncreaser } from './Slicer1'

const CustomCounter = () => {
    const [number,setNumber]=useState("")
    const dispatch=useDispatch();
    console.log("HERE", customIncreaser())

    function handleClick(){
        dispatch(customIncreaser(Number(number)))  //slicer -> actions ->payload
        
    }
  return (
    <>
    <input type="number" value={number} onChange={(e)=>setNumber(e.target.value)}></input>
    <button onClick={()=>handleClick()}>Submit</button>
    </>
  )
}

export default CustomCounter
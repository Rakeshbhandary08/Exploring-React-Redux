import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const count=useSelector((state)=>state.cartSlicer.count)
  return (
    <div style={{display:"flex", justifyContent:"space-between", margin:"20px"}}>
    <h3>Flipcart</h3>
    <h3>Cart :{count}</h3>

    </div>

    
  )
}

export default Header
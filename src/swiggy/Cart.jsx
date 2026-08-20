import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import {addItem,removeItem} from './ItemSlicer'

const items = [
    { id: 1, name: "Pencil", price: 80 },
    { id: 2, name: "Eraser", price: 20 },
    { id: 3, name: "Sharpener", price: 15 },
    { id: 4, name: "Notebook", price: 120 },
    { id: 5, name: "Pen", price: 50 },
    { id: 6, name: "Ruler", price: 30 },
    { id: 7, name: "Marker", price: 90 },
    { id: 8, name: "Highlighter", price: 60 },
    { id: 9, name: "Glue Stick", price: 40 },
    { id: 10, name: "Scissors", price: 100 },
]



const Cart = () => {
  
    const [addedItems,setAddedItems]=useState([])
    const dispatch=useDispatch()

    //logic function
    const toggleClick = (item) => {
    const isAdded = addedItems.includes(item.id)

    if (isAdded) {
        dispatch(removeItem(item))         // send id to remove
        setAddedItems((prev) => prev.filter((i) => i !== item.id))
    } else {
        
        dispatch(addItem())                // send whole item object to add
        setAddedItems((prev) => [...prev, item.id])
    }
}

   
  return (
    <div style={{display:'flex', gap:"10px",flexWrap:"wrap"}}>
        {
            items.map((item)=>{
                const record=addedItems.includes(item.id)
                return(
                    <div key={item.id} style={{border:"1px solid black", padding:"10px"}}>
                        <h4>{item.name}</h4>
                        <h5>{item.price}</h5>
                        <button onClick={()=>toggleClick(item)}>{record ? "Remove":"Add"}</button>
                    </div>

                )
            })
        }
    </div>
  )
}

export default Cart
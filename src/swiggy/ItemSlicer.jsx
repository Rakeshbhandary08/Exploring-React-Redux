import { createSlice } from "@reduxjs/toolkit";



const itemSlicer=createSlice({
    name:"cartSlicer",
    initialState:{count:0},
    reducers:{
        addItem:(state)=>{state.count++},
        removeItem:(state)=>{state.count--}
    }
})


export const {addItem,removeItem} =itemSlicer.actions
export default itemSlicer.reducer;
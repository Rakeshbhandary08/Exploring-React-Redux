
import { createSlice } from '@reduxjs/toolkit';

const mySlice=createSlice({
    name:"slice3",
    initialState:{count:0},
    reducers:{
       //increment function
       increment:(state)=>{state.count=state.count+1},
       decrement:(state)=>{return {...state,count:state.count-1}}
    }

})
export const{increment,decrement}=mySlice.actions  // {type:slice3/increment, payload:undefined}
export default mySlice.reducer


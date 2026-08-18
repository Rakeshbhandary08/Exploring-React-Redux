import { createSlice } from "@reduxjs/toolkit";

//how to create slice that returns the object
const reactSlicer=createSlice({
    name:"slicer1",
    initialState:{count:0}, //object
    reducers:{              //state=initialeState={count=0}  -> it always takes the latest state
        Increment:(state)=>{state.count=state.count+1},
        Decrement:(state)=>{state.count=state.count-1},
        Reset:(state)=>{state.count=0},
        customIncreaser:(state,actions)=>{state.count=state.count + actions.payload},
        multiply:(state)=>{state.count=state.count * state.count}


    }
})

//export the functions separetely
console.log(reactSlicer)
console.log("Reducer",reactSlicer.reducer)
export const {Increment,Decrement,Reset,customIncreaser,multiply}=reactSlicer.actions
//actions {type:"slicer1/customeIncrease", payload:undefined}
export default reactSlicer.reducer;
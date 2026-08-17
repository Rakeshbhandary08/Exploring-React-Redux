# React Redux:
Redux is a state management tool for React apps. Think of it like a central storage box for all the important data our app needs to remember and share.

# What redux actually Does ?
Instead of passing data component-to-component(Props-drilling), Redux keeps all your app's data in one single place called the store. Any component in your app can directly grab what it needs from that store, no matter how deep it is in the component tree.

# DIffrence between Redux-tookit vs React-redux

[REDUX_TOOLKIT]:
Redux Toolkit (RTK) — @reduxjs/toolkit
This is the official, recommended way to write Redux logic. Think of it as a toolbox that makes plain Redux easier and less repetitive.

ex: configuStore,createSlice

[React-Redux]
React-Redux — react-redux
This is the official binding library that connects Redux to React. Redux by itself doesn't know anything about React — it's just a JavaScript state container. React-Redux is the bridge that lets your React components talk to the Redux store.

ex:Provider,useSelector,useDispatch

# Installation process
[1] : npm install react-redux
[2] : npm intall @reduxjs/toolkit


# Implementation of the Redux store
1) First configure the store 
-)import { configureStore } from "@reduxjs/toolkit";

2) In store we have to match the created slices with the reducers

# WOrking/making of a slicer
1) First create the slice using 
-> import { createSlice } from "@reduxjs/toolkit";

2) what things slicers object contain
  : name
  : InitialState
  : reducer functions in a object

Ex] const reactSlicer=createSlice({
    name:"slicer1",
    initialState:{count:0}, //object
    reducer:{              //state=initialeState={count=0}  -> it always takes the latest state
        Increment:(state)=>{state.count=state.count+1},
        Decrement:(state)=>{state.count=state.count-1},
        Reset:(state)=>{state.count=0}
    }

})

[NOTE]: TO use the variables or function that created in the slice file we need to use a hook named 'UseSelector()' provided by the react-redux


# How global state looks : 
so redux store all the state in a global state using useSelector
Example: [state.slice1.count] -< this is how to read> 

const state:{
    slice1:{
        count:0
    },
    slicer2:{
        name:"Rakesh"
    },
    slicer3:{
        age:"100"
    }
}

# Use of Dispatch:
after configuring all the slices with given files
we must have to export the actions like increment ,decrement from that slice too

Then we have to do dispatch the action after importing it:
  
  [NOTE]: so dispatch is a hook provided by redux to call a particular function of a particular slice
  
  FUnction contains the whole information about from which slice it has created and what function it is.\
   
  eg: {type: 'slicer1/Increment', payload: undefined}
  -> THis Increment is a action/function that is created inside the Slicer1 file.

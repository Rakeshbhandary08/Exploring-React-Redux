
import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slicer1"

const store=configureStore({
    reducer:{
        slicer1:slice1Reducer,  //created slice ke name ke sath configue karna padta h
        //slicer2:slice1Reducer
    }
})

export default store;

// git remote add origin https://github.com/Rakeshbhandary08/Exploring-React-Redux.git
// git branch -M main
// git push -u origin main


//how to make store with new slice
//import {configureStore} from "react-redux"
//const store=configureStore({
//     reducer:{
//         slice1:slice1Reducer
//     }
// //})
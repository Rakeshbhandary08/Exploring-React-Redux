
import { configureStore } from "@reduxjs/toolkit";
import slice1Reducer from "./Slicer1"

const store=configureStore({
    reducer:{
        slicer1:slice1Reducer,  //created slice ke name ke sath configue karna padta h
        //slicer2:slice1Reducer
    }
})

export default store;
    
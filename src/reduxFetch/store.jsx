import { configureStore } from "@reduxjs/toolkit";
import sliceAPI from "./slicer4"

const store4=configureStore({
     reducer:{
      slice4:sliceAPI
    }
})

export default store4;
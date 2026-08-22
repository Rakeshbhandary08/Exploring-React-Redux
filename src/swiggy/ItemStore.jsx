import { configureStore } from "@reduxjs/toolkit";
import mySlice from "../myCounter/mySlice"

import cartSlicer from "./ItemSlicer"

//configure the createdslice name with import
const itemStore=configureStore({
    reducer:{
      cartSlicer:cartSlicer,
      slice3:mySlice
    }
})

export default itemStore;
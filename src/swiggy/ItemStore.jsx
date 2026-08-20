import { configureStore } from "@reduxjs/toolkit";

import cartSlicer from "./ItemSlicer"

//configure the createdslice name with import
const itemStore=configureStore({
    reducer:{
      cartSlicer:cartSlicer
    }
})

export default itemStore;
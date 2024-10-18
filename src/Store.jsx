import { configureStore } from "@reduxjs/toolkit";
import mycount from "./CounterSlice"
const Store=configureStore({
    reducer:{
      mycounter:mycount
    }
})
export default Store;
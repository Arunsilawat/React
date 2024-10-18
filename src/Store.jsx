import { configureStore } from "@reduxjs/toolkit";
import todo from "./TodoSlice"
const Store=configureStore({
    reducer:{
       mytodo:todo
    }
})
export default Store;
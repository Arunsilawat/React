import { configureStore } from "@reduxjs/toolkit";
import myto from "./todolist"
const Store=configureStore({
    reducer:{
        mytodo:myto
    }
})
export default Store;
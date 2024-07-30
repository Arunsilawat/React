import { configureStore } from "@reduxjs/toolkit";
import Result from "./MySlice";
const MyStore=configureStore({
    reducer:{
       mycounter:Result
    }
})
export default MyStore;
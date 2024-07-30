import { createSlice } from "@reduxjs/toolkit";
 
const MySlice=createSlice({
    name:"mycounter",
    initialState:{
        cnt:0
    },
    reducers:{
        myinc:(state,)=>{
            state.cnt=state.cnt+1;
        },
        mydic:(state)=>{
            state.cnt=state.cnt-1;
        }
    }
})
export default MySlice.reducer;
export const {myinc,mydic}=MySlice.actions;
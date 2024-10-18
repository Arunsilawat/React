import { createSlice } from "@reduxjs/toolkit";


const TodoSlice=createSlice({
    name:"mytodo",
    initialState:{
        task:[]
    },
    reducers:{
        addtask:(state,actions)=>{
            state.task.push(actions.payload)
        },
        deltask:(state,actions)=>{
            // state.task=state.task.filter(item=>item.id!=actions.payload)
            state.task=state.task.filter(item=>item.id!=actions.payload)
        }
    }
})
export default TodoSlice.reducer;
export const {addtask,deltask}=TodoSlice.actions;
import { createSlice } from "@reduxjs/toolkit";
const todolist=createSlice({
    name:"mytodo",
    initialState:{
        task:[]
    },
    reducers:{
        addtask:(state,actions)=>{
            state.task.push(actions.payload)
        },
        deldata:(state,actions)=>{
            state.task= state.task.filter(items=>items.id!=actions.payload)
        },
        comdata:(state,actions)=>{
            for(var i=0;i<state.task.length;i++){
                if(state.task[i].id==actions.payload){
                    state.task[i].complate=true;        
                }
            }
        },
        uncomdata:(state,actions)=>{
            for(var i=0;i<state.task.length;i++){
                if(state.task[i].id==actions.payload){
                    state.task[i].complate=false;
                }
            }
        },
        editsave:(state,actions)=>{
            for(var i=0;i<state.task.length;i++){
                if(state.task[i].id==actions.payload.id){
                    state.task[i].task=actions.payload.task
                }
            }
        }
    }
})
export default todolist.reducer;
export const {addtask,deldata,comdata,uncomdata,editsave}=todolist.actions;
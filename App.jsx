import { useState } from "react"; 
import { useSelector,useDispatch } from "react-redux";
import { addtask } from "./TodoSlice";
 const App=()=>{
    const [val,setVal]=useState("");
    const mytask=useSelector((state)=>state.todolist.task)
    const mydic=useDispatch()
    const AddVal=()=>{
     mydic(addtask({id:Date.now(),task:val}))
    }
    const sro=0
    const ans=mytask.map((key)=>{
        sro++;
        return(
            <>
            <tr>
                <td>{sro}</td>
                <td>{key.task}</td>
            </tr>
            </>
        )
    })
    return(
        <>
        <h1>To Do App</h1>
        Enter Value : <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
        <button onClick={AddVal}>Submit</button>
        <hr size="2" color="black"/>
         <table>
            <tr>
                <td>S No</td>
                <td>Task</td>
            </tr>
            {ans}
         </table>
        </>
    )
}
export default App;
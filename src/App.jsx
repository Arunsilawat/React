
import { useSelector,useDispatch } from "react-redux";
import { addtask,deltask } from "./TodoSlice";
import { useState } from "react";
const App=()=>{
   const result=useSelector((state)=>state.mytodo.task)
   const mydis=useDispatch();
   const [txt,setMytxt]=useState("")
   const datasubmit=()=>{
      mydis(addtask({id:Date.now(),task:txt}))
      setMytxt("")
   }
   const deletetask=(id)=>{
      mydis(deltask(id))
   }
   
   let sno=0
   const ans=result.map((key)=>{
      sno++
      return(
         <>
         <tr>
            <td>{sno}</td>
            <td>{key.task}</td>
            <td>
            <a href="#">
               <button onClick={()=>{deletetask(key.id)}}>Delete</button>
            </a>
            </td>
          </tr>
         </>
      )
   })
   return (
      <>
      <input type="text" onChange={(e)=>{setMytxt(e.target.value)}} value={txt} />
      <button onClick={datasubmit}>Add</button>
      <table>
         <tr>
             <th>S No</th>
             <th>Task</th>
             <th>Delete</th>
         </tr>
         {ans}
      </table>
      </>
   )
}
export default App;
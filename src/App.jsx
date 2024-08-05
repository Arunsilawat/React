import { useSelector,useDispatch } from "react-redux";
import { addtask ,deltask,comptask} from "./TodoSlice";
import { useState } from "react";
const App=()=>{
   const mydata=useSelector((state)=>state.todo.task);
   const mydic=useDispatch();
   const [myinput,setMyinput]=useState("");
   const addData=()=>{
      mydic(addtask({id:Date.now(),task:myinput,complate:false}))
      setMyinput("")
   }
   const deleteTask=(id)=>{
      mydic(deltask(id))
   }
   const complatetask=(myid)=>{
      mydic(comptask(myid))
   }
   let sno=0;
   const ans=mydata.map((key)=>{
      sno++
         return(
            <>
            <tr>
               <td>{sno}</td>
               <td>{key.task}</td>
               <th>
                  <button onClick={()=>{deleteTask(key.id)}} >Delete</button>
               </th>
               <td>
                  {key.complate ? <span>{key.task}</span> }
                  <button  onClick={()=>{complatetask(key.id)}}>Complate</button>
               </td>
            </tr>
            </>
         )
   })
   return(
      <>
      <h1>Cybrom</h1>
      Enter Data : <input type="text" value={myinput} onChange={(e)=>{setMyinput(e.target.value)}}/>
      <button onClick={addData}>Add</button>
      <hr />
      <table>
         <tr>
            <th>S No</th>
            <th>Task</th>
         </tr>
         {ans}
      </table>
      </>
   )
}

export default App;
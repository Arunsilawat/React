import { useSelector,useDispatch } from "react-redux"
import { addtask ,deldata,comdata,uncomdata,editsave} from "./todolist"
import { useState } from "react";
const App=()=>{
   const result=useSelector((state)=>state.mytodo.task);
   const mydic=useDispatch();
   const [mytask,setMytask]=useState("");
   const [mybtn,setMybtn]=useState("");
   const [myid,setMyid]=useState("");
   const submitdata=()=>{
      mydic(addtask({id:Date.now(),task:mytask,complate:false}))
      setMytask("")
   }
 
   const deletedata=(id)=>{
      mydic(deldata(id))
   }
   const complatedata=(id)=>{
      mydic(comdata(id))
   }
   const uncomplatedata=(id)=>{
      mydic(uncomdata(id))
   }
   const editdata=(id,task)=>{
      setMytask(task)
      setMybtn(true)
      setMyid(id)
   }
   const editsavedata=(id,task)=>{
      mydic(editsave({id:id,task:task}))
      setMytask("")
      setMybtn(false)
   }
   let sno=0
   const ans=result.map((key)=>{
      sno++
      return(
         <>
         <tr style={{border:'2px solid black'}}>
            <td style={{border:'2px solid black'}}>{sno}</td>
            <td>{key.complate ? <span style={{border:'2px solid black',textDecoration:"line-through",color:"red"}}>{key.task}</span> : key.task}</td>
            <a href="#">
            <button onClick={()=>{deletedata(key.id)}}>Delete</button>
            </a> 
            <a href="#">
            <button onClick={()=>{complatedata(key.id)}}>Complate</button>
            </a>        
            <a href="#">
            <button onClick={()=>{uncomplatedata(key.id)}}>Uncomplate</button>
            </a>    
            <a href="#">
            <button onClick={()=>{editdata(key.id,key.task)}}>Edit</button>
            </a>             
         </tr>
         </>
      )
   })
   return(
      <>
      <h1>My To Do List</h1>
      Add Your Data : <input type="text" value={mytask} onChange={(e)=>{setMytask(e.target.value)}}/>
      {mybtn?<button onClick={()=>{editsavedata(myid,mytask)}}>Edit Save</button> :<button onClick={submitdata}>Save</button>}
      <hr />
      <h1>...Data Display...</h1>
      <table style={{border:'2px solid black'}}>
         <tr style={{border:'2px solid black'}}>
            <td style={{border:'2px solid black'}}>No </td>
            <td style={{border:'2px solid black'}}>Task</td>
            <td style={{border:'2px solid black',textAlign:'center'}}>Updates</td>
         </tr>
         {ans}
      </table>
      </>
   )
}
export default App;
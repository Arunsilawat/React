
import { useDispatch,useSelector } from "react-redux";
import { changecolor } from "./ColorSlice";
import { useState } from "react";
const App=()=>{
   const result=useSelector((state)=>state.mycolor.bgcolor)
   const mydic=useDispatch();
   const [txt,setMytxt]=useState("")
   return(
      <>
        
        <div style={{width:'400px',height:'300px',border:'2px solid black',backgroundColor:result}}>
        </div><br />
        <input type="text" onChange={(e)=>{setMytxt(e.target.value)}} />
         <button onClick={()=>{mydic(changecolor(txt))}}>Change Color</button>
      </>
   )
}
export default App;
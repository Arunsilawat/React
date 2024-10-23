

import { useSelector,useDispatch } from "react-redux";
import { changecolor } from "./ColorSlice";
import { useState } from "react";
const App=()=>{
    const result=useSelector((state)=>state.mycolor.bgcolor)
    const mydic=useDispatch();
    const [txt,setMytxt]=useState("")
    return(
        <>
        <div style={{backgroundColor:result,width:'400px',height:'300px',margin:'auto',marginTop:'150px'}}></div>
        <input type="text" onChange={(e)=>{setMytxt(e.target.value)}}/>
        <button onClick={()=>{mydic(changecolor(txt))}}>Change Color</button>
        </>
    )
}
export default App;
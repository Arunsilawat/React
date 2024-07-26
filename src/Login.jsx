
import { useState } from "react";

const Login=()=>{
    const [nm,setNm]=useState("")
    const [pass,setPass]=useState("")
    const Login=()=>{
        
     }
    return(
        <>
        <h1>User Login </h1>
        Enter User ID : <input type="text" name="name" value={nm} onChange={(e)=>{setNm(e.target.value)}} /><br /><br />
        Passward       : <input type="passward" name="pass" value={pass} onChange={(e)=>{setPass(e.target.value)}} /><br /><br />
        <button onClick={Login}>Login</button>
        </>
    )
}
export default Login;